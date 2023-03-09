import moment, { Moment } from "moment";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  AddPassageRequest,
  ClassType,
  Passage,
  UpdatePassageRequest,
} from "../types";

class PassageService {
  private passagesRef;

  constructor() {
    this.passagesRef = collection(db, "passages");
  }

  /**
   * 암송 시작 날짜랑 종료 날짜 얻어오기
   */
  private getStartAndEndDateByClassType(
    passage: Passage,
    classType: ClassType
  ) {
    let startDate = "";
    let endDate = "";

    if (classType === "thursday") {
      startDate = passage.start_date_a;
      endDate = passage.end_date_b;
    } else {
      startDate = passage.start_date_b;
      endDate = passage.end_date_b;
    }

    return { startDate, endDate };
  }

  /**
   * 이번주 기간에 해당하는 암송 구절 찾기
   */
  private isPassageForThisWeek(
    today: Moment,
    passage: Passage,
    classType: ClassType
  ) {
    const { startDate, endDate } = this.getStartAndEndDateByClassType(
      passage,
      classType
    );

    if (
      today.isSameOrBefore(moment(endDate)) &&
      today.isSameOrAfter(moment(startDate))
    ) {
      return true;
    }

    return false;
  }

  /**
   * 이번주 암송 데이터 얻어오기
   */
  getPassagesForThisWeek(classType: ClassType, passages: Passage[]) {
    const today = moment().format("YYYY-MM-DD");

    console.log(
      "hey",
      passages.filter((passage) =>
        this.isPassageForThisWeek(moment(today), passage, classType)
      )
    );

    return passages.filter((passage) =>
      this.isPassageForThisWeek(moment(today), passage, classType)
    );
  }

  updatePassage(data: UpdatePassageRequest) {
    const passageDoc = doc(db, "passages", data.id);
    return updateDoc(passageDoc, data);
  }

  addPassage(data: AddPassageRequest) {
    return addDoc(this.passagesRef, data);
  }

  /**
   * 전체 암송 데이터 fetch
   */
  async getPassages() {
    const data = await getDocs(this.passagesRef);
    const docs = data.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      } as Passage;
    });
    return docs;
  }

  /** 전체 암송 구절 얻어오기 */
  // getAllPassages() {
  //   return this.passages;
  // }
}

export default new PassageService();

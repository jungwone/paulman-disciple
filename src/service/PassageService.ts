import moment, { Moment } from "moment";
import { ClassType } from "../components/App";
import { Passage } from "../data";

export default class PassageService {
  constructor(private passages: Passage[]) {}

  private getStartAndEndDateByClassType(
    passage: Passage,
    classType: ClassType
  ) {
    let startDate = "";
    let endDate = "";

    if (classType === "sunday") {
      startDate = passage.startDate;
      endDate = passage.endDate;
    } else {
      startDate = passage.t_startDate;
      endDate = passage.t_endDate;
    }

    return { startDate, endDate };
  }

  /**
   * 이번주 기간에 해당하는 암송 구절 찾기
   */
  private findPassagesForThisWeek(
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
  getPassagesForThisWeek(classType: ClassType) {
    const today = moment().format("YYYY-MM-DD");

    return this.passages.filter((passage) =>
      this.findPassagesForThisWeek(moment(today), passage, classType)
    );
  }

  /** 전체 암송 구절 얻어오기 */
  getAllPassages() {
    return this.passages;
  }
}

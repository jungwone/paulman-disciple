import moment, { Moment } from "moment";
import { Passage } from "../data";

export default class PassageService {
  constructor(private passages: Passage[]) {}

  /**
   * 이번주 기간에 해당하는 암송 구절 찾기
   */
  private findPassagesForThisWeek(today: Moment, passage: Passage) {
    const startDate = moment(passage.startDate);
    const endDate = moment(passage.endDate);

    if (today.isSameOrBefore(endDate) && today.isSameOrAfter(startDate)) {
      return true;
    }

    return false;
  }

  /**
   * 이번주 암송 데이터 얻어오기
   */
  getPassagesForThisWeek() {
    const today = moment().format("YYYY-MM-DD");

    return this.passages.filter((passage) =>
      this.findPassagesForThisWeek(moment(today), passage)
    );
  }
}

export type Passage = {
  address: string; // 성경 주소
  content: string; // 말씀
};

export type Recitation = {
  date: string;
  passages: Passage[];
};

const RecitationSchedule: Recitation[] = [
  {
    date: "5/1",
    passages: [
      {
        address: "요한복음 1:1",
        content:
          "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라",
      },
      {
        address: "고린도후서 13:13",
        content:
          "주 예수 그리스도의 은혜와 하나님의 사랑과 성령의 교통하심이 너희 무리와 함께 있을지어다",
      },
    ],
  },
];

export default RecitationSchedule;

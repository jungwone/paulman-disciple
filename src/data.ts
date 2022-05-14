export type Passage = {
  id: string;
  address: string; // 성경 주소
  content: string; // 말씀
  startDate: string;
  endDate: string;
};

const Passages: Passage[] = [
  {
    id: "1",
    address: "요한복음 1:1",
    content:
      "태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라",
    startDate: "20220425",
    endDate: "20220501",
  },
  {
    id: "2",
    address: "고린도후서 13:13",
    content:
      "주 예수 그리스도의 은혜와 하나님의 사랑과 성령의 교통하심이 너희 무리와 함께 있을지어다",
    startDate: "20220425",
    endDate: "2022501",
  },
  {
    id: "3",
    address: "로마서 5:12",
    content:
      "그러므로 한 사람으로 말미암아 죄가 세상에 들어오고 죄로 말미암아 사망이 들어왔나니 이와 같이 모든 사람이 죄를 지었으므로 사망이 모든 사람에게 이르렀느니라",
    startDate: "20220502",
    endDate: "20220508",
  },
  {
    id: "4",
    address: "히브리서 9:27",
    content: "한 번 죽는 것은 사람에게 정해진 것이요 그 후에는 심판이 있으리니",
    startDate: "20220502",
    endDate: "20220508",
  },
  {
    id: "5",
    address: "히브리서 4:15",
    content:
      "우리에게 있는 대제사장은 우리의 연약함을 동정하지 못하실 이가 아니요 모든 일에 우리와 똑같이 시험을 받으신 이로되 죄는 없으시니라",
    startDate: "20220509",
    endDate: "20220515",
  },
  {
    id: "6",
    address: "요한복음 14:6",
    content:
      "예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라",
    startDate: "20220509",
    endDate: "20220515",
  },
  {
    id: "7",
    address: "로마서 5:8",
    content:
      "우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에 대한 자기의 사랑을 확증하셨느니라",
    startDate: "20220509",
    endDate: "20220515",
  },
  {
    id: "8",
    address: "갈라디아서 3:13",
    content:
      "그리스도께서 우리를 위하여 저주를 받은 바 되사 율법의 저주에서 우리를 속량하셨으니 기록된 바 나무에 달린 자마다 저주 아래에 있는 자라 하였음이라",
    startDate: "20220509",
    endDate: "20220515",
  },
];

export default Passages;

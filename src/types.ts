export type Passage = {
  id: string;
  address: string; // 성경 주소
  content: string; // 말씀
  start_date_a: string;
  end_date_a: string;
  start_date_b: string;
  end_date_b: string;
};

export type ClassType = "sunday" | "thursday";

export type PassageResponse = {
  id: string;
  address: string;
  start_date_a: string;
  end_date_a: string;
  start_date_b: string;
  end_date_b: string;
  content: string;
};

export type AddPassageRequest = Omit<PassageResponse, "id">;

export type UpdatePassageRequest = PassageResponse;

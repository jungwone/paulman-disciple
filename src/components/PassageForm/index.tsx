import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useState } from "react";
import { AddPassageRequest, Passage, UpdatePassageRequest } from "../../types";

interface Props {
  passage?: Passage;
  buttonText?: string;
  mode: "add" | "update";
  id?: string;
  updatePassage?: (data: UpdatePassageRequest) => void;
  addPassage?: (data: AddPassageRequest) => void;
}

const PassageForm = ({
  passage,
  buttonText = "업데이트",
  mode,
  id = "",
  updatePassage,
  addPassage,
}: Props) => {
  const [passageData, setPassageData] = useState({
    id: passage?.id || "",
    address: passage?.address || "",
    start_date_a: passage?.start_date_a || "",
    end_date_a: passage?.end_date_a || "",
    start_date_b: passage?.start_date_b || "",
    end_date_b: passage?.end_date_b || "",
    content: passage?.content || "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassageData({
      ...passageData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (mode === "add") {
      handleAddPassage();
    } else {
      handleUpdatePassage();
    }
  };

  const handleUpdatePassage = () => {
    if (!updatePassage) return;
    updatePassage(passageData);
  };

  const handleAddPassage = () => {
    if (!addPassage) return;
    addPassage(passageData);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            placeholder="말씀 주소(예: 롬3:8-9)"
            name="address"
            variant="filled"
            defaultValue={passageData.address}
            onChange={handleInputChange}
          />
          <Week>
            <WeekText>목요일반</WeekText>
            <DateSection>
              <label>시작 날짜</label>
              <Input
                name="start_date_a"
                type={"date"}
                defaultValue={passageData.start_date_a}
                onChange={handleInputChange}
              />
            </DateSection>
            <DateSection>
              <label>종료 날짜</label>
              <Input
                name="end_date_a"
                type={"date"}
                defaultValue={passageData.end_date_a}
                onChange={handleInputChange}
              />
            </DateSection>
          </Week>

          <Week>
            <WeekText>주일반</WeekText>
            <DateSection>
              <label>시작 날짜</label>
              <Input
                name="start_date_b"
                type={"date"}
                defaultValue={passageData.start_date_b}
                onChange={handleInputChange}
              />
            </DateSection>
            <DateSection>
              <label>종료 날짜</label>
              <Input
                name="end_date_b"
                type={"date"}
                defaultValue={passageData.end_date_b}
                onChange={handleInputChange}
              />
            </DateSection>
          </Week>

          <Textarea
            name="content"
            placeholder="말씀을 입력해주세요(엔터 없이)."
            mb={4}
            mt={4}
            defaultValue={passageData.content}
          />
        </div>
        <Box textAlign={"right"}>
          <Button backgroundColor="#f5566c" color={"#fff"} type="submit">
            업데이트
          </Button>
        </Box>
      </form>
    </Wrapper>
  );
};
export default PassageForm;

const Wrapper = styled.div`
  text-align: left;
  border-radius: 24px;
  box-shadow: 5px 6px 15px 0px rgba(0, 0, 0, 0.8);
  padding: 16px;
`;

const Week = styled.div`
  padding: 8px 0px;
`;

const WeekText = styled.div`
  text-align: left;
  font-weight: bold;
  margin-bottom: 4px;
`;

const DateSection = styled.div`
  & + & {
    margin-top: 6px;
  }

  label {
    margin-right: 8px;
  }
`;

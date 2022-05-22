import { Passage } from "../../data";
import PassageCard from "../PassageCard";
import styled from "@emotion/styled";
import { ClassType } from "../App";
import { css } from "@emotion/react";

interface Props {
  passages: Passage[];
  classType: ClassType;
  onClickClassType: (value: ClassType) => void;
}

const PassagesForThisWeek = ({
  passages,
  classType,
  onClickClassType,
}: Props) => {
  return (
    <Wrapper>
      <h2>이번주 암송✨</h2>
      <ClassTypeSection>
        <Button
          selected={classType === "sunday"}
          style={{ marginRight: "8px" }}
          onClick={() => {
            onClickClassType("sunday");
          }}
        >
          주일반
        </Button>
        <Button
          selected={classType === "tuesday"}
          onClick={() => {
            onClickClassType("tuesday");
          }}
        >
          화요일반
        </Button>
      </ClassTypeSection>

      <ul style={{ textAlign: "center" }}>
        {passages.map((passage) => (
          <li key={passage.address}>
            <PassageCard passage={passage} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default PassagesForThisWeek;

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const ClassTypeSection = styled.div`
  text-align: right;
  padding-right: 1em;
`;

const Button = styled.button<{ selected: boolean }>`
  height: 36px;
  border-radius: 30px;
  background-color: #fff;
  outline: none;
  cursor: pointer;
  border: 1px solid gray;

  ${(props) =>
    props.selected &&
    css`
      background-color: #f5566c;
      color: #fff;
      border: none;
    `}
`;

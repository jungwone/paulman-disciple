import PassageCard from "../PassageCard";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ClassType, Passage } from "../../types";
import { Heading } from "@chakra-ui/react";

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
      <Heading as={"h2"} size="lg" mb={6}>
        이번주 암송✨
      </Heading>
      <ClassTypeSection>
        <Tab
          selected={classType === "thursday"}
          onClick={() => {
            onClickClassType("thursday");
          }}
          style={{ marginRight: "8px" }}
        >
          목요일반
        </Tab>
        <Tab
          selected={classType === "sunday"}
          onClick={() => {
            onClickClassType("sunday");
          }}
        >
          주일반
        </Tab>
      </ClassTypeSection>

      <ul style={{ textAlign: "center", marginTop: "32px" }}>
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

const Tab = styled.button<{ selected: boolean }>`
  height: 36px;
  border-radius: 30px;
  background-color: #fff;
  outline: none;
  border: 1px solid gray;
  padding: 0 1rem;

  ${(props) =>
    props.selected &&
    css`
      background-color: #f5566c;
      color: #fff;
      border: none;
    `}
`;

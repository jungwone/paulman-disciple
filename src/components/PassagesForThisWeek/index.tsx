import { Passage } from "../../data";
import PassageCard from "../PassageCard";
import styled from "@emotion/styled";

interface Props {
  passages: Passage[];
}

const PassagesForThisWeek = ({ passages }: Props) => {
  return (
    <Wrapper>
      <h2>이번주 암송✨</h2>

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

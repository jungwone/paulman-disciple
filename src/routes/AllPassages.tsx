import styled from "@emotion/styled";
import PassageCard from "../components/PassageCard";
import { Passage } from "../types";

interface Props {
  passages: Passage[];
}

const AllPassages = ({ passages }: Props) => {
  return (
    <Wrapper>
      <Notice>
        추후 조금씩 개편 예정입니다. 필요한게 있다면 말씀해주세요 :)
      </Notice>
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

export default AllPassages;

const Wrapper = styled.div``;
const Notice = styled.div`
  padding: 1em;
  text-align: left;
`;

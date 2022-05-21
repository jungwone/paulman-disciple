import { Passage } from "../../data";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface Props {
  passage: Passage;
}

const PassageCard = ({ passage }: Props) => {
  return (
    <Wrapper>
      <Address>{passage.address}</Address>
      <Content>{passage.content}</Content>
      <TestButton to={`/test/${passage.id}`}>테스트</TestButton>
    </Wrapper>
  );
};

export default PassageCard;

const Wrapper = styled.div`
  background-color: #fff;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 1.5em;
  padding: 1em;
  line-height: 1.3;
  border-radius: 24px;
  box-shadow: 5px 6px 15px 0px rgba(0, 0, 0, 0.8);
`;

const Address = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
`;

const Content = styled.pre`
  text-align: left;
  white-space: pre-line;
`;

const TestButton = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  background-color: #f5566c;
  color: #fff;
  border-radius: 30px;
  margin-left: auto;
  margin-top: 12px;
`;

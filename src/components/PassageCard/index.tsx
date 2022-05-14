import React from "react";
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
      <Link to={`/test/${passage.id}`}>테스트하기</Link>
    </Wrapper>
  );
};

export default PassageCard;

const Wrapper = styled.div`
  max-width: 380px;
  background-color: #fff;
  margin: 1em;
`;

const Address = styled.div`
  font-weight: bold;
`;

const Content = styled.div``;

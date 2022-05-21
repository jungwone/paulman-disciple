import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Diff, DiffMatchPatch } from "diff-match-patch-ts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Passages, { Passage } from "../data";

const diff = new DiffMatchPatch();

const PassageTest = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [text, setText] = useState("");
  const [passage, setPassage] = useState<Passage>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<Diff[]>([]);

  const onCheckPassage = () => {
    if (!passage) return;
    const diffResult = diff.diff_main(passage.content, text);
    console.log(diffResult);
    setResult(diffResult);
    setIsSubmitted(true);
  };

  const onReset = () => {
    setIsSubmitted(false);
    setText("");
  };

  useEffect(() => {
    const passage = Passages.find((passage) => passage.id === id);
    setPassage(passage);
  }, [id]);

  return (
    <Wrapper>
      <Address>{passage?.address}</Address>
      {!isSubmitted && (
        <>
          <TextArea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <ButtonDiv>
            <Button
              onClick={() => {
                onCheckPassage();
              }}
            >
              결과 확인
            </Button>
          </ButtonDiv>
        </>
      )}

      <div>
        {isSubmitted && (
          <>
            <div style={{ marginBottom: "12px" }}>
              <Content>{passage?.content}</Content>
            </div>
            <div style={{ textAlign: "left" }}>
              {result.map(([flag, text], index) => (
                <Text flag={flag} key={index}>
                  {text}
                </Text>
              ))}
            </div>
            <ButtonDiv>
              <Button
                onClick={() => {
                  onReset();
                }}
              >
                다시하기
              </Button>
            </ButtonDiv>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default PassageTest;

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Address = styled.div`
  font-weight: bold;
  margin-bottom: 32px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
`;

const Content = styled.pre`
  text-align: left;
  white-space: pre-line;
`;

const Text = styled.span<{ flag: number }>`
  ${(props) =>
    props.flag === -1 &&
    css`
      color: red;
      text-decoration: line-through;
    `}

  ${(props) =>
    props.flag === 1 &&
    css`
      color: green;
    `}
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  background-color: #f5566c;
  color: #fff;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;

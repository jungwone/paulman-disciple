import React, { useEffect } from "react";
import styled from "@emotion/styled";
import {
  faXmark,
  faHouse,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  show?: boolean;
  onCloseSideMenu: VoidFunction;
}

const SlideMenu = ({ show, onCloseSideMenu }: Props) => {
  useEffect(() => {
    if (!show) return;
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [show]);

  return (
    <Wrapper className={`${show ? "show" : "hide"}`}>
      <TopSection>
        <button>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            color="#FFF"
            onClick={onCloseSideMenu}
          />
        </button>
      </TopSection>
      <Title>축복합니다 💫</Title>
      <LinkSection>
        <LinkButton to={"/"} onClick={onCloseSideMenu}>
          <FontAwesomeIcon
            icon={faHouse}
            size={"1x"}
            style={{ marginRight: "10px" }}
          />
          홈으로
        </LinkButton>
        <LinkButton to={"/passages"} onClick={onCloseSideMenu}>
          <FontAwesomeIcon
            icon={faBookOpen}
            size={"1x"}
            style={{ marginRight: "10px" }}
          />
          암송구절 전체보기
        </LinkButton>
      </LinkSection>
    </Wrapper>
  );
};

export default SlideMenu;

const Wrapper = styled.div`
  background-color: #1c1f24;
  width: 70vw;
  height: 100vh;
  transition: all 0.35s ease;
  position: absolute;
  right: 0;
  top: 0;
  padding-top: 20px;

  &.hide {
    transform: translateX(100vw);
  }
  &.show {
  }
`;

const TopSection = styled.div`
  text-align: right;
  color: #fff;
  margin-bottom: 16px;
  padding-right: 8px;
  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: #fff;
  font-size: 24px;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  display: block;
  margin-bottom: 20px;
`;

const LinkSection = styled.section`
  margin-top: 32px;
`;

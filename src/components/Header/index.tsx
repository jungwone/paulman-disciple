import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.svg";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import SlideMenu from "../SlideMenu";

const Header = () => {
  const [isSlideMenuVisible, setIsSlideMenuVisible] = useState(false);

  const onClickMenuBar = () => {
    setIsSlideMenuVisible(true);
  };

  const onCloseSideMenu = () => {
    setIsSlideMenuVisible(false);
  };

  return (
    <>
      <HeaderWrapper>
        <InnerSection></InnerSection>
        <div>
          <Link to={"/"}>
            <img src={LogoImage} alt="paul man" width={80} />
          </Link>
        </div>
        <InnerSection>
          <Button
            visible={!isSlideMenuVisible}
            onClick={() => {
              onClickMenuBar();
            }}
          >
            <FontAwesomeIcon icon={faBarsStaggered} size={"2x"} />
          </Button>
        </InnerSection>
      </HeaderWrapper>
      <SlideMenu show={isSlideMenuVisible} onCloseSideMenu={onCloseSideMenu} />
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 48px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding-top: 0.5em;
  margin-bottom: 24px;
`;

const InnerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<{ visible: boolean }>`
  background-color: #fff;
  outline: none;
  border: none;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

import {
  FirstLinks,
  HamBar,
  Hamburguer,
  HeaderContainer,
  LinkNav,
  LinksNav,
  LogoButton,
  LogoContainer,
  RocketImg,
  SignContainer,
} from "./HeaderStyle/HeaderStyle";
import Rocket from "./../../assets/Logo.svg";
import BlueButton from "./../Global/BlueButton";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuButton = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <RocketImg src={Rocket}></RocketImg>
        <LogoButton>Hoster is hiring</LogoButton>
      </LogoContainer>
      <LinksNav openMenu={openMenu}>
        <FirstLinks>
          <LinkNav>Plans</LinkNav>
          <LinkNav>Find Domain</LinkNav>
          <LinkNav>Why Hosterr?</LinkNav>
        </FirstLinks>
        <SignContainer>
          <LinkNav>Sign In</LinkNav>
          <BlueButton text="Join Waitlist"></BlueButton>
        </SignContainer>
      </LinksNav>
      <Hamburguer onClick={openMenuButton}>
        <HamBar openMenu={openMenu}></HamBar>
        <HamBar openMenu={openMenu}></HamBar>
        <HamBar openMenu={openMenu}></HamBar>
      </Hamburguer>
    </HeaderContainer>
  );
}

export default Header;

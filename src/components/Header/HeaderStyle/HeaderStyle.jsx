import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 7%;
`;

export const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RocketImg = styled.img``;

export const LogoButton = styled.a`
  background: linear-gradient(to left, var(--red), var(--orange));
  border: none;
  color: var(--white);
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to right, var(--red), var(--orange));
  }
`;

export const LinksNav = styled.section`
  display: flex;
  gap: 20px;
  width: 55%;
  justify-content: space-between;
  transition: 0.5s;

  @media (max-width: 870px) {
    position: fixed;
    width: 50%;
    justify-content: center;
    top: 0;
    height: 100vh;
    right: ${({ openMenu }) => (openMenu ? "0%" : "-100%")};
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 49;
  }
`;

export const FirstLinks = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkNav = styled.a`
  color: var(--dark-gray);
  font-size: 0.95rem;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: var(--black);
  }
`;

export const SignContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Hamburguer = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 870px) {
    display: flex;
    z-index: 50;
  }
`;

export const HamBar = styled.span`
  width: 45px;
  height: 2px;
  background-color: var(--black);
  transition: 0.5s;

  &:nth-child(1) {
    position: ${({ openMenu }) => (openMenu ? "absolute" : "static")};
    transform: ${({ openMenu }) =>
      openMenu ? "rotate(45deg)" : "rotate(0deg)"};
  }
  &:nth-child(2) {
    position: ${({ openMenu }) => (openMenu ? "absolute" : "static")};
    opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
  }
  &:nth-child(3) {
    position: ${({ openMenu }) => (openMenu ? "absolute" : "static")};
    transform: ${({ openMenu }) =>
      openMenu ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`;

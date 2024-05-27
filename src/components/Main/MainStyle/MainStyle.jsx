import styled from "styled-components";
import Checkmark from "./../../../assets/Checkmark.svg";

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 100px 7%;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

export const MainText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const MainTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.6rem, 4vw, 4rem);
  max-width: 600px;
`;

export const MainParagraph = styled.p`
  color: var(--dark-gray);
  font-size: 1rem;
  line-height: 20px;
  max-width: 450px;
`;

export const MainForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
export const EmailInput = styled.input`
  border: none;
  padding: 15px 40px 15px 15px;
  color: var(--dark-gray);
  font-size: 0.9rem;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const SecondParagraph = styled.p`
  color: var(--dark-gray);
  font-size: 1rem;
  position: relative;
  padding-left: 35px;
  &:before {
    position: absolute;
    content: "";
    background-image: url(${Checkmark});
    width: 24px;
    height: 24px;
    left: 0px;
    top: -4px;
  }
`;

export const MainImgPrincipalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const MainImgContainer = styled.div`
  position: relative;
  width: 500px;
  max-width: 300px;
  height: 100%;
`;

export const MainImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;

  @media (max-width: 1020px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    max-width: 230px;
    right: 30px;
  }

  &:nth-child(1) {
    z-index: 0;
  }
  &:nth-child(2) {
    z-index: -1;
    transform: rotate(-15deg);
  }
  &:nth-child(3) {
    z-index: -2;
    transform: rotate(-30deg);
  }
  &:nth-child(4) {
    z-index: -3;
    transform: rotate(-45deg);
  }
`;

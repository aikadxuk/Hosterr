import {
  EmailInput,
  MainContainer,
  MainForm,
  MainImg,
  MainImgContainer,
  MainImgPrincipalContainer,
  MainParagraph,
  MainText,
  MainTitle,
  SecondParagraph,
} from "./MainStyle/MainStyle";
import BlueButton from "../Global/BlueButton";
import Img1 from "./../../assets/Hero Image (Model).png";
import Img2 from "./../../assets/Purple Shape.svg";
import Img3 from "./../../assets/Pink Shape.svg";
import Img4 from "./../../assets/Blue Shape.svg";

export const Main = () => {
  return (
    <MainContainer>
      <MainText>
        <MainTitle>Host your website in less than 5 minutes.</MainTitle>
        <MainParagraph>
          With Hosterr, your website up and running in no less than 5 minutes
          with most competitive pricing packages available online.
        </MainParagraph>
        <MainForm>
          <EmailInput
            type="email"
            placeholder="Enter email address"
          ></EmailInput>
          <BlueButton text="Join Waitlist"></BlueButton>
        </MainForm>
        <SecondParagraph>No spam, ever. Unsubscribe anytime</SecondParagraph>
      </MainText>
      <MainImgPrincipalContainer>
        <MainImgContainer>
          <MainImg src={Img1}></MainImg>
          <MainImg src={Img2}></MainImg>
          <MainImg src={Img3}></MainImg>
          <MainImg src={Img4}></MainImg>
        </MainImgContainer>
      </MainImgPrincipalContainer>
    </MainContainer>
  );
};

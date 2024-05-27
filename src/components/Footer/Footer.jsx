import {
  AvatarContainer,
  AvatarImg,
  AvatarInfo,
  AvatarInfoLink,
  AvatarInfoText,
  AvatarSection,
  FooterContainer,
  FooterLink,
  LinksContainer,
} from "./FooterStyle/FooterStyle";
import Avatar from "./../../assets/Help Avatar.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <FooterLink href="#">Facebook</FooterLink>
        <FooterLink href="#">Instagram</FooterLink>
        <FooterLink href="#">Twitter</FooterLink>
      </LinksContainer>
      <AvatarSection>
        <AvatarContainer>
          <AvatarImg src={Avatar}></AvatarImg>
        </AvatarContainer>
        <AvatarInfo>
          <AvatarInfoText>Have any questions?</AvatarInfoText>
          <AvatarInfoLink href="#">Talk to a specialist</AvatarInfoLink>
        </AvatarInfo>
      </AvatarSection>
    </FooterContainer>
  );
};

import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px 7%;
  justify-content: space-between;

  @media (max-width: 1020px) {
    padding-top: 300px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const LinksContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--dark-gray);
  transition: 0.5s;

  &:hover {
    color: var(--black);
  }
`;

export const AvatarSection = styled.article`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AvatarContainer = styled.div``;

export const AvatarImg = styled.img``;

export const AvatarInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AvatarInfoText = styled.p`
  font-family: "Playfair Display", serif;
`;

export const AvatarInfoLink = styled.a`
  color: var(--black);
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
`;

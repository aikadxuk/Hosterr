import styled from "styled-components";

const BlueButton = ({ text }) => {
  const Button = styled.a`
    background: var(--blue);
    padding: 15px 25px;
    font-size: 0.9rem;
    color: var(--white);
    border: none;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      --blue: #4977ea90;
    }
  `;

  return <Button>{text}</Button>;
};

export default BlueButton;

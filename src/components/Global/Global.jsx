import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* font-family: "Playfair Display", serif; */

    :root{
        --blue: #4977EA;
        --orange: #EAB251;
        --red: #EA5473;
        --white: #ffffff;
        --gray: #F9F4E8;
        --dark-gray: #878582;
        --black: #000000;
    }

    body{
        font-family: "Lato", sans-serif;
        background-color: var(--gray);
    }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
    }

    body {
      font-family: 'Mark Pro', sans-serif;
      margin: 0;
    }
`;

const Reset = () => {
  return (
    <GlobalStyle />
  );
};

export default Reset;
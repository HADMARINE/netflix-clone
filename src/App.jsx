import React from "react";
import Main from "./pages/Main.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body{
    margin:0;
    padding: 0;
  }
  body{
    @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,500&display=swap");

  * {
  text-decoration: none !important;
  font-family: "Noto Sans KR", sans-serif;
  }
  overflow-x:hidden;

    background-color:black;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}
export default App;

import React, { Component } from "react";
import Main from "./pages/Main.jsx";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner.jsx";
import Tv from "./pages/TV";

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
  a{
    text-decoration:none;
    color:white;
  }
  overflow-x:hidden;

    background-color:black;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/tv">
            <Tv />
          </Route>
          component={Main} />
        </Switch>
      </Router>
    );
  }
}
export default App;

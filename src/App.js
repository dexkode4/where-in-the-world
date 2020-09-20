import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Header from "./components/header/header.component";
import CountrySummary from "./pages/summary/countrySummary.page";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// #212E37
const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props =>
    props.theme.mode === "dark" ? "#212E37" : "#fafafa"};
		color: ${props => (props.theme.mode === "dark" ? "#fff" : "#000")};
}
.header{
	background-color: ${props =>
    props.theme.mode === "dark" ? "#2B3743" : "#fff"};
}

.directory-menu-filter-all{
	background-color: ${props =>
    props.theme.mode === "dark" ? "#2B3743" : "#fff"};
    color: ${props => (props.theme.mode === "dark" ? "#fff" : "#000")};
  } 
  .country-card{
    background-color: ${props =>
    props.theme.mode === "dark" ? "#2B3743" : "#fff"};
      color: ${props => (props.theme.mode === "dark" ? "#fff" : "#000")};
    }

    .btn{
      background-color: ${props =>
    props.theme.mode === "dark" ? "#2B3743" : "#fff"};
          color: ${props => (props.theme.mode === "dark" ? "#fff" : "#000")};
    }

    .ui.selection.dropdown, .ui.selection.dropdown .divider.default.text , .visible.menu.transition{
      background-color: ${props =>
    props.theme.mode === "dark" ? "#2B3743" : "#fff"};
              color: ${props => (props.theme.mode === "dark" ? "#fff" : "#000")};
    }
    .ui.active.visible.selection.dropdown .visible.menu.transition{
      color: ${props => (props.theme.mode === "dark" ? "#fff !important" : "#000 !important")};
    }
`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" })
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>
          <Header handleToggle={(e) => setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })} />
          <Switch>
            <Route path="/:country">
              <CountrySummary />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

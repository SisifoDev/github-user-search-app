import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";

import Content from "./components/molecules/Content";
import NavBar from "./components/molecules/NavBar";
import SearchBar from "./components/molecules/SearchBar";

function App() {
  const userTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "darkTheme"
    : "lightTheme";

  const [theme, setTheme] = useState(userTheme);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [search, setSearch] = useState("octocat");
  // const search = "octocat";
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios(`https://api.github.com/users/${search}`);
      setUserInfo(consulta.data);
    };

    consultaAPI();
  }, [search]);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const joinedDate = new Date(userInfo.created_at).toLocaleDateString(
    "en-EN",
    options
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Main>
          {/* <button onClick={themeToggler}>Switch Theme</button> */}
          <NavBar theme={theme} onClick={themeToggler} />
          <SearchBar setSearch={setSearch} />
          <Content
            name={userInfo.name}
            user={userInfo.login}
            avatar={userInfo.avatar_url}
            date={joinedDate}
            repos={userInfo.public_repos}
            followers={userInfo.followers}
            following={userInfo.following}
            bio={userInfo.bio}
          />
        </Main>
      </>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 31px 24px;
  /* border: 1px solid red; */

  @media (min-width: 768px) {
    margin: 140px 98px;
    gap: 10px;
  }

  @media (min-width: 1440px) {
    margin: 144px 355px;
  }
`;

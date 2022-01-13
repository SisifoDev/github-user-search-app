import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import Content from "./components/molecules/Content";

import NavBar from "./components/molecules/NavBar";
import SearchBar from "./components/molecules/SearchBar";

function App() {
  // const [search, setSearch] = useState("");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios("https://api.github.com/users/octocat");
      setUserInfo(consulta.data);
    };

    consultaAPI();
  }, []);
  const joinedDate = new Date(userInfo.created_at).toDateString();
  console.log(userInfo);
  return (
    <Main>
      <NavBar />
      <SearchBar />
      <Content
        name={userInfo.name}
        user={userInfo.login}
        avatar={userInfo.avatar_url}
        date={joinedDate}
      />
    </Main>
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
  }

  @media (min-width: 1440px) {
    margin: 144px 355px;
  }
`;

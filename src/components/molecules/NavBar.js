import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Toggle from "./Toggle";

export default function NavBar({ theme }) {
  return (
    <Nav>
      <Title>devfinder</Title>
      <Toggle theme={theme} />
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

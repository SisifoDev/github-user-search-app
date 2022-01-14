import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Toggle from "./Toggle";

export default function NavBar({ theme, onClick }) {
  return (
    <Nav>
      <Title>devfinder</Title>
      <Toggle theme={theme} onClick={onClick} />
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

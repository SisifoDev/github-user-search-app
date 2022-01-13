import React from "react";
import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  left: 89.32%;
  right: 0%;
  top: 23.68%;
  bottom: 23.68%;
`;

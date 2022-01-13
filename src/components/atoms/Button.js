import React from "react";
import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  color: var(--white);
  font-family: Space Mono;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  background: var(--intenseBlue);
  width: max-content;
  height: 50px;
  border-radius: 10px;
  padding: 12px 23px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

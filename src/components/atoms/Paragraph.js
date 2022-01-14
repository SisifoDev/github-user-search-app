import React from "react";
import styled from "styled-components";

export default function Paragraph({ children }) {
  return <ParagraphStyled>{children}</ParagraphStyled>;
}

const ParagraphStyled = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;

  & a {
    color: ${({ theme }) => theme.intenseBlue};
    text-decoration: none;
  }
`;

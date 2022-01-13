import React from "react";
import styled from "styled-components";

export default function Paragraph({ children }) {
  return <ParagraphStyled>{children}</ParagraphStyled>;
}

const ParagraphStyled = styled.p`
  color: var(--grayLight);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
`;

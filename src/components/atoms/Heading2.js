import React from "react";
import styled from "styled-components";

export default function Heading2({ children }) {
  return <Heading2Styled>{children}</Heading2Styled>;
}

const Heading2Styled = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.strongText};
  line-height: 24px;

  text-align: left;
`;

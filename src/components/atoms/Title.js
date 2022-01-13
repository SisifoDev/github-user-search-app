import React from "react";
import styled from "styled-components";

export default function Title({ children }) {
  return <Heading1>{children}</Heading1>;
}

const Heading1 = styled.h1`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0px;
  text-align: left;
`;

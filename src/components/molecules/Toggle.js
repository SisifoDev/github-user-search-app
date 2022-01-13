import React from "react";
import styled from "styled-components";

export default function Toggle() {
  return (
    <ToggleWrapper>
      <ToogleText>Light</ToogleText>
      <Icon src="assets/icon-moon.svg" />
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const ToogleText = styled.span`
  font-size: 13px;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 2.5px;
  text-align: right;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  color: currentColor;
  margin-left: 16px;
`;

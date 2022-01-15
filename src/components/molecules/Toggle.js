import React from "react";
import styled from "styled-components";
import IconMoon from "../atoms/IconMoon";
import IconSun from "../atoms/IconSun";

export default function Toggle({ theme, onClick }) {
  return (
    <ToggleWrapper onClick={onClick}>
      {theme !== "light" ? (
        <>
          <ToogleText>Light</ToogleText>
          <IconSun fill="currentColor" width={20} height={20} />
        </>
      ) : (
        <>
          <ToogleText>Dark</ToogleText>
          <IconMoon fill="currentColor" width={20} height={20} />
        </>
      )}
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
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
  margin-right: 16px;
`;

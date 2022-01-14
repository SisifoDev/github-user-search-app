import React from "react";
import styled from "styled-components";
import IconMoon from "../atoms/IconMoon";
import IconSun from "../atoms/IconSun";

export default function Toggle({ theme }) {
  return (
    <ToggleWrapper>
      {theme === "light" ? (
        <>
          <ToogleText>Light</ToogleText>
          <IconSun fill="currentColor" width={20} height={20} />
        </>
      ) : (
        <>
          <ToogleText>Night</ToogleText>
          <IconMoon fill="currentColor" width={20} height={20} />
        </>
      )}
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--grayLight);

  &:hover {
    cursor: pointer;
    color: #222731;
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

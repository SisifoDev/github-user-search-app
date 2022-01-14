import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import IconSearch from "../atoms/IconSearch";

export default function SearchBar() {
  return (
    <SearchWrap>
      <TextIconWrapper>
        <IconSearch width={20} height={20} fill="#0079ff" />

        <input type="text" placeholder="Search GitHub username…" />
      </TextIconWrapper>
      <Button>Search</Button>
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  background: ${({ theme }) => theme.bgCard};
  height: 60px;
  width: 100%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 7px 16px 7px;
  margin-top: 36px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;

const TextIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
  align-items: center;

  & input {
    border: none;
    background: transparent;
    width: 100%;
    color: ${({ theme }) => theme.strongText};
    font-family: "Space Mono", monospace;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

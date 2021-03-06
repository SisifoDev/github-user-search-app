import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import IconSearch from "../atoms/IconSearch";

export default function SearchBar({ setSearch }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
  };
  return (
    <SearchWrap>
      <TextIconWrapper>
        <IconSearch width={20} height={20} fill="#0079ff" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search GitHub username…"
          />
        </form>
      </TextIconWrapper>
      <Button onClick={handleSubmit}>Search</Button>
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
  padding: 16px 7px 16px 20px;
  margin-top: 36px;
  box-shadow: ${({ theme }) => theme.shadow};
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
    color: ${({ theme }) => theme.text};
    opacity: 0.9;
    font-family: "Space Mono", monospace;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media (min-width: 768px) {
    gap: 24px;
    & input {
      font-size: 18px;
    }
  }
`;

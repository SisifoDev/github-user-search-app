import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";

export default function Details({ repos, followers, following }) {
  return (
    <DetailsWrapper>
      <DetailsContent>
        <Paragraph>Repos</Paragraph>
        <Title>{repos}</Title>
      </DetailsContent>
      <DetailsContent>
        <Paragraph>Followers</Paragraph>
        <Title>{followers}</Title>
      </DetailsContent>
      <DetailsContent>
        <Paragraph>Following</Paragraph>
        <Title>{following}</Title>
      </DetailsContent>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  background: ${({ theme }) => theme.body};
  margin: 24px 0;
  padding: 18px 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

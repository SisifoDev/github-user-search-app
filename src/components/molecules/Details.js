import React from "react";
import styled from "styled-components";
import Heading2 from "../atoms/Heading2";
import Paragraph from "../atoms/Paragraph";

export default function Details({ repos, followers, following }) {
  return (
    <DetailsWrapper>
      <DetailsContent>
        <Paragraph>Repos</Paragraph>
        <Heading2>{repos}</Heading2>
      </DetailsContent>
      <DetailsContent>
        <Paragraph>Followers</Paragraph>
        <Heading2>{followers}</Heading2>
      </DetailsContent>
      <DetailsContent>
        <Paragraph>Following</Paragraph>
        <Heading2>{following}</Heading2>
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
  justify-content: space-around;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: start;
  }

  @media (min-width: 1440px) {
  }
`;

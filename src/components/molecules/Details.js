import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";

export default function Details({ repos, followers, following }) {
  return (
    <DetailsWrapper>
      <div>
        <Paragraph>Repos</Paragraph>
        <Title>{repos}</Title>
      </div>
      <div>
        <Paragraph>Followers</Paragraph>
        <Title>{followers}</Title>
      </div>
      <div>
        <Paragraph>Following</Paragraph>
        <Title>{following}</Title>
      </div>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  background: #f6f8ff;
  margin: 24px 0;
  padding: 18px 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

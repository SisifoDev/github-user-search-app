import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";

export default function Details() {
  return (
    <DetailsWrapper>
      <div>
        <Paragraph>Repos</Paragraph>
        <Title>8</Title>
      </div>
      <div>
        <Paragraph>Followers</Paragraph>
        <Title>3938</Title>
      </div>
      <div>
        <Paragraph>Following</Paragraph>
        <Title>8</Title>
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

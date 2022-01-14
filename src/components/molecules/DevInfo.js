import React from "react";
import styled from "styled-components";
import Avatar from "../atoms/Avatar";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";

export default function DevInfo({ name, user, avatar, date }) {
  return (
    <DevInfoWrapper>
      <Avatar avatar={avatar} />
      <div>
        <Title>{name}</Title>
        <Paragraph>@{user}</Paragraph>
        <Paragraph>Joined {date}</Paragraph>
      </div>
    </DevInfoWrapper>
  );
}

const DevInfoWrapper = styled.div`
  display: flex;
  gap: 19px;
  align-items: center;
  padding: 32px 24px;
`;

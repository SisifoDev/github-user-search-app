import React from "react";
import styled from "styled-components";
import Avatar from "../atoms/Avatar";
import Heading2 from "../atoms/Heading2";
import Paragraph from "../atoms/Paragraph";

export default function DevInfo({ name, user, avatar, date }) {
  return (
    <DevInfoWrapper>
      <Avatar avatar={avatar} />
      <div>
        <Heading2>{name}</Heading2>
        <Paragraph>
          <a href="/">@{user}</a>
        </Paragraph>
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

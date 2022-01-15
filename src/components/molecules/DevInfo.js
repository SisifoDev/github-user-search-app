import React from "react";
import styled from "styled-components";
import Avatar from "../atoms/Avatar";
import Heading2 from "../atoms/Heading2";
import Paragraph from "../atoms/Paragraph";

export default function DevInfo({ name, user, avatar, date }) {
  return (
    <DevInfoWrapper>
      <Avatar avatar={avatar} />
      <UserInfo>
        <Heading2>{name}</Heading2>
        <Paragraph>
          <UserLink href="/">@{user}</UserLink>
        </Paragraph>
        <Paragraph>Joined {date}</Paragraph>
      </UserInfo>
    </DevInfoWrapper>
  );
}

const DevInfoWrapper = styled.div`
  display: flex;
  gap: 19px;
  justify-content: start;
  align-items: center;
  padding-bottom: 32px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-areas:
      "top top"
      "bottom bottom";

    :nth-child(1) {
      grid-area: top;
    }
    :nth-child(2) {
      grid-area: bottom bottom;
    }
    :nth-child(3) {
      grid-area: top;
    }
  }
`;

const UserLink = styled.a`
  color: ${({ theme }) => theme.intenseBlue};
  text-decoration: none;
`;

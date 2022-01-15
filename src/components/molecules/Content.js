import React from "react";
import styled from "styled-components";
import Avatar from "../atoms/Avatar";
import Heading2 from "../atoms/Heading2";
import Paragraph from "../atoms/Paragraph";
import Details from "./Details";
import SocialLinks from "./SocialLinks";

export default function Content({
  name,
  user,
  avatar,
  date,
  repos,
  followers,
  following,
  bio,
}) {
  return (
    <SectionContent>
      <AvatarWrappper>
        <Avatar avatar={avatar} />
      </AvatarWrappper>
      <NameWrapper>
        <Heading2>{name}</Heading2>
      </NameWrapper>
      <DateWrapper>
        <Paragraph>Joined {date}</Paragraph>
      </DateWrapper>
      <NickWrapper>
        <Paragraph>
          <UserLink href="/">@{user}</UserLink>
        </Paragraph>
      </NickWrapper>
      <BioWrapper>
        <Paragraph>
          {bio === null ? "No information available 😔" : bio}
        </Paragraph>
      </BioWrapper>
      <DetailWrapper>
        <Details repos={repos} followers={followers} following={following} />
      </DetailWrapper>
      <SocialWrapper>
        <SocialLinks />
      </SocialWrapper>
    </SectionContent>
  );
}

const SectionContent = styled.section`
  display: grid;
  grid-template-rows: repeat(6, auto);
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    "avatar user"
    "avatar nick"
    "avatar date"
    "bio bio"
    "details details"
    "social  social";

  background: ${({ theme }) => theme.bgCard};
  border-radius: 15px;
  margin-top: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 32px 24px;

  @media (min-width: 1440px) {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(3, auto);
    grid-template-areas:
      "avatar user  date"
      "avatar nick  ."
      "avatar bio bio"
      ". details details"
      ". social  social";
    padding: 48px;
  }
`;

const AvatarWrappper = styled.div`
  grid-area: avatar;
`;

const NameWrapper = styled.div`
  grid-area: user;
`;

const DateWrapper = styled.div`
  grid-area: date;
`;

const NickWrapper = styled.div`
  grid-area: nick;
`;

const BioWrapper = styled.div`
  margin-top: 32px;
  grid-area: bio;
`;

const DetailWrapper = styled.div`
  grid-area: details;
`;

const SocialWrapper = styled.div`
  grid-area: social;
`;

const UserLink = styled.a`
  color: ${({ theme }) => theme.intenseBlue};
  text-decoration: none;
`;

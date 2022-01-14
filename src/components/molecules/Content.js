import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import Details from "./Details";
import DevInfo from "./DevInfo";
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
      <DevInfo name={name} user={user} avatar={avatar} date={date} />
      <SectionContentWrapper>
        <Paragraph>
          {bio === null ? "No information available 😔" : bio}
        </Paragraph>
        <Details repos={repos} followers={followers} following={following} />
        <SocialLinks />
      </SectionContentWrapper>
    </SectionContent>
  );
}

const SectionContent = styled.section`
  background: ${({ theme }) => theme.bgCard};
  width: 100%;
  border-radius: 15px;
  margin-top: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const SectionContentWrapper = styled.div`
  padding: 0 24px 48px 24px;
`;

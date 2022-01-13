import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import Details from "./Details";
import DevInfo from "./DevInfo";
import SocialLinks from "./SocialLinks";

export default function Content({ name, user, avatar, date }) {
  return (
    <SectionContent>
      <DevInfo name={name} user={user} avatar={avatar} date={date} />
      <SectionContentWrapper>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </Paragraph>
        <Details />
        <SocialLinks />
      </SectionContentWrapper>
    </SectionContent>
  );
}

const SectionContent = styled.section`
  background: var(--white);
  width: 100%;
  border-radius: 15px;
  margin-top: 16px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;

const SectionContentWrapper = styled.div`
  padding: 0 24px 48px 24px;
`;
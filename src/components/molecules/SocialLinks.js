import React from "react";
import styled from "styled-components";
import IconCompany from "../atoms/IconCompany";
import IconLocation from "../atoms/IconLocation";
import IconTwitter from "../atoms/IconTwitter";
import IconWebsite from "../atoms/IconWebsite";
import Paragraph from "../atoms/Paragraph";

export default function SocialLinks() {
  return (
    <WrapperLinks>
      <WrapperLinksDetails>
        <IconLocation fill="currentColor" width={20} height={20} />{" "}
        <Paragraph>San Francisco</Paragraph>
      </WrapperLinksDetails>
      <WrapperLinksDetails>
        <IconWebsite fill="currentColor" width={20} height={20} />{" "}
        <Paragraph>
          <LinkStiled>https://github.blog</LinkStiled>
        </Paragraph>
      </WrapperLinksDetails>
      <WrapperLinksDetails>
        <IconTwitter fill="currentColor" width={20} height={20} />{" "}
        <Paragraph>Not Available</Paragraph>
      </WrapperLinksDetails>
      <WrapperLinksDetails>
        <IconCompany fill="currentColor" width={20} height={20} />{" "}
        <Paragraph>
          <LinkStiled>@github</LinkStiled>
        </Paragraph>
      </WrapperLinksDetails>
    </WrapperLinks>
  );
}

const WrapperLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const WrapperLinksDetails = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 19px;
  :hover {
    opacity: 0.5;
  }
`;

const LinkStiled = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

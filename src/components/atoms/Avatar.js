import React from "react";
import styled from "styled-components";

export default function Avatar({ avatar }) {
  return (
    <AvatarWrappper>
      <img src={avatar} alt="user" />
    </AvatarWrappper>
  );
}

const AvatarWrappper = styled.div`
  display: flex;
  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 117px;
      height: 117px;
    }
  }
`;

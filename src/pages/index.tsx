import React from 'react';
import styled from "styled-components"

import CoverArt from '../components/Image';
import SEO from '../components/SEO';

const Body = styled.div`
  background: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3vh;
  margin-bottom: 10vh;

  img {
    height: 85vh;
    object-fit: contain;
    width: 90vw;
  }
`;

export default function HomePage() {
  return (
    <>
      <SEO title="Home" />
      <Body>
        <Header>
          <CoverArt />
        </Header>
      </Body>
    </>
  );
}

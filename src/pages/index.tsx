import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from 'gatsby'

import SEO from '../components/SEO';
import Logo from '../components/Logo';
import { rgba } from '../utils/rgba';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
    margin: 0;
  }
`

const Body = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Border = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  height: 9px;
  margin-top: 15px;
  border: 2px solid rgba(255, 255, 0, 0.5);
  border-width: 1px 0 1px 0;
`;

const BorderSegment = styled.div`
  flex: 1;
  background-color: ${({ color }) => rgba(color, 0.95)};
  margin-right: 2px;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0px 0px 1px 1px ${({ color }) => rgba(color, 0.5)};
  height: 100%;  

  &:first-child {
    margin-left: -6px;
  }

  &:last-child {
    margin-right: -3px;
  }
`;

const BorderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const BorderHighlight = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.0);
  mix-blend-mode: multiply;
  height: 9px;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;  

  img {
    padding-top: 20px;
    padding-bottom: 10px;
    width: 130px;
  }
`;

export default function HomePage() {
  const intl = useIntl();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { menuItem1, menuItem2, menuItem3 } = useStaticQuery(graphql`
  
  query {
    menuItem1: file(relativePath: { eq: "taco_hand.jpg" }) {
      publicURL
    }

    menuItem2: file(relativePath: { eq: "on_banana_leave.jpg" }) {
      publicURL
    }

    menuItem3: file(relativePath: { eq: "with_pineapple.jpg" }) {
      publicURL
    }

    animatedFireworks: file(relativePath: { eq: "fireworks.svg" }) {
      publicURL
    }
  }
`);

  return (
    <>
      <GlobalStyle />
      <SEO pageName="menu" />
      <Body>
        <Header>
          <Logo />          
        </Header>
        <BorderContainer>
          <Border>
            <BorderSegment color="#b8c0c6" />
            <BorderSegment color="#b8c0c6" />
            <BorderSegment color="#b8c0c6" />
            <BorderSegment color="#b8c0c6" />
            <BorderSegment color="#b8c0c6" />
            <BorderSegment color="#b8c0c6" />
          </Border>  
        </BorderContainer>
      </Body>
    </>
  );
}

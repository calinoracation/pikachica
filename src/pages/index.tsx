import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from 'gatsby'

import SEO from '../components/SEO';
import Logo from '../components/Logo';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ff6600;
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

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    padding-top: 10px;
    width: 150px;
  }
`;

const fadeIn = keyframes`
0% {
  max-height: 0px;
  visibility: hidden;
}

100% {
  max-height: 600px;
  visibility: visible;
}
`;

const fadeOut = keyframes`
0% {
  max-height: 600px;
  visibility: visible;
}

100% {
  max-height: 0px;
  visibility: hidden;
}
`;

const MenuList = styled.ul`
  box-shadow: 0px 2px 6px 1px rgba(84,237,9, .7);
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1px;
  grid-column-gap: 1px;
  background: #ff6600;
  border-width: 1px 0;
  border-style: solid;
  border-color: #ff6600;
  display: grid;
  animation-name: ${props => props.visible ? fadeIn : fadeOut};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TacoButton = styled.button`
  background: #fff;
  border: 2px solid #ff6600;
  border-radius: 30px;
  box-shadow: 0px 0px 4px 2px rgba(84,237,9, .4);
  align-self: center;
  margin: 40px 0;
  padding: 12px 25px;
  font-size: 1.2rem;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 30px;
    border: 1px solid #554c4c;
  }
`;

const MenuItem = styled.li`
  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
        <TacoButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
          {intl.formatMessage({ id: 'common.order' })}
        </TacoButton>
        <MenuList visible={isMenuVisible}>
          <MenuItem>
            <img src={menuItem1.publicURL} />
          </MenuItem>
          <MenuItem>
            <img src={menuItem2.publicURL} />
          </MenuItem>
          <MenuItem>
            <img src={menuItem3.publicURL} />
          </MenuItem>
          <MenuItem>
            <img src={menuItem1.publicURL} />
          </MenuItem>
        </MenuList>       
      </Body>
    </>
  );
}

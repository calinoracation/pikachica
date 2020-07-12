import React from 'react';
import styled, { createGlobalStyle } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from 'gatsby'

import SEO from '../components/SEO';
import Logo from '../components/Logo';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fffcf6;
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

const MenuList = styled.ul`
  box-shadow: -3px 5px 2px -1px rgba(255, 102, 0, 1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0px;
  grid-column-gap: 0px;
  background: #fff9ef;
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 20px;
  padding: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  img {
    width: 100%;
    height: 120px;
    object-fit: contain;
  }
`;

export default function HomePage() {
  const intl = useIntl();
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
        <MenuList>
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

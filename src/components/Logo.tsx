import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function CoverArt() {
  const { artImage } = useStaticQuery(graphql`
    query {
      artImage: file(relativePath: { eq: "newlogo.png" }) {
        publicURL
      }
    }
  `);

  return <img src={artImage.publicURL} />;
}

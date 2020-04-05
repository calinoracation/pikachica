import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function CoverArt() {
  const { artImage } = useStaticQuery(graphql`
    query {
      artImage: file(relativePath: { eq: "itsallfine.svg" }) {
        publicURL
      }
    }
  `);

  return <img src={artImage.publicURL} />;
}

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        artImage: file(relativePath: { eq: "itsallfine.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img src={data.artImage.publicURL} />}
  />
)
export default Image

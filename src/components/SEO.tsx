import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { useIntl, IntlShape } from "gatsby-plugin-intl"

function getPageMessage({ key, intl, pageName } : { key: string; intl: IntlShape, pageName: string }) {
  const pageSpecificMessage = intl.formatMessage({ id: `pages.${pageName}.${key}`});

  return pageSpecificMessage ?? intl.formatMessage({ id: `pages.default.${key}`});
}

function SEO({ pageName = 'default', lang, keywords, meta }) {
  const intl = useIntl();

  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query SEOMetadataQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  
  const siteDescription = getPageMessage({ key: 'description', intl, pageName });
  const siteTitle = getPageMessage({ key: 'title', intl, pageName });

  return (
    <Helmet
      defer={false}
      title={siteTitle}
      titleTemplate={`%s | ${intl.formatMessage({ id: 'siteMetadata.title' })}`}
      meta={[
        {
          name: `description`,
          content: siteDescription,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: intl.formatMessage({ id: 'siteMetadata.author' }),
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: siteDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

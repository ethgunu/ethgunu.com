/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const { image, author, siteUrl } = site.siteMetadata

  return (
    <>
      <title>{title ? `${defaultTitle} - ${title}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={`${siteUrl}/${image}?cache-break-4`} />
      <meta name="og:title" content={title} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={`${siteUrl}/${image}?cache-break-4`} />

      <meta name="twitter:site" content={author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author || ``} />
      {children}
    </>
  )
}

export default Seo

import * as React from "react"

import { useTranslation } from "gatsby-plugin-react-i18next"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "./main/Hero"
import Slogan from "./main/Slogan"
import WhoShouldAttend from "./main/WhoShouldAttend"
import Speakers from "./main/Speakers"
import FAQ from "./main/FAQ"

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Hero />
    <Slogan />
    <WhoShouldAttend />
    <Speakers />
    <FAQ />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("Meet Ethereum")} />
}

export default IndexPage

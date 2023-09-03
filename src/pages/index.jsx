import * as React from "react"

import { useTranslation } from "gatsby-plugin-react-i18next"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/main/Hero"
import Slogan from "../components/main/Slogan"
import WhoShouldAttend from "../components/main/WhoShouldAttend"
import Speakers from "../components/main/Speakers"
import FAQ from "../components/main/FAQ"
// import Footer from "../components/main/Footer"

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
    {/* <Footer /> */}
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

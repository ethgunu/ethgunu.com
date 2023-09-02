import * as React from "react"

import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Seo from "../components/seo"
import logo from "../images/ethgunu-text-only.png"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import "../components/Kaleidoscope"

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
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen mt-4 bg-gradient-to-t from-gunuNavy from-0% to-40%">
      <img
        src={logo}
        alt="logo"
        className="px-4 md:px-12 lg:w-[800px] lg:px-0"
      />
      <h1 className="text-xl md:text-4xl xl:text-5xl text-gunuOrange mt-2">
        <Trans>Meet Ethereum</Trans>
      </h1>
    </div>
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

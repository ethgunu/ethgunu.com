import * as React from "react"

import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Seo from "../components/seo"
import logo from "../images/ethgunu-horizontal.png"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

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
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen animate-gradient-y bg-[linear-gradient(#ffe1dd,#d2d2ff,#d2ffe6,#ffe1dd)]">
      <img src={logo} alt="logo" className="px-4 md:px-12 lg:w-1/2 lg:px-0" />
      <h1 className="text-xl md:text-4xl xl:text-5xl text-[#3636c4] font-ptSans">
        <Trans>Meet Ethereum</Trans>
      </h1>
      <p className="text-sm md:text-base text-[#3636c4] font-ptSans mt-4">
        Pek yakında...
      </p>
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

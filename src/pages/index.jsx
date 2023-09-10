import React, { useEffect, useState } from "react"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/main/Hero"
import Slogan from "../components/main/Slogan"
import WhoShouldAttend from "../components/main/WhoShouldAttend"
import Speakers from "../components/main/Speakers"
import FAQ from "../components/main/FAQ"
import Footer from "../components/main/Footer"
import Seo from "../components/seo"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"

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
    <Footer />
  </Layout>
)

export default IndexPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = "ETHGünü - " + t("Meet Ethereum")
    document.documentElement.classList.add("scroll-smooth")
  }, [])

  return (
    <>
      {/* <html className="scroll-smooth" lang="tr" /> */}
      <Seo />
    </>
  )
}

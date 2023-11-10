import React, { useEffect } from "react"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/main/Hero"
import Slogan from "../components/main/Slogan"
import WhoShouldAttend from "../components/main/WhoShouldAttend"
import Speakers from "../components/main/Speakers"
import FAQ from "../components/main/FAQ"
import Footer from "../components/main/Footer"
import Seo from "../components/seo"
import LiveStream from "../components/main/LiveStream"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Schedule from "../components/main/Schedule"

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

const IndexPage = () => {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = "ETHGünü - " + t("Meet Ethereum")
    document.documentElement.classList.add("scroll-smooth")
  }, [t])

  return (
    <Layout>
      <Hero />
      <LiveStream />
      <Slogan />
      <WhoShouldAttend />
      <Schedule />
      <Speakers />
      <FAQ />
      <Footer />
    </Layout>
  )
}

export default IndexPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  return (
    <>
      {/* <html className="scroll-smooth" lang="tr" /> */}
      <Seo title="Ethereum ile Tanışın" />
    </>
  )
}

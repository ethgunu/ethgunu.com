import * as React from "react"

import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/main/Hero"
import Slogan from "../components/main/Slogan"
import WhoShouldAttend from "../components/main/WhoShouldAttend"
import Speakers from "../components/main/Speakers"
import FAQ from "../components/main/FAQ"
import Footer from "../components/main/Footer"

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

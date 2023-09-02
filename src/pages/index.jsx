import * as React from "react"

import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Seo from "../components/seo"
import logo from "../images/ethgunu-text-only.png"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import devconnect from "../images/devconnect.png"
import "../components/Kaleidoscope"
import { FaLocationDot } from "react-icons/fa6"
import { BsArrowDownCircle } from "react-icons/bs"
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
    <section className="flex flex-col justify-center h-screen min-w-screen bg-gradient-to-t from-gunuNavy from-0% to-40%">
      <div class="flex-grow"></div>
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="px-4 md:px-12 lg:w-[800px] lg:px-0"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-4xl xl:text-5xl text-gunuOrange mt-2">
          <Trans>Meet Ethereum</Trans>
        </h1>
      </div>
      {/* Bottom elements */}
      <div class="flex-grow"></div>
      <div className="flex flex-row mx-16 mb-2 justify-between">
        <div className="flex flex-row items-center">
          <div className="text-5xl font-serif text-white">Nov 13 —</div>
          <Link to="https://devconnect.org" target="_blank" rel="noopener">
            <img src={devconnect} className="h-10 invert ml-4" />
          </Link>
        </div>
        <Link
          className="flex flex-row"
          to="https://goo.gl/maps/N6VEtKT9xCMYMPk7A"
          target="_blank"
          rel="noopener"
        >
          <FaLocationDot className="text-gunuOrange text-xl mt-1 mr-2" />
          <div className="text-white">
            <div className="font-serif text-xl">
              <Trans>Istanbul Congress Center</Trans>
            </div>
            <div className="text-xs">
              Darülbedai Cad. No:3 34367 Şişli Maçka <br /> İstanbul/Türkiye
            </div>
          </div>
        </Link>
      </div>
      {/* Scroll sign */}
      <div className="flex flex-row mb-2 mx-16 items-center text-gray-200 opacity-40 animate-bounce uppercase">
        <div className="text-sm">
          <BsArrowDownCircle />
        </div>
        <div className="ml-4 text-xs">Scroll to continue</div>
      </div>
    </section>
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

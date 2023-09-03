import React from "react"
import Header from "./Header"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html className="scroll-smooth" />
      </Helmet>
      <Head />
      <div className="w-screen">
        <Header />
        {children}
      </div>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("Meet Ethereum")} />
}

export default Layout

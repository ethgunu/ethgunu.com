import React from "react"
import Header from "./Header"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html className="scroll-smooth" />
      </Helmet>
      <div className="w-screen">
        <Header siteTitle="My Website" />
        {children}
      </div>
    </>
  )
}

export default Layout

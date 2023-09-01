import React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="My Website" />
      {children}
    </div>
  )
}

export default Layout

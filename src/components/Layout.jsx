import React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <Header siteTitle="My Website" />
      {children}
    </div>
  )
}

export default Layout

import * as React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-screen">
        <Header />
        {children}
      </div>
    </>
  )
}
export default Layout

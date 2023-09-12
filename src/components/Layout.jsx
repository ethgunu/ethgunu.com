import * as React from "react"
import Header from "./Header"

const Layout = ({ children, className }) => {
  return (
    <div className={`w-screen ${className}`}>
      <Header />
      {children}
    </div>
  )
}
export default Layout

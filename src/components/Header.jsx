import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"

const Header = ({ siteTitle }) => {
  const { languages, originalPath } = useI18next()
  return (
    <header className="flex flex-row justify-between  items-center px-16 bg-blue-300">
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="languages">
        {languages.map(lng => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header

import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import logo from "../images/ethgunu-horizontal.png"
import { FaTwitter, FaTelegram } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const { languages, originalPath } = useI18next()
  return (
    <header className="flex flex-row justify-between items-center px-16 bg-gunuPink h-16 py-4">
      <Link to="/" className="h-full">
        <img src={logo} className="h-full" />
      </Link>
      <div className="flex flex-row">
        <nav className="flex flex-row space-x-2">
          <Link to="#schedule">
            <Trans>Schedule</Trans>
          </Link>
          <Link to="#tickets">
            <Trans>GetTickets</Trans>
          </Link>
        </nav>
        <div className="flex flex-row items-center mx-8 space-x-2">
          <a
            href="https://twitter.com/eth_gunu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
        </div>

        <ul className="flex">
          {languages.map(lng => (
            <li key={lng} className="mx-1">
              <Link to={originalPath} language={lng}>
                {lng.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header

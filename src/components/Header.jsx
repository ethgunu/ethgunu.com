import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import logo from "../images/ethgunu-horizontal.png"
import { FaTwitter, FaTelegram } from "react-icons/fa"
import debug from "debug"
import { IoLanguage } from "react-icons/io5"
const log = debug("Header")
log.enabled = true

const Header = ({ siteTitle }) => {
  const { languages, originalPath, language } = useI18next()
  log("language", language)

  return (
    <header className="absolute top-0 flex flex-row justify-between items-center px-12 bg-gunuPink h-16 py-4 w-full drop-shadow-lg">
      <Link to="/" className="h-full">
        <img src={logo} className="h-full" />
      </Link>
      <div className="flex flex-row">
        <nav className="flex flex-row items-center space-x-2 text-gunuOrange uppercase gap-4 text-sm">
          <Link to="#whoShouldAttend">
            <Trans>Who should attend?</Trans>
          </Link>
          <Link to="#speakers">
            <Trans>Speakers</Trans>
          </Link>
        </nav>
        <div className="flex flex-row items-center mx-8 space-x-2 text-gunuNavy">
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

        <div className="flex text-gunuOrange items-center">
          <button
            className={`mx-1 ${language === languages[1] ? "font-bold" : ""}`}
          >
            <Link to={originalPath} language={languages[1]}>
              {languages[1].toUpperCase()}
            </Link>
          </button>
          <div>|</div>
          <button
            className={`mx-1 ${language === languages[0] ? "font-bold" : ""}`}
          >
            <Link to={originalPath} language={languages[0]}>
              {languages[0].toUpperCase()}
            </Link>
          </button>
          <div className="bg-gunuOrange p-1 rounded-full ml-1">
            <IoLanguage className="text-gunuPink" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

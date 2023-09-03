import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import React, { useState } from "react"
import logo from "../images/ethgunu-horizontal.png"
import logoIconOnly from "../images/ethgunu-icon-only.png"
import { FaTwitter, FaTelegram } from "react-icons/fa"
import debug from "debug"
import { IoLanguage } from "react-icons/io5"
import { AiOutlineMenu } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"

const log = debug("Header")
log.enabled = true

const Header = ({ siteTitle }) => {
  const { languages, originalPath, language } = useI18next()
  log("language", language)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 flex flex-row justify-between items-center px-6 md:px-12 bg-gunuPink h-16 py-4 w-full drop-shadow-lg z-50">
      {/* Desktop Icon */}
      <Link to="/" className="h-full hidden md:block">
        <img src={logo} className="h-full" />
      </Link>
      {/* Mobile Icon */}
      <Link to="/" className="h-full md:hidden">
        <img src={logo} className="h-full" />
      </Link>

      {/* Desktop Full Nav */}
      <div className="flex-row hidden md:flex">
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

      {/* ********** */}
      {/* Mobile Nav */}
      {/* ********** */}

      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gunuOrange text-2xl "
        >
          <AiOutlineMenu />
        </button>
        {mobileMenuOpen && (
          <AnimatePresence>
            <motion.div
              key={`mobile-menu`}
              initial={{ height: 0, opacity: 0, scale: 0.8 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0, 0.62, 0.23, 0.98] }}
              exit={{ height: 0, opacity: 0, scale: 0.8 }}
              className="absolute top-16 left-0 w-full bg-gunuPink z-10 flex flex-col items-center text-center shadow-2xl"
            >
              <nav className="flex flex-col p-4 gap-6 text-gunuOrange uppercase text-lg ">
                <Link to="#whoShouldAttend">
                  <Trans>Who should attend?</Trans>
                </Link>
                <Link to="#speakers">
                  <Trans>Speakers</Trans>
                </Link>
              </nav>
              <div className="flex flex-row items-center mx-4 space-x-2 text-gunuNavy text-2xl gap-4 mt-4">
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
              <div className="flex text-gunuOrange items-center p-4 mt-4 text-xl">
                <div className="flex text-gunuOrange items-center">
                  <button
                    className={`mx-4 ${
                      language === languages[1] ? "font-bold" : ""
                    }`}
                  >
                    <Link to={originalPath} language={languages[1]}>
                      {languages[1].toUpperCase()}
                    </Link>
                  </button>
                  <div>|</div>
                  <button
                    className={`mx-4 ${
                      language === languages[0] ? "font-bold" : ""
                    }`}
                  >
                    <Link to={originalPath} language={languages[0]}>
                      {languages[0].toUpperCase()}
                    </Link>
                  </button>
                </div>{" "}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </header>
  )
}

export default Header

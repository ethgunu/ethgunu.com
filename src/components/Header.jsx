import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import React, { useState } from "react"
import logo from "../images/ethgunu-horizontal.png"
import { FaTwitter, FaTelegram } from "react-icons/fa"
import debug from "debug"
import { IoLanguage } from "react-icons/io5"
import { AiOutlineMenu } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"
import { HiOutlineExternalLink } from "react-icons/hi"

const log = debug("Header")
if (process.env.NODE_ENV === "development") {
  log.enabled = true
}
const Header = ({ siteTitle }) => {
  const { languages, originalPath, language } = useI18next()
  log("language", language)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 flex flex-row justify-between items-center px-6 md:px-12 bg-gunuPink h-16 py-4 w-full drop-shadow-lg z-50">
      {/* Desktop Icon */}
      <Link to="/" className="h-full">
        <img src={logo} className="h-full" alt="ETHGunu Logo" />
      </Link>

      {/* Desktop Full Nav */}
      <div className="flex-row hidden md:flex">
        <nav className="ml-4 flex flex-row text-center items-center space-x-2 text-gunuOrange uppercase gap-4 text-sm">
          <Link to="#whoShouldAttend">
            <Trans>who-should-attend-uppercase</Trans>
          </Link>
          {/* <Link to="#speakers">
            <Trans>Speakers</Trans>
          </Link> */}
          <Link to="#faq">
            <Trans>FAQ</Trans>
          </Link>
          <a
            href="https://ethgunu.substack.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <Trans>Newsletter</Trans>
            <HiOutlineExternalLink className="inline-block ml-1" />
          </a>
        </nav>
        <div className="flex flex-row items-center mx-8 space-x-2 text-xl text-gunuNavy">
          <a
            href="https://twitter.com/eth_gunu"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>

          <a href="https://t.me/ethgunu" target="_blank" rel="noreferrer">
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

      <div className="flex flex-row items-center md:hidden">
        <div className="flex text-gunuOrange items-center mr-4 text-lg">
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
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gunuOrange text-2xl "
        >
          <AiOutlineMenu />
        </button>
        {
          <AnimatePresence>
            <motion.div
              key={`mobile-menu`}
              initial={{ height: 0, opacity: 0 }}
              animate={mobileMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.8, ease: [0, 0.62, 0.23, 0.98] }}
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              exit={{ height: 0, opacity: 1 }}
              className="absolute top-16 left-0 w-full bg-gunuPink z-10 flex flex-col items-center text-center shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-6 text-gunuOrange uppercase text-lg ">
                <Link to="#whoShouldAttend">
                  <Trans>who-should-attend-uppercase</Trans>
                </Link>
                {/* <Link to="#speakers">
                  <Trans>Speakers</Trans>
                </Link> */}
                <Link to="#faq">
                  <Trans>FAQ</Trans>
                </Link>
                <a
                  href="https://ethgunu.substack.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-center justify-center"
                >
                  <Trans>Newsletter</Trans>
                  <HiOutlineExternalLink className="ml-1" />
                </a>
              </nav>
              <div className="flex flex-row items-center mx-4 space-x-2 text-gunuNavy text-2xl gap-4 my-4">
                <a
                  href="https://twitter.com/eth_gunu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a href="https://t.me/ethgunu" target="_blank" rel="noreferrer">
                  <FaTelegram />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        }
      </div>
    </header>
  )
}

export default Header

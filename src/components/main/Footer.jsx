import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import logo from "../../images/ethgunu-dark-horizontal.png"
import { FaTelegram, FaTwitter } from "react-icons/fa"
import efLogo from "../../images/ethereum-foundation-white.png"
import devconnect from "../../images/Devconnect.svg"
import EmailForm from "../EmailForm"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()
  return (
    <footer
      className="flex flex-col px-8 py-12 bg-gunuDark text-gray-300"
      id="footer"
    >
      {/* First row */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:flex-row justify-between">
        {/* Venue */}
        <div className="mb-8">
          <h3 className="text-gunuLightBlue">{t("Venue")}</h3>
          <div className="">
            <h4 className="text-xl font-serif">
              {t("Istanbul")} {t("Congress")} {t("Center")}
            </h4>
            <div className="text-sm text-gray-400 mt-2">
              Darülbedai Cad. No:3 34367 Şişli Maçka <br /> İstanbul/Türkiye
            </div>
            <a
              href="https://goo.gl/maps/N6VEtKT9xCMYMPk7A"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gunuNavy text-gray-200 text-sm px-4 py-2 rounded-md mt-4"
            >
              {t("Get Directions")}
            </a>
          </div>
        </div>
        {/* Newsletter  */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-gunuLightBlue">{t("Newsletter")}</h3>
          <div className="text-sm text-gray-400">{t("follow-newsletter")}</div>
          <EmailForm isDark={true} className="mt-2" />
        </div>
        {/* Contact */}
        <div className="my-8 md:my-0">
          <h3 className="text-gunuLightBlue">{t("Contact")}</h3>
          <div className="text-sm text-gray-400">
            <a href="mailto:info@ethgunu.com">info@ethgunu.com</a>
          </div>
          <div className="flex flex-col items-center md:items-start text-gunuLightBlue mt-8">
            <h3>{t("Socials")}</h3>
            <div className="flex flex-row gap-2 mt-2 text-gray-300">
              <a
                href="https://twitter.com/eth_gunu"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://t.me/ethgunu" target="_blank" rel="noreferrer">
                <FaTelegram className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row border-y-[1px] border-gray-500 py-8 justify-between items-center text-center md:text-left">
        <img
          src={logo}
          alt="ETHGunu Logo"
          className="h-12"
          alt="ETHGunu logo"
        />
        <div className="flex flex-col mt-8 md:mt-0">
          <h3 className="text-gunuNavy">{t("Destekçiler")}</h3>
          <div className="flex flex-wrap flex-row justify-center gap-16 mt-2 items-center">
            <a href="https://devconnect.org" target="_blank" rel="noreferrer">
              <img src={devconnect} alt="Devconnect Logo" className="h-12" />
            </a>
            <a
              href="https://ethereum.foundation"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={efLogo}
                alt="Ethereum Foundation Logo"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex text-center md:text-left items-center flex-col md:flex-row text-xs justify-between">
        <div className="mt-4">
          &copy; {currentYear} ETHGünü - {t("copyright-text")}
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <a>{t("Sitemap")}</a>
          <a>{t("Code of Conduct")}</a>
        </div>
      </div>
    </footer>
  )
}

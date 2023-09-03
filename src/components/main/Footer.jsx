import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import logo from "../../images/ethgunu-dark-horizontal.png"
import { FaTelegram, FaTwitter } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()
  return (
    <footer className="flex flex-col px-8 py-12 bg-gunuDark text-gray-300">
      <div className="flex flex-row "></div>
      <div className="flex flex-row border-y-[1px] border-gray-500 py-8 justify-between">
        <img src={logo} alt="ETHGunu Logo" className="w-48" />
        <div className="flex flex-col text-gunuNavy-500">
          <h3>{t("Socials")}</h3>
          <div className="flex flex-row gap-2 mt-2 text-gray-300">
            <a>
              <FaTwitter className="text-xl" />
            </a>
            <a>
              <FaTelegram className="text-xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-gunuNavy">{t("Destekçiler")}</h2>
          <div className="flex flex-row gap-16 mt-2">
            <img src={logo} alt="ETHGunu Logo" className="w-24" />
            <img src={logo} alt="ETHGunu Logo" className="w-24" />
          </div>
        </div>
      </div>
      <div className="flex flex-row text-xs justify-between mt-4 ">
        <div>
          &copy; {currentYear} ETHGünü - {t("copyright-text")}
        </div>
        <div className="flex gap-2">
          <a>{t("Sitemap")}</a>
          <a>{t("Code of Conduct")}</a>
          <a>{t("Privacy Policy")}</a>
          <a>{t("Cookie Policy")}</a>
          <a>{t("Terms of Use")}</a>
        </div>
      </div>
    </footer>
  )
}

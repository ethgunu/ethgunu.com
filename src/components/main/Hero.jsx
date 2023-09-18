import React from "react"
import logo from "../../images/ethgunu-text-only.png"
import devconnect from "../../images/devconnectIST.png"
import { FaLocationDot } from "react-icons/fa6"
import { BsArrowDownCircle } from "react-icons/bs"
import "../Kaleidoscope"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { GiTicket } from "react-icons/gi"

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section
      className="flex flex-col justify-end h-screen min-w-screen bg-gradient-to-t from-gunuNavy from-0% to-50% md:to-40% relative"
      id="hero"
    >
      {/* Large ETHGunu */}
      <div className="flex flex-col items-center justify-center h-full absolute inset-0">
        <img
          src={logo}
          alt="logo"
          className="px-4 md:px-12 lg:w-[800px] lg:px-0"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl xl:text-6xl text-gunuOrange mt-2">
            <Trans>Meet Ethereum</Trans>
          </h1>
        </div>
        <a
          className="flex flex-row mt-4 md:text-base text-sm bg-gunuOrange px-4 py-3 md:px-6 md:py-4 uppercase text-white items-center rounded-full shadow-md z-30 font-semibold hover:shadow-xl hover:filter hover:brightness-110 transition-all"
          href="https://ticketh.xyz/ethgunu/ethgunu/"
          target="_blank"
          rel="noreferrer"
        >
          <GiTicket className="mr-1 text-xl" />
          {t("get-tickets")}
        </a>
      </div>

      {/* Bottom elements */}
      <div className="flex flex-col md:flex-row mx-2 md:mx-16 mb-2 justify-center md:justify-between items-center">
        <div className="flex flex-col md:flex-row items-center md:mb-4 flex-wrap justify-center z-20 text-center md:text-left">
          {/* Desktop date */}
          <div className="flex flex-col text-white">
            <div className="text-xl md:text-5xl font-serif leading-none">
              13
              <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              {t("Nov")}
              <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              2023
            </div>
            <div className="text-[0.65rem] leading-none md:text-xs mt-1 opacity-60 ">
              {" "}
              <a
                className="underline"
                href="https://devconnect.org"
                target="_blank"
                rel="noreferrer"
              >
                Devconnect
              </a>{" "}
              {t("Week")}
            </div>
          </div>
          {/* Mobile date */}
          <div className="hidden md:block text-xl md:text-5xl font-serif text-white mx-4">
            —
          </div>
          <a
            className="flex flex-row my-2 items-center"
            href="https://goo.gl/maps/N6VEtKT9xCMYMPk7A"
            target="_blank"
            rel="noreferrer"
          >
            <FaLocationDot className="text-gunuOrange text-base md:text-2xl mt-1 mr-2" />
            <div className="text-white">
              <div className=" font-serif text-lg md:text-xl">
                {t("Istanbul")} {t("Congress")} {t("Center")}
              </div>

              <div className="text-xs hidden md:block">
                Darülbedai Cad. No:3 34367 Şişli Maçka <br /> İstanbul/Türkiye
              </div>
            </div>
          </a>
        </div>
        <a
          href="https://devconnect.org"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block opacity-60 hover:opacity-100 transition-opacity z-30 mt-4"
        >
          <img
            src={devconnect}
            className="h-10 md:h-24"
            alt="Devconnect Logo"
          />
        </a>
      </div>
      {/* Scroll sign */}
      <div className="flex flex-row mb-16 md:mb-2 mx-16 mt-4 md:mt-0 items-center justify-center md:justify-start text-gray-200 opacity-40 animate-bounce uppercase">
        <div className="text-sm">
          <BsArrowDownCircle />
        </div>
        <div className="ml-4 text-xs">{t("scroll")}</div>
      </div>
    </section>
  )
}

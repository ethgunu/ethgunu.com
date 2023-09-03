import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import speakers from "./speakers"
import "./Speaker.css"
import { FaTwitter } from "react-icons/fa"
import silhouette from "./silhouette.png"

function Speaker({ speaker }) {
  return (
    <div className="hexagon cursor-pointer relative">
      <img
        className="absolute inset-0 w-full h-full"
        src={speaker.image}
        alt={speaker.name}
      />
      <a href={speaker.twitter} target="_blank" rel="noreferrer">
        <div className="absolute inset-0 flex items-center justify-center bg-gunuNavy-100 bg-opacity-80 text-white p-2 hover:bg-transparent transition-all duration-300 group">
          <div className="flex flex-1 flex-col h-full w-full items-center justify-between text-gunuNavy-600 font-serif text-3xl text-center group-hover:opacity-0 transition-all duration-300 group-hover:hidden px-12">
            <div className="flex-grow"></div>
            <div>{speaker.name}</div>
            <div className="flex-grow">
              <div className="text-sm text-gray-600 font-sans">
                {speaker.organization}
              </div>
            </div>
          </div>
          <div className="text-gunuNavy-50 text-4xl opacity-0 hidden group-hover:flex group-hover:opacity-100 transition-all duration-300">
            <FaTwitter className="" />
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Speakers() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col items-center justify-center pt-12 bg-gradient-2">
      <h3 className="text-2xl text-gray-600 my-6">{t("Speakers")}</h3>
      <div className="hexagon-main">
        <div className="hexagon-container mx-24 max-w-[800px] flex flex-col justify-center sm:block">
          {speakers.map((speaker, index) => (
            <Speaker key={`speaker-${index}`} speaker={speaker} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <img src={silhouette} alt="silhouette" className="w-full" />
      </div>
    </section>
  )
}

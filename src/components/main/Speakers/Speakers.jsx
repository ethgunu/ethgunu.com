import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import speakers from "./speakers"
import Speaker from "./Speaker"
import "./Speaker.css"
import silhouette from "./silhouette.png"

export default function Speakers() {
  const { t } = useTranslation()

  return (
    <section
      className="flex flex-col items-center  pt-12 bg-gradient-2"
      id="speakers"
    >
      <h3 className="text-4xl text-gray-800 mt-12 font-serif">
        {t("Speakers")}
      </h3>

      <div className="px-4 md:px-12 max-w-[64rem] flex flex-row justify-center flex-wrap gap-6 md:gap-12 mt-6">
        {speakers.map((speaker, index) => (
          <Speaker key={`speaker-${index}`} speaker={speaker} />
        ))}
      </div>
      <img
        src={silhouette}
        alt="silhouette"
        className="mt-12 w-auto md:w-full min-h-[10rem] object-cover object-center"
      />
    </section>
  )
}

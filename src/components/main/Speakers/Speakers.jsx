import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import speakers from "./speakers"
import "./Speaker.css"
import { FaTwitter } from "react-icons/fa"
import silhouette from "./silhouette.png"
import { motion, useScroll } from "framer-motion"

function Speaker({ speaker }) {
  return (
    <a href={speaker.twitter} target="_blank" rel="noreferrer">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: ["-3%", "3%", "-3%"],
          x: ["-3%", "3%", "-3%"],
          transition: {
            y: {
              duration: 10,
              ease: "easeInOut",
              delay: Math.random() * 10,
              repeat: Infinity,
            },
            x: {
              duration: 10,
              ease: "easeInOut",
              delay: Math.random() * 10,
              repeat: Infinity,
            },
          },
        }}
        className="flex flex-col items-center max-w-4xl group"
      >
        <img
          className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
          src={speaker.image}
          alt={speaker.name}
        />
        <div className="text-lg text-gray-700 group-hover:text-gunuNavy transition-colors duration-300">
          {speaker.name}
        </div>
        <div className="flex-grow">
          <div className="text-sm text-gray-500 group-hover:text-gunuNavy transition-colors duration-300 font-sans">
            {speaker.organization}
          </div>
        </div>
        <div className="text-lg text-gray-500 group-hover:text-gunuNavy transition-colors duration-300">
          <FaTwitter className="" />
        </div>
      </motion.div>
    </a>
  )
}

export default function Speakers() {
  const { t } = useTranslation()

  return (
    <section
      className="flex flex-col items-center  pt-12 bg-gradient-2"
      id="speakers"
    >
      <h3 className="text-4xl text-gray-800 my-6 font-serif">
        {t("Speakers")}
      </h3>
      <div className="px-4 md:px-12 max-w-[64rem] flex flex-row justify-center flex-wrap gap-6 md:gap-12 mt-12">
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

import React from "react"
import { motion } from "framer-motion"
import dummySpeaker from "../Speakers/photos/halftoneAvatar.png"
import { FaTwitter } from "react-icons/fa"

export default function Speaker({ speaker, className, isDark }) {
  const { name, organization, image, twitter } = speaker
  const speakerImage = image?.default || speaker?.image || dummySpeaker

  console.log(speaker)
  return (
    <a
      href={twitter}
      target="_blank"
      rel="noreferrer"
      className={`w-32 md:w-48 text-center ${className}`}
    >
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
          src={speakerImage}
          alt={name}
        />
        <div
          className={`text-lg ${
            isDark
              ? "text-white group-hover:text-gray-200"
              : "text-gray-700 group-hover:text-gunuNavy"
          }  transition-colors duration-300`}
        >
          {name}
        </div>
        <div className="flex-grow">
          <div
            className={`text-sm ${
              isDark
                ? "text-white group-hover:text-gray-200"
                : "text-gray-500 group-hover:text-gunuNavy"
            } group-hover:text-gunuNavy transition-colors duration-300 font-sans`}
          >
            {organization}
          </div>
        </div>
        <div
          className={`text-lg ${
            isDark
              ? "text-white group-hover:text-gray-200"
              : "text-gray-500 group-hover:text-gunuNavy"
          }  transition-colors duration-300`}
        >
          <FaTwitter className="" />
        </div>
      </motion.div>
    </a>
  )
}

import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { AnimatePresence, motion } from "framer-motion"
import largeTile from "../../images/tiles/tile-colorful-large.png"
import debug from "debug"
const log = debug("WhoShouldAttend")
log.enabled = true

export default function WhoShouldAttend() {
  const { t } = useTranslation()
  const shouldAttendObj = t("shouldAttendObj", { returnObjects: true })
  const shouldAttendOptions = Object.keys(shouldAttendObj)

  const [animating, setAnimating] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  let selectedOption = shouldAttendOptions[selectedOptionIndex]

  useEffect(() => {
    selectedOption = shouldAttendOptions[selectedOptionIndex]
    log(selectedOption)
  }, [selectedOptionIndex])

  const handleOptionClick = index => {
    if (index === selectedOptionIndex) return
    log("Animating is", animating)
    if (animating) return
    setSelectedOptionIndex(index)
  }

  const handleLeftArrowClick = () => {
    log("Animating is", animating)
    if (animating) return
    setAnimating(true)
    if (selectedOptionIndex === 0) {
      setSelectedOptionIndex(shouldAttendOptions.length - 1)
    } else {
      setSelectedOptionIndex(selectedOptionIndex - 1)
    }
  }

  const handleRightArrowClick = () => {
    log("Animating is", animating)
    if (animating) return
    setAnimating(true)
    if (selectedOptionIndex === shouldAttendOptions.length - 1) {
      setSelectedOptionIndex(0)
    } else {
      setSelectedOptionIndex(selectedOptionIndex + 1)
    }
  }

  return (
    <section className="flex flex-col items-center text-center justify-center py-12 bg-gradient-2 relative overflow-hidden">
      <h3 className="text-2xl text-gray-600 z-10">{t("Who should attend?")}</h3>
      <div className="mt-10 mx-12 max-w-5xl z-10">
        <div className="flex flex-row items-center min-h-[150px]">
          <BsArrowLeftCircle
            className="box-content cursor-pointer w-24 text-3xl text-gray-500 active:text-gray-800"
            onClick={handleLeftArrowClick}
          />
          <p className="text-2xl font-serif text-gray-800 mx-6">
            <AnimatePresence
              mode="wait"
              onExitComplete={() => {
                debug("ANIMATING EXIT")
                setAnimating(false)
              }}
            >
              {/* Break text into words and animate each */}
              {shouldAttendObj[selectedOption].cta
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={word + selectedOptionIndex + index}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ delay: Math.random() * 0.2 }}
                    whileHover={{
                      fontSize: "30px",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {word + " "}
                  </motion.span>
                ))}
            </AnimatePresence>
          </p>
          <BsArrowRightCircle
            className="box-content cursor-pointer w-24 text-3xl text-gray-500 active:text-gray-800"
            onClick={handleRightArrowClick}
          />
        </div>
        <div className="flex flex-row items-center justify-center mt-12 flex-wrap font-semibold text-lg text-gray-400">
          {shouldAttendOptions.map((option, index) => (
            <motion.button
              key={`shouldAttendOption-button-${index}`}
              onClick={() => handleOptionClick(index)}
              initial={{
                color: "rgba(166, 166, 166, 1)",
                borderBottom: "0px solid rgba(0, 0, 0, 1)",
              }}
              animate={{
                color:
                  selectedOption === option
                    ? "rgba(0, 0, 0, 1)"
                    : "rgba(166, 166, 166, 1)",
                borderBottom:
                  selectedOption === option
                    ? "2px solid rgba(0, 0, 0, 1)"
                    : "0px solid rgba(0, 0, 0, 1)",
              }}
              transition={{ duration: 0.3 }}
              className={`mx-4 my-2 ${
                selectedOption === option ? "text-gray-800" : ""
              }`}
            >
              {shouldAttendObj[option].title}
            </motion.button>
          ))}
        </div>
      </div>
      <img
        src={largeTile}
        alt="tile"
        className="h-[24rem] md:h-[48rem] opacity-20 absolute z-0 -bottom-[12rem] md:-bottom-[24rem]"
      />
    </section>
  )
}

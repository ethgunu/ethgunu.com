import React, { useEffect, useState } from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { AnimatePresence, motion } from "framer-motion"
import largeTile from "../../images/tiles/tile-colorful-large.png"
import debug from "debug"
const log = debug("WhoShouldAttend")

if (process.env.NODE_ENV === "development") {
  log.enabled = true
}

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
    setSelectedOptionIndex(index)
  }

  const handleLeftArrowClick = () => {
    if (selectedOptionIndex === 0) {
      setSelectedOptionIndex(shouldAttendOptions.length - 1)
    } else {
      setSelectedOptionIndex(selectedOptionIndex - 1)
    }
  }

  const handleRightArrowClick = () => {
    if (selectedOptionIndex === shouldAttendOptions.length - 1) {
      setSelectedOptionIndex(0)
    } else {
      setSelectedOptionIndex(selectedOptionIndex + 1)
    }
  }

  return (
    <section
      className="flex flex-col items-center text-center justify-center py-12 bg-gradient-2 relative overflow-hidden"
      id="whoShouldAttend"
    >
      <h3 className="text-3xl font-serif text-black z-10">
        {t("Who should attend?")}
      </h3>
      <div className="mt-4 px-4 md:px-12 max-w-[64rem] z-10">
        <div className="flex flex-col md:flex-row items-center justify-center flex-wrap font-semibold text-lg text-gray-400">
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
              className={`mx-8 my-2 ${
                selectedOption === option ? "text-gray-800" : ""
              }`}
            >
              {shouldAttendObj[option].title}
            </motion.button>
          ))}
        </div>
        <h3 className="text-3xl font-serif text-black z-10 mt-12">
          {t("What to expect?")}
        </h3>
        <div className="flex flex-col md:flex-row items-center min-h-[150px]">
          <BsArrowLeftCircle
            className="box-content cursor-pointer py-6 w-16 md:w-24 text-3xl text-gray-500 active:text-gray-800"
            onClick={handleLeftArrowClick}
          />
          <div className="text-xl md:text-2xl text-gray-700 md:mx-6 ">
            <AnimatePresence mode="wait">
              <ul>
                {/* Break text into words and animate each */}
                {shouldAttendObj[selectedOption].cta.map(
                  (bulletItem, index) => (
                    <motion.li
                      className="mt-6 first:mt-2"
                      key={`bullet-li-${index}`}
                    >
                      {bulletItem.split(" ").map((word, index) => (
                        <motion.span
                          key={word + selectedOptionIndex + index}
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {word + " "}
                        </motion.span>
                      ))}
                    </motion.li>
                  )
                )}
              </ul>
            </AnimatePresence>
          </div>
          <BsArrowRightCircle
            className="box-content cursor-pointer py-6 w-16 md:w-24 text-3xl text-gray-500 active:text-gray-800"
            onClick={handleRightArrowClick}
          />
        </div>
      </div>
      <img
        src={largeTile}
        alt="Decorative tile"
        className="h-[24rem] md:h-[48rem] opacity-20 absolute z-0 -bottom-[12rem] md:-bottom-[24rem]"
      />
    </section>
  )
}

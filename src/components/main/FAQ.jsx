import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { AnimatePresence, motion } from "framer-motion"
import { FaMinus, FaPlus } from "react-icons/fa"
import { Trans } from "gatsby-plugin-react-i18next"

const FAQBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      className={`flex flex-col w-full px-6 py-4 ${
        isOpen ? "bg-gunuDark filter brightness-125" : "bg-gunuDark"
      } text-white rounded-lg shadow-lg transition-colors duration-500 ease-in-out my-1 `}
    >
      <button
        className={`flex flex-row justify-between items-center text-left cursor-pointer ${
          isOpen ? "font-semibold" : ""
        }`}
        onClick={() => setIsOpen(currIsOpen => !currIsOpen)}
      >
        <div>{question}</div>
        <div>{isOpen ? <FaMinus /> : <FaPlus />}</div>
      </button>
      <AnimatePresence initial={false}>
        {
          <motion.div
            initial="collapsed"
            animate={`${isOpen ? "open" : "collapsed"}`}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              <Trans
                components={{
                  blogLink: (
                    <a
                      href="https://blog.ethereum.org/tr/2023/04/20/announcing-devconnect-ist"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                    ></a>
                  ),
                  devconnectLink: (
                    <a
                      href="https://devconnect.org"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                    ></a>
                  ),
                  coworkLink: (
                    <a
                      href="https://devconnect.org/cowork"
                      target="_blank"
                      className="underline"
                      rel="noreferrer"
                    ></a>
                  ),
                  br: <br />,
                }}
              >
                {answer}
              </Trans>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { t } = useTranslation()
  const FAQItems = t("FAQItems", { returnObjects: true })

  return (
    <section
      className="flex flex-col items-center justify-center py-12 bg-gradient-3 px-4"
      id="faq"
    >
      <h3 className="text-4xl text-gray-800 font-serif my-6 text-center">
        {t("FAQ-long")}
      </h3>
      <div className="w-full max-w-[64rem]">
        {FAQItems.map((item, index) => (
          <FAQBox key={`faq-item-${index}`} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  )
}

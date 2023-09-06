import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { AnimatePresence, motion } from "framer-motion"
import { FaMinus, FaPlus } from "react-icons/fa"

const FAQBox = ({ question, answer, key }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      className={`flex flex-col w-full px-6 py-4 ml-2 ${
        isOpen ? "bg-gunuDark filter brightness-125" : "bg-gunuDark"
      } text-white rounded-lg shadow-lg transition-colors duration-500 ease-in-out my-1 cursor-pointer`}
      onClick={() => setIsOpen(currIsOpen => !currIsOpen)}
    >
      <h1
        className={`flex flex-row justify-between items-center ${
          isOpen ? "font-semibold" : ""
        }`}
      >
        <div>{question}</div>
        <div>{isOpen ? <FaMinus /> : <FaPlus />}</div>
      </h1>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={`answer-${key}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0, 0.62, 0.23, 0.98] }}
            className="mt-4 overflow-hidden"
          >
            {answer}
          </motion.section>
        )}
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
        {t("FAQ")}
      </h3>
      <div className="w-full max-w-[64rem]">
        {FAQItems.map((item, index) => (
          <FAQBox key={`faq-index`} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  )
}

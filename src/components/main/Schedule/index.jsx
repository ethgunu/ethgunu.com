import React from "react"
import ScheduleContainer from "./schedule"
import { useTranslation } from "gatsby-plugin-react-i18next"

export default function Schedule() {
  const { t } = useTranslation()

  return (
    <section
      className="md:flex flex-col items-center px-4 pt-12 bg-gradient-2"
      id="schedule"
    >
      <h3 className="text-4xl text-center text-gray-800 my-6 font-serif">
        {t("Schedule")}
      </h3>

      <ScheduleContainer />
    </section>
  )
}

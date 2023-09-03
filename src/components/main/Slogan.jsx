import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import blueTile from "../../images/tiles/tile-blue-small.png"
import { Trans } from "gatsby-plugin-react-i18next"

export default function Slogan() {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  })

  console.log(scrollYProgress)
  const rotation = useTransform(scrollYProgress, [0.2, 0.8], [0, 360])
  const rotationClass = `rotate-[${rotation}]`

  return (
    <section
      className="flex flex-grow flex-col bg-gunuNavy px-36 text-center"
      id="slogan"
    >
      <div className="flex flex-col items-center justify-center my-12">
        <motion.img
          src={blueTile}
          className={`w-20`}
          style={{ objectFit: "contain", rotate: rotation }}
          ref={targetRef}
        />
        <h2 className="text-5xl font-serif text-white my-12">
          <Trans components={{ underline: <span className="underline" /> }}>
            learn-ethereum
          </Trans>
        </h2>
        <div className="text-sm text-gunuNavy-300 uppercase">
          <Trans>until-event</Trans>
        </div>
        <Countdown
          targetDateISO="2023-11-13T09:00:00"
          className=" text-gunuLightBlue uppercase text-2xl"
        />
      </div>
    </section>
  )
}

const Countdown = ({ targetDateISO, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const calculateTimeLeft = () => {
    const now = new Date()
    const targetDate = new Date(targetDateISO)
    const difference = targetDate.getTime() - now.getTime()

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timerId)
  }, [targetDateISO])

  return (
    <div className={className}>
      <Trans
        i18nKey="countdown"
        values={{
          days: timeLeft.days,
          hours: timeLeft.hours,
          minutes: timeLeft.minutes,
          seconds: timeLeft.seconds,
        }}
        components={{ b: <strong /> }}
      ></Trans>
    </div>
  )
}

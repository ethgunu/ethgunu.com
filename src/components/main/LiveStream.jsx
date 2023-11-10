import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { MdLiveTv } from "react-icons/md"

export default function LiveStream() {
  const { t } = useTranslation()

  return (
    <section
      className="flex flex-grow flex-col bg-gunuNavy px-4 md:px-36 text-center items-center pt-12"
      id="slogan"
    >
      <h3 className="text-3xl font-serif text-white z-10">
        {t("Live Stream")}
      </h3>
      <div className="my-8">
        <div className="flex flex-col md:flex-row justify-center items-center mt-4">
          <a
            className="flex flex-row md:text-base text-sm bg-gunuOrange px-3 py-2 md:px-5 md:py-3 text-white items-center rounded-full shadow-md z-30 font-semibold hover:shadow-xl hover:filter hover:brightness-110 transition-all"
            href="https://app.streameth.org/devconnect/ethgunu"
            target="_blank"
            rel="noreferrer"
          >
            <MdLiveTv className="mr-1 text-xl" /> {t("Streaming Site")}
          </a>
        </div>
      </div>
      <div className="w-full max-w-[900px]">
        <h3 className="text-2xl font-serif text-white z-10 my-4">
          {t("Harbiye")}
        </h3>
        <div className="w-full h-[12rem] md:h-[32rem] my-4">
          <iframe
            src="https://app.streameth.org/embed/?playbackId=&streamId=a1685075-7a97-442e-abee-bcd97846b806&playerName=HARBIYE"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <h3 className="text-2xl font-serif text-white z-10 my-4">
          {t("Beyazit")}
        </h3>
        <div className="w-full h-[12rem] md:h-[32rem] my-4">
          <iframe
            src="https://app.streameth.org/embed/?playbackId=&streamId=ec76319c-1d17-4963-b932-d8944da5e907&playerName=BEYAZIT"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <h3 className="text-2xl font-serif text-white z-10 my-4">
          {t("Emirgan")}
        </h3>
        <div className="w-full h-[12rem] md:h-[32rem] my-4">
          <iframe
            src="https://app.streameth.org/embed/?playbackId=&streamId=f9948720-7c06-4c62-bd6b-07043dfb9b5a&playerName=EMIRGAN+1"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

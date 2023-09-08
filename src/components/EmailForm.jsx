import debug from "debug"
import React, { useState } from "react"
import { MdSend } from "react-icons/md"
import { CgSpinner } from "react-icons/cg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const log = debug("EmailForm")

if (process.env.NODE_ENV === "development") {
  log.enabled = true
}

const EmailForm = ({ isDark, className }) => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const { t } = useTranslation()

  const handleSubmit = async e => {
    e.preventDefault()
    setError("")
    setSuccess("")
    try {
      setIsSubmitting(true)
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxMEVWSBX41fA7vMhCbItuiNKHfEr1AQf9IEpjUw1HHb4QSxT5fW7XMGsLr11_ZPoDYrA/exec",
        {
          redirect: "follow",

          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )

      if (response.ok) {
        log(response)
        setSuccess(t("email-success"))
      } else {
        if (response.type === "opaque") {
          log(response)
          setSuccess(t("email-success"))
        } else {
          log(response)
          setError(t("email-error"))
        }
      }
    } catch (error) {
      log(error)
      setError(t("email-success"))
    }
    setIsSubmitting(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col w-64 ${isDark ? "dark" : ""} ${className}`}
    >
      <div className="flex flex-row border-gunuNavy  bg-white bg-opacity-50 dark:bg-opacity-90 shadow-md rounded-md  focus-within:bg-opacity-60 transition-all duration-200 ease-in-out focus-within:border-gunuNavy focus-within:border-b-[1.5px]">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            setError("")
            setSuccess("")
          }}
          className="px-2 w-full text-sm text-gray-800 bg-transparent dark:placeholder:text-gray-500  placeholder:text-gray-400 focus:outline-none focus:border-gunuNavy-500 peer"
          placeholder="test@test.com"
          required
        />

        <button
          type="submit"
          className="px-4 py-2 text-gunuNavy-300  peer-focus:text-gunuNavy-500 duration-200 ease-in-out transition-colors"
        >
          {!isSubmitting && <MdSend />}
          {isSubmitting && <CgSpinner className="animate-spin" />}
        </button>
      </div>
      <div className="text-gunuNavy dark:text-gunuNavy-100 text-xs text-center mt-1">
        {success && <p>{success}</p>}
      </div>
      <div className="text-red-300 text-xs text-center mt-1">
        {error && <p>{error}</p>}
      </div>
    </form>
  )
}

export default EmailForm

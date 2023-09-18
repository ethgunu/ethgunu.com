/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"
import "./src/components/Kaleidoscope/kaleidoscope.css"

// Override browser language detection to use Turkish
if (typeof window !== "undefined") {
  localStorage.setItem("gatsby-i18next-language", "tr")
}

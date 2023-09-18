/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")

// Modify the webpack config to be able to load custom files (i.e. glsl files)
exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  const config = getConfig()

  config.module.rules.push({
    test: /\.glsl/,
    use: {
      loader: "raw-loader",
    },
  })

  // Exclude Kaleidoscope from build-html and develop-html stages because it contains window and document objects. These are not available in server-side rendering.
  // https://www.gatsbyjs.com/docs/using-client-side-only-packages/#workaround-3-use-reactlazy-and-suspense-on-client-side-only
  // https://www.gatsbyjs.com/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === "build-html" || stage === "develop-html") {
    console.log("We are on build-html or develop-html stage")
    config.module.rules.push({
      test: path.resolve(
        __dirname,
        "src/components/Kaleidoscope/Kaleidoscope.js"
      ),
      use: loaders.null(),
    })
  }

  actions.replaceWebpackConfig(config)
}

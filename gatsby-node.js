/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

// Modify the webpack config to be able to load custom files (i.e. glsl files)
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig()

  config.module.rules.push({
    test: /\.glsl/,
    use: {
      loader: "raw-loader",
    },
  })

  actions.replaceWebpackConfig(config)
}

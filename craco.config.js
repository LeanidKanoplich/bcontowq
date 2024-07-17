// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const HtmlWebpackPlugin = webpackConfig.plugins.find(
          (plugin) => plugin.constructor.name === 'HtmlWebpackPlugin'
        );
  
        if (HtmlWebpackPlugin) {
          HtmlWebpackPlugin.userOptions.minify = false;
        }
  
        return webpackConfig;
      },
    },
  };
  
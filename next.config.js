const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  trailingSlash: true
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: {
  //       test: /\.(js|ts)x?$/
  //       // for webpack 5 use
  //       // { and: [/\.(js|ts)x?$/] }
  //     },

  //     use: ['@svgr/webpack']
  //   });

  //   return config;
  // }
};

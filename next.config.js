const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  distDir: 'build',
  exportTrailingSlash: true
};

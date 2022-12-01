const nextTranslate = require('next-translate');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withPWA = require('next-pwa')({
  dest: 'public'
});

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  trailingSlash: true,
  image: {
    deviceSizes: [768, 1920]
  }
};

module.exports = withPWA(withBundleAnalyzer(nextConfig));

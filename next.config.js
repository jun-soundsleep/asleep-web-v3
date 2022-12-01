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
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = withPWA(withBundleAnalyzer(nextConfig));

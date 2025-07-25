const path = require('path');

module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable ESLint on Vercel builds
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@zaza/shared-components'] = path.resolve(
      __dirname,
      '../../packages/ui/components'
    );
    return config;
  },
};

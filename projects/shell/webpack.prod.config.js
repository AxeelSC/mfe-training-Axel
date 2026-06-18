const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const remoteBaseUrl = 'https://axeelsc.github.io/mfe-training-Axel';

module.exports = withModuleFederationPlugin({
  remotes: {
    catalog: `${remoteBaseUrl}/catalog/remoteEntry.js`,
    reports: `${remoteBaseUrl}/reports/remoteEntry.js`,
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

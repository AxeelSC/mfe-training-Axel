const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({
  name: 'reports',

  exposes: {
    './Routes': './projects/reports/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

module.exports = {
  ...mfConfig,
  devServer: {
    ...(mfConfig.devServer || {}),
    headers: {
      ...(mfConfig.devServer?.headers || {}),
      'Access-Control-Allow-Origin': '*',
    },
  },
};

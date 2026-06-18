const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({
  name: 'catalog',

  exposes: {
    './Routes': './projects/catalog/src/app/app.routes.ts',
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

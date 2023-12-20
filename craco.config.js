// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CracoAliasPlugin } = require('react-app-alias');

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json'
      }
    }
  ]
};

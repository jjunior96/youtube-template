const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-next'
  ],
  features: {
    interactionsDebugger: true,
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
        path.resolve(__dirname, '..'),
        'node_modules',
    ];
    config.resolve.alias = {
        ...config.resolve.alias,
        components: path.resolve(__dirname, '../components'),
    };
    return config;
  }
}

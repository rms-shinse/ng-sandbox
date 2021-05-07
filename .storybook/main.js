module.exports = {
  stories: [
    "../projects/**/*.stories.mdx",
    "../projects/**/*.stories.@(js|ts)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
};

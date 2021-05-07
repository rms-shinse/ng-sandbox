module.exports = {
  stories: [
    "../projects/ui/src/lib/stories/**/*.stories.mdx",
    "../projects/ui/src/lib/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
};

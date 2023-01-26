// order of 'plugins' matters
const postCssConfig = {
  syntax: "postcss-scss",
  plugins: ["@csstools/postcss-sass", "autoprefixer"],
};

module.exports = postCssConfig;

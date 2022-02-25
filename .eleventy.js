module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./_src/css");
  eleventyConfig.addWatchTarget("./_src/css/");


  return {
    dir: {
      input: "_src",
      output: "docs",
    },
  };
};
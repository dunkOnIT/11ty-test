module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./_src/css");
  eleventyConfig.addWatchTarget("./_src/css/");
  eleventyConfig.addPassthroughCopy('./_src/scripts/');

  return {
    dir: {
      input: "_src",
      output: "docs",
    },
    pathPrefix: "/11ty-test/"
  };
};
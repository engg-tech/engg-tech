module.exports = function(eleventyConfig) {

  // Pass through static assets unchanged
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("blog/images");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("ads.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("sitemap.xml");


  // Watch for CSS changes during local dev
  eleventyConfig.addWatchTarget("assets/style.css");

  // Collections — blog posts
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/**/index.html")
      .filter(item => !item.inputPath.includes("blog/index.html"));
  });

  // Collections — articles
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("articles/**/index.html")
      .filter(item => !item.inputPath.includes("articles/index.html"));
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    // Allow HTML files as templates
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};

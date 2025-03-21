const Image = require("@11ty/eleventy-img");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [300, 600, 900],
        formats: ["avif", "jpeg"],
        outputDir: "./_site/img/",
        urlPath: "/img/"
    });

    let imageAttributes = {
        alt,
        sizes: sizes || "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
        loading: "lazy",
        decoding: "async"
    };

    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    // Add plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Add image shortcode
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

    // Pass through copy for assets
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/images");

    // Watch for changes
    eleventyConfig.addWatchTarget("src/assets/css/");
    eleventyConfig.addWatchTarget("src/assets/js/");

    // Set input and output directories
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_includes/layouts",
            data: "_data"
        },
        templateFormats: ["njk", "md", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};

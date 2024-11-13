import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
// import { feedPlugin } from "@11ty/eleventy-plugin-rss";
// import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
// import pluginNavigation from "@11ty/eleventy-navigation";
// import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";



// import pluginFilters from "./_config/filters.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
			"./static/": "/"
		})

	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});

};

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "docs"
	},

	// -----------------------------------------------------------------
	// Optional items:
	// -----------------------------------------------------------------

	// If your site deploys to a subdirectory, change `pathPrefix`.
	// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

	// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
	// it will transform any absolute URLs in your HTML to include this
	// folder name and does **not** affect where things go in the output folder.

	// pathPrefix: "/",
};
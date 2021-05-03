const tailwindcss = require("tailwindcss");
const { plugins } = require("./tailwind.config");

const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./scr/**/*.svelte", "./public/**/*.html"],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g),
});

module.exports = {
    plugins: [
        tailwindcss("./tailwind.config.js"),
        /*(process.env.NODE_ENV==='production') ? [purgecss] : [],*/
    
    ]
}
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = getPagesAndEntries("index", "colors", "other-form", "textfields", "fonts");

function getPagesAndEntries(...pagenames) {
    return [getPages(pagenames), getEntries(pagenames)];
}

function getPages(pages) {
    return pages.map(pagename => page(pagename))
}

function getEntries(pages) {
    const result = {};

    for (const page of pages) {
        result[page] = entry(page);
    }

    return result;
}

function page(pagename) {
    return new HtmlWebPackPlugin({
            template: "./src/pages/" + pagename + "/index.pug",
            filename: "./" + pagename + ".html",
            inject: false,
            // chunks: ["style", "main_style"]
        });
}

function entry(pagename) {
    return "./src/pages/" + pagename + "/script.js"
}
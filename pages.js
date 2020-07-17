const config = require('./build.config')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = [getPages(config.pages), getEntries(config.pages)];

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
        });
}

function entry(pagename) {
    return "./src/pages/" + pagename + "/script.js"
}
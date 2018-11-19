"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _unirest = require("unirest");

var _unirest2 = _interopRequireDefault(_unirest);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const unirest = require("unirest");
// const cheerio = require("cheerio");

function parsePost(url, elems) {
        _unirest2.default.get(url).end(function (response) {
                var domain = url.match(/\/\/(.*?)\//)[1];
                var body = response.body;
                var $ = _cheerio2.default.load(body, { decodeEntities: false });
                var title = $(elems.title).text().trim();
                var description = $(elems.description).first().text().trim();

                var image = $(elems.image);
                image = !image.attr("src") ? image.data().src : image.attr("src");
                image = image.indexOf('https') >= 0 ? image : "http://" + domain + image;

                var content = $(elems.content).html();

                var post = {
                        title: title,
                        image: image,
                        description: description
                };

                console.log(post);
        });
}
// module.exports = parsePost;
exports.default = parsePost;
import unirest from 'unirest';
import cheerio from "cheerio";
// const unirest = require("unirest");
// const cheerio = require("cheerio");

function parsePost(url, elems) {
    unirest.get(url).end(function (response) {
        const domain = url.match(/\/\/(.*?)\//)[1];
        const body = response.body;
        const $ = cheerio.load(body, { decodeEntities: false });
        const title = $(elems.title).text().trim();
        const description = $(elems.description).first().text().trim();

        let image = $(elems.image);
        image = !image.attr("src") ? image.data().src : image.attr("src");
        image = image.indexOf('https') >= 0 ? image : `http://${domain}${image}`;

        const content = $(elems.content).html();

        const post = {
            title: title,
            image: image,
            description: description
        };

        console.log(post);
    });
}
// module.exports = parsePost;
export default parsePost;
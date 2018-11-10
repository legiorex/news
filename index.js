const unirest = require('unirest');
const cheerio = require("cheerio");
unirest.get('https://lifehacker.ru/android-prilozheniya-instrumenty/')
.end(function (response) {
    // console.log(response.body);
    const body = response.body
    const $ = cheerio.load(body, { decodeEntities: false });
    const title = $(".single__title").text().trim();
    const image = $("#single-post-header-pattern-image").attr('src');
    const description = $(".single__excerpt").text().trim();
    const content = $(".post-content").html();
    // const result = content.match(/post-content/ig);
    console.log(typeof content);
});

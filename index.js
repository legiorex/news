const unirest = require('unirest');
const cheerio = require("cheerio");

function lifehacker() {
    unirest.get('https://lifehacker.ru/android-prilozheniya-instrumenty/')
        .end(function (response) {
            // console.log(response.body);
            const body = response.body
            const $ = cheerio.load(body, { decodeEntities: false });
            const title = $(".single__title").text().trim();
            const image = $("#single-post-header-pattern-image").attr('src');
            const description = $(".single__excerpt").text().trim();
            const content = $(".post-content").html();
            // const views = $(".meta-info__views span").text();
            const post = {
                title: title,
                image: image,
                description: description
            }

            console.log(post);
        });
}
function velomesto() {
    unirest
        .get("https://velomesto.com/magazine/v-mire/plavayushij-fitnes-zal-v-parizhe/")
      .end(function(response) {
        // console.log(response.body);
        const body = response.body;
        const $ = cheerio.load(body, { decodeEntities: false });
        const title = $(".block-title").text().trim();
        const image = "https://velomesto.com" + $(".col-lg-8 .img-responsive").attr("src");
        const description = $(".content .lead").text().trim();
        const content = $(".content").html().replace(/\/media/g, "https://velomesto.com/media"); //подставление домена в адресе картинки
        // const views = $(".meta-info__views span").text();
        const post = {
          title: title,
          image: image,
          description: description
        };

          console.log(post);
      });
}
function tproger() {
    unirest
      .get("https://tproger.ru/translations/javascript-trends-2018/")
      .end(function(response) {
        // console.log(response.body);
        const body = response.body;
        const $ = cheerio.load(body, { decodeEntities: false });
        const title = $(".entry-title").text().trim();
        const image = $(".entry-image img.attachment-gallery-large ").attr("data-src");
          const description = $(".entry-content p ").first().text();
        
        
        const content = $(".entry-content").html();
          const views = $('.post-views-count').text();
        
        const post = {
          title: title,
          image: image,
          description: description
        };

          console.log(description);
      });
}
tproger();
const unirest = require('unirest');
const cheerio = require("cheerio");

const elems = {
  lifehacker: {
    title: ".single__title",
    image: "#single-post-header-pattern-image",
    description: ".single__excerpt",
    content: ".post-content"
  },
  velomesto: {
    title: ".block-title",
    image: ".col-lg-8 .img-responsive",
    description: ".content .lead",
    content: ".content"
      
  },
  tproger: {
    title: ".entry-title",
    image: ".entry-image img ",
    description: ".entry-content p ",
    content: ".entry-content"
  }
};

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
        
        // function setImage(imageClass) {
        //   if (imageClass.attr('src') === undefined){
            
        //     console.log(imageClass.data().src);
        //     console.log('test');
        //   }
          
        // }
        // setImage($(".entry-image img "));

        let image = $(".entry-image img ");
        
        image = !image.attr("src") ? image.data().src : image.attr("src");

        // const image = $(".entry-image img ").data().src;  

        const description = $(".entry-content p ").first().text();
        const content = $(".entry-content").html();
                  
        // const post = {
        //   title: title,
        //   image: image,
        //   description: description
        // };

        console.log(image);
      });
}
function parsePost(url, elems) {
  unirest.get(url).end(function(response) {
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
tproger();
parsePost(
  "https://tproger.ru/translations/javascript-trends-2018/",
  elems.tproger
);
parsePost(
  "https://lifehacker.ru/android-prilozheniya-instrumenty/",
  elems.lifehacker
);
parsePost(
  "https://velomesto.com/magazine/v-mire/plavayushij-fitnes-zal-v-parizhe/",
  elems.velomesto
);
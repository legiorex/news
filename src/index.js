import parsePost from './parsePost';
import {elems} from './configs';
// const parsePost = require("./parsePost");
// const configs = require('./configs');
// const elems = {
//   lifehacker: {
//     title: ".single__title",
//     image: "#single-post-header-pattern-image",
//     description: ".single__excerpt",
//     content: ".post-content"
//   },
//   velomesto: {
//     title: ".block-title",
//     image: ".col-lg-8 .img-responsive",
//     description: ".content .lead",
//     content: ".content"

//   },
//   tproger: {
//     title: ".entry-title",
//     image: ".entry-image img ",
//     description: ".entry-content p ",
//     content: ".entry-content"
//   }
// };


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
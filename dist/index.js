'use strict';

var _parsePost = require('./parsePost');

var _parsePost2 = _interopRequireDefault(_parsePost);

var _configs = require('./configs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


(0, _parsePost2.default)("https://tproger.ru/translations/javascript-trends-2018/", _configs.elems.tproger);
(0, _parsePost2.default)("https://lifehacker.ru/android-prilozheniya-instrumenty/", _configs.elems.lifehacker);
(0, _parsePost2.default)("https://velomesto.com/magazine/v-mire/plavayushij-fitnes-zal-v-parizhe/", _configs.elems.velomesto);
"use strict";
var utils_request = require("../utils/request.js");
const getSwiper = () => {
  return utils_request.request("/home/swiperdata").then((res) => res);
};
exports.getSwiper = getSwiper;

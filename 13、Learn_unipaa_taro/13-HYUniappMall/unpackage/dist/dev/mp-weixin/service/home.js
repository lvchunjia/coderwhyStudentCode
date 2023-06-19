"use strict";
const service_index = require("./index.js");
function getHomeMultidata() {
  return service_index.hyRequest.get("/home/multidata");
}
function getHomeData(type, page) {
  return service_index.hyRequest.get("/home/data", {
    type,
    page
  });
}
exports.getHomeData = getHomeData;
exports.getHomeMultidata = getHomeMultidata;

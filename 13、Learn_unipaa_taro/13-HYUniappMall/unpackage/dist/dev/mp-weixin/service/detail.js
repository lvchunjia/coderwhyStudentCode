"use strict";
const service_index = require("./index.js");
function getGoodDetail(id) {
  return service_index.hyRequest.get(`/detail?iid=${id}`);
}
function getGoodRecommend() {
  return service_index.hyRequest.get(`/recommend`);
}
class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}
class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
exports.Goods = Goods;
exports.GoodsParam = GoodsParam;
exports.Shop = Shop;
exports.getGoodDetail = getGoodDetail;
exports.getGoodRecommend = getGoodRecommend;

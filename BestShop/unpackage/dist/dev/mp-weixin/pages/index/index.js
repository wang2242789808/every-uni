"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_searchInput2 = common_vendor.resolveComponent("searchInput");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_searchInput2 + _easycom_u_swiper2 + _easycom_u_icon2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_searchInput = () => "../../components/searchInput/searchInput.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_searchInput + _easycom_u_swiper + _easycom_u_icon + _easycom_u_grid_item + _easycom_u_grid)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      banner: []
    });
    api_api.getSwiper().then((res) => {
      if (res.meta.status == 200) {
        data.banner = res.message;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.banner,
          height: "340",
          name: "image_src"
        }),
        b: common_vendor.p({
          name: "photo",
          size: 46
        }),
        c: common_vendor.p({
          name: "lock",
          size: 46
        }),
        d: common_vendor.p({
          name: "hourglass",
          size: 46
        }),
        e: common_vendor.p({
          col: 4
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "C:/Users/Lenovo/Desktop/\u4E50\u5B66\u55B5/BestShop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

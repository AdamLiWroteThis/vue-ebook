function mock(app, url, data) {
  app.get(url, (request, response) => {
    response.json(data);
  });
}

const homeData = require("./src/mock/bookHome");
const shelfData = require("./src/mock/bookShelf");
const listData = require("./src/mock/bookList");
const flatListData = require("./src/mock/bookFlatList");
const detailsData = require("./src/mock/bookDetails");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-ebook" : "/",
  devServer: {
    before(app) {
      mock(app, "/book/home", homeData);
      mock(app, "/book/shelf", shelfData);
      mock(app, "/book/list", listData);
      mock(app, "/book/flat-list", flatListData);
      mock(app, "/book/details", detailsData);
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "my-vue-ebook";
      args[0].template =
        process.env.NODE_ENV === "production"
          ? "./public/index-pro.html"
          : "./public/index.html";
      return args;
    });
  }
};

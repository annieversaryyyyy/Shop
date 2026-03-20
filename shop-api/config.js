const path = require("path");

const rootPath = __dirname;

let dbUrl = "mongodb://localhost/shop";
let port = 8000;

if (process.env.NODE_ENV === "test") {
  dbUrl = "mongodb://localhost/shop-test";
  port = 8010;
}

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, "public/uploads"),
  port,
  mongo: {
    // db: "mongodb://localhost/shop",
    db: dbUrl,
    options: {},
  },
  google: {
    clientId:
      "163796225030-mihi8qo1v96g5f2ifph79ou2r3li7tkf.apps.googleusercontent.com",
  },
};

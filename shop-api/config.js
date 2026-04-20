const path = require("path");

const rootPath = __dirname;

let dbUrl = process.env.MONGO_URL;
let port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.MONGO_URL;
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

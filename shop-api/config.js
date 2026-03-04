const path = require("path");

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, "public/uploads"),
  mongo: {
    db: "mongodb://localhost/shop",
    options: {},
  },
  google: {
    clientId:
      "163796225030-mihi8qo1v96g5f2ifph79ou2r3li7tkf.apps.googleusercontent.com",
  },
};

const fs = require("fs");
const fileName = "./db.json";
let data = [];

module.exports = {
  init() {
    try {
      const fileContents = fs.readFileSync(fileName);
      data = JSON.parse(fileContents);
    } catch (e) {
      data = [];
    }
  },
  getItems() {
    return data;
  },
  getItem(id) {
    return data.find((i) => i.id === id);
  },
  addItem(item) {
    item.id = crypto.randomUUID()
    data.push(item);
    this.save()
  },
  save() {
    fs.writeFileSync(fileName, JSON.stringify(data));
  },
};

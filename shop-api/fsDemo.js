const fs = require("fs");

const fileName = "./test.json";

fs.writeFileSync(fileName, '{"message" : "hello"}');

fs.readFile(fileName,(err,data) => {
    if(err) {
        console.error(err)
    }

    const onj = JSON.parse(data);
    console.log('file: contents', obj.message)


})

console.error(err);

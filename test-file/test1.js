const fs = require("fs");
const path = require("path");
const fileName = path.resolve(__dirname, "data.txt");

// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// });

const content = "这是新写入的内容\n";
const opt = {
  flag: "a",//追加a，写入用w
};
fs.writeFile(fileName, content, opt, (err) => {
  if (err) {
    console.log(err);
  }
});

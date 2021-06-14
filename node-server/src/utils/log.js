const fs = require("fs");
const path = require("path");

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + "\n");
}

// 生成write stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, "../", "../", "logs", fileName);
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: "a",
  });
  return writeStream;
}

// 写访问日志
const assessWriteStream = createWriteStream("access.log");
function access(log) {
  writeLog(assessWriteStream, log);
}

module.exports = {
  access,
};

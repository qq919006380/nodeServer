const mysql = require("mysql");
const { MYSQL_CONF } = require("../conf/db.js");
// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF);
// 开始连接
con.connect();

// 统一执行sql函数
function exec(sql) {
  const promise = new Promise((resolve, resject) => {
    con.query(sql, (err, result) => {
      if (err) {
        resject(err);
      }
      resolve(result);
    });
  });
  return promise;
}
module.exports = {
  exec,
  escape: mysql.escape,
};

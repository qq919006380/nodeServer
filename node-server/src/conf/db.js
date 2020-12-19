const env = process.env.NODE_ENV
let MYSQL_CONF

if (env == 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '007523',
        port: "3306",
        database: 'xxx'
    }
}

if (env == 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '007523',
        port: "3306",
        database: 'xxx'
    }
}

module.exports={
    MYSQL_CONF
}
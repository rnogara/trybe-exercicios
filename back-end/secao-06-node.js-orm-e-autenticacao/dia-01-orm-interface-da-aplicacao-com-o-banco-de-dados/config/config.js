module.exports = {
  development: {
    username: "root",
    password: 'senha-mysql',
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: 'senha-mysql',
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: 'senha-mysql',
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}

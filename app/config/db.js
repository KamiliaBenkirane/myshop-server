module.exports = {
    HOST: "localhost", // or HOST: "localhost" if you installed mySQL locally
   // localization your mySQL instance – in this example I use mySQL instance from

    USER: "postgres", /// for example for me it is rogus
    PASSWORD: "admin",
    DB: "myshop",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
   };
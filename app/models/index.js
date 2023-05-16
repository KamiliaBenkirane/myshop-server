const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
 host: dbConfig.HOST,
 dialect: dbConfig.dialect,
 operatorsAliases: false,
 pool: {
 max: dbConfig.pool.max,
 min: dbConfig.pool.min,
 acquire: dbConfig.pool.acquire,
 idle: dbConfig.pool.idle
 }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./userModel.js")(sequelize, Sequelize);
db.item = require("./itemModel.js")(sequelize, Sequelize);
db.role = require("./roleModel.js")(sequelize, Sequelize);

db.role.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin"];

module.exports = db;
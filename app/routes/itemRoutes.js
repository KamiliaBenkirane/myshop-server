module.exports = app => {
    const items = require("../controllers/itemController.js");
  
    var router = require("express").Router();

    router.post("/one", items.findOne);
  
    // Create a new user
    router.post("/create", items.create);
  
    // Retrieve all users
    router.get("/all", items.findAll);

    // Retrieve a single user with id
    //router.get("/email", users.findOne);

    app.use('/api/items', router);
}
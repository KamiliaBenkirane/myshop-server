const { authJwt } = require("../middleware");
const controller = require("../controllers/userController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};


/*module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/create", users.create);
  
    // Retrieve all Users
    router.get("/all", users.findAll);

    // Retrieve a single Tutorial with email
    //router.get("/email", users.findOne);

    app.use('/api/users', router);

};*/
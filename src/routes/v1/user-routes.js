const router = require("express").Router();
const { UserController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

router.post("/", UserController.signup);

module.exports = router;

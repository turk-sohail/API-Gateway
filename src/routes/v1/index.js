const express = require("express");
const UserRoutes = require("./user-routes");

const { InfoController } = require("../../controllers");

const router = express.Router();

router.get("/info", InfoController.info);
router.use("/signup", UserRoutes);

module.exports = router;

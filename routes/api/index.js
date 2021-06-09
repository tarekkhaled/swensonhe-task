const express = require("express");
const router = express.Router();
const coffeeMachinesRoutes = require("./coffee-machines-routes");
const coffeePodsRoutes = require("./coffee-pods-routes");

router.use("/coffee-machines", coffeeMachinesRoutes);
router.use("/coffee-pods", coffeePodsRoutes);

module.exports = router;

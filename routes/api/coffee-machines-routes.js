const { Op } = require("sequelize");
const express = require("express");
const router = express.Router();

const CoffeeMachine = require("../../models/CoffeeMachine");

router.get("/", async (req, res) => {
  const type = req.query.type;
  const water_compatible = req.query.water_compatible;
  const options = {
    attributes: {
      exclude: ["type", ""],
    },
    where: {
      [Op.and]: [],
    },
  };

  if (type) {
    options.where[Op.and].push({ type });
  }
  if (water_compatible) {
    options.where[Op.and].push({
      water_line: water_compatible === "1" ? true : false,
    });
  }
  const CoffeeMachines = await CoffeeMachine.findAll({
    ...options,
  });
  res.json({
    data: CoffeeMachines,
  });
});

module.exports = router;

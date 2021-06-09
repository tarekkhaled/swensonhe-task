const { Op } = require("sequelize");
const express = require("express");
const router = express.Router();

const CoffeePod = require("../../models/CoffeePod");

router.get("/", async (req, res) => {
  const type = req.query.type;
  const flavor = req.query.flavor;
  const pack_size = req.query.pack_size;
  const options = {
    attributes: {
      exclude: ["type", "flavor", "pack_size"],
    },
    where: {
      [Op.and]: [],
    },
  };

  if (type) {
    options.where[Op.and].push({ type });
  }

  if (flavor) {
    options.where[Op.and].push({ flavor });
  }

  if (pack_size) {
    options.where[Op.and].push({ pack_size });
  }
  const coffeePods = await CoffeePod.findAll({
    ...options,
  });
  res.json({
    data: coffeePods,
  });
});

module.exports = router;

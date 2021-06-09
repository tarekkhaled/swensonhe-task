const { DataTypes } = require("sequelize");
const sequelize = require("../connections");
const { CP_LARGE, CP_SMALL, EP } = require("../constants/coffee-pods-types");
const {
  VANILLA,
  CARAMEL,
  PSL,
  MOCHA,
  HAZELNUT,
} = require("../constants/coffee-flavors");

const CoffeePod = sequelize.define("CoffeePod", {
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  type: {
    type: DataTypes.ENUM([CP_LARGE, CP_SMALL, EP]),
    allowNull: false,
  },
  flavor: {
    type: DataTypes.ENUM([VANILLA, CARAMEL, PSL, MOCHA, HAZELNUT]),
    allowNull: false,
  },
  pack_size: {
    type: DataTypes.ENUM(["1", "3", "5", "7"]) /** in dozen */,
    allowNull: false,
  },
});

module.exports = CoffeePod;

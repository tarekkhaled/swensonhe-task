const { DataTypes } = require("sequelize");
const sequelize = require("../connections");
const {
  CM_LARGE,
  CM_SMALL,
  EM,
} = require("../constants/coffee-machines-types");

const CoffeeMachine = sequelize.define("CoffeeMachine", {
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  type: {
    type: DataTypes.ENUM([CM_LARGE, CM_SMALL, EM]),
    allowNull: false,
  },
  water_line: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = CoffeeMachine;

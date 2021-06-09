const CoffeeMachine = require("../models/CoffeeMachine");
const {
  CM_LARGE,
  CM_SMALL,
  EM,
} = require("../constants/coffee-machines-types");

const insertProduct = (sku, type, water_line) => {
  return {
    sku,
    type,
    water_line,
  };
};

const products = [
  insertProduct("CM001", CM_SMALL, false),
  insertProduct("CM002", CM_SMALL, false),
  insertProduct("CM003", CM_SMALL, true),
  insertProduct("CM101", CM_LARGE, false),
  insertProduct("CM102", CM_LARGE, true),
  insertProduct("CM103", CM_LARGE, true),
  insertProduct("EM001", EM, false),
  insertProduct("EM002", EM, false),
  insertProduct("EM003", EM, true),
];

const seedCoffeeMachineProducts = () => CoffeeMachine.bulkCreate(products);

module.exports = seedCoffeeMachineProducts;

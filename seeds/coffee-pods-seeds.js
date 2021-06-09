const CoffeePod = require("../models/CoffeePod");
const { CP_LARGE, CP_SMALL, EP } = require("../constants/coffee-pods-types");
const {
  VANILLA,
  CARAMEL,
  PSL,
  MOCHA,
  HAZELNUT,
} = require("../constants/coffee-flavors");

const insertProduct = (sku, type, pack_size, flavor) => {
  return {
    sku,
    type,
    pack_size,
    flavor,
  };
};

const products = [
  insertProduct("CP001", CP_SMALL, "1", VANILLA),
  insertProduct("CP003", CP_SMALL, "3", VANILLA),
  insertProduct("CP011", CP_SMALL, "1", CARAMEL),
  insertProduct("CP013", CP_SMALL, "3", CARAMEL),
  insertProduct("CP021", CP_SMALL, "1", PSL),
  insertProduct("CP023", CP_SMALL, "3", PSL),
  insertProduct("CP031", CP_SMALL, "1", MOCHA),
  insertProduct("CP033", CP_SMALL, "3", MOCHA),
  insertProduct("CP041", CP_SMALL, "1", HAZELNUT),
  insertProduct("CP043", CP_SMALL, "3", HAZELNUT),
  insertProduct("CP101", CP_LARGE, "1", VANILLA),
  insertProduct("CP103", CP_LARGE, "3", VANILLA),
  insertProduct("CP111", CP_LARGE, "1", CARAMEL),
  insertProduct("CP113", CP_LARGE, "3", CARAMEL),
  insertProduct("CP121", CP_LARGE, "1", PSL),
  insertProduct("CP123", CP_LARGE, "3", PSL),
  insertProduct("CP131", CP_LARGE, "1", MOCHA),
  insertProduct("CP133", CP_LARGE, "3", MOCHA),
  insertProduct("CP141", CP_LARGE, "1", HAZELNUT),
  insertProduct("CP143", CP_LARGE, "3", HAZELNUT),
  insertProduct("EP003", EP, "3", VANILLA),
  insertProduct("EP005", EP, "5", VANILLA),
  insertProduct("EP007", EP, "7", VANILLA),
  insertProduct("EP013", EP, "3", CARAMEL),
  insertProduct("EP015", EP, "5", CARAMEL),
  insertProduct("EP017", EP, "7", CARAMEL),
];

const seedCoffeePodProducts = () => CoffeePod.bulkCreate(products);

module.exports = seedCoffeePodProducts;

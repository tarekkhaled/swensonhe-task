const seedCoffeeMachineProducts = require("./coffee-machine-seeds");
const seedCoffeePodProducts = require("./coffee-pods-seeds");

const sequelize = require("../connections");

var styles = {
  success: { open: "\u001b[32;1m", close: "\u001b[0m" },
  danger: { open: "\u001b[31;1m", close: "\u001b[0m" },
  info: { open: "\u001b[36;1m", close: "\u001b[0m" },
  subtitle: { open: "\u001b[2;1m", close: "\u001b[0m" },
};

function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close;
}

const seedAll = async () => {
  try {
    console.log(color("info", "▶️  Starting database syncing \n"));
    await sequelize.sync({ force: true });
    console.log(color("success", "Database Synced \n"));

    console.log(
      color("info", "▶️  Starting To Seed Coffee machine products \n")
    );
    await seedCoffeeMachineProducts();
    console.log(color("success", "Coffee machines products seeded \n"));

    console.log(color("info", "▶️  Starting To Seed Coffee pods products \n"));
    await seedCoffeePodProducts();
    console.log(color("success", "Coffee machines pods seeded \n"));

    process.exit(0);
  } catch (e) {
    console.log(e);
    console.log(color("danger", `catch error due to ${e}`));
  }
};

seedAll();

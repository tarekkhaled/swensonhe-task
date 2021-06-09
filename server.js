const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const sequelize = require("./connections");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `app is listening on port ${PORT} - Database Connected Successfully`
      );
    });
  })
  .catch((e) => {
    console.error(`Database failed to connect due to ${e}`);
  });

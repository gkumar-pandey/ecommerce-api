const express = require("express");
const dotenv = require("dotenv");
const { routeNotFound } = require("./middleware");
const routes = require("./routes");
const cors = require("cors");
const helmet = require("helmet");
const connectDb = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT | 3000;

connectDb();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/", routes);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});

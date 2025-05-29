const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes//contact-routes");
const errorHandler = require("./middleware/errorHanler");

const connect = require("./config/dbConnection");

connect();
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(` Ruuning on port:${port} `);
});

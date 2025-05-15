const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;
const contactRoutes = require("./routes//contact-routes");
app.use(express.json());
app.use("/api/contacts", contactRoutes);

app.listen(port, () => {
  console.log(` Ruuning on port:${port} `);
});

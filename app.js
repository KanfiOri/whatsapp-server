const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contacts");

require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/contacts", contactsRouter);

app.listen(9090, () => {
  console.log("Server is runing on port 9090");
});

module.exports = app;

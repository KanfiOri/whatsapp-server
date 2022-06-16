const mongoose = require("mongoose");
const mongodbUrl = "mongodb://127.0.0.1:27017";
const dbName = "Whatsapp";

mongoose.connect(`${mongodbUrl}/${dbName}`);

mongoose.connection.once("open", () => {
  console.log("Server connected to database!");
});

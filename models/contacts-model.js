const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Enter Name"],
    },
    email: {
      type: String,
      require: [true, "Please Enter Email"],
    },
    number: {
      type: String,
      required: [true, "Please Enter Number"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", ContactSchema);

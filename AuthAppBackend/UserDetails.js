const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    mobile: String,
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo",UserDetailsSchema)
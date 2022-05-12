const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userPropertySchema = new Schema(
  {
    icon: { type: String },
    content: { type: String },
    link: { type: String },
  },
  { collection: "user_property" }
);

const UserProperty = mongoose.model("user_property", userPropertySchema);

module.exports = UserProperty;

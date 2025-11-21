const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = { UserModel };

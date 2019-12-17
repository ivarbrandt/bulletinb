const mongoose = require("mongoose");
const { AchievementSchema } = require("./achievement.model");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: Date,
    achievements: [AchievementSchema]
  },
  { timestamps: true }
);
UserSchema.pre("update", function(next){
  if(this.isNew) {
    this.password = bcrypt.hashSync(this.password, "10")
    next()
  }
})
module.exports.UserSchema = UserSchema;
module.exports.User = mongoose.model("User", UserSchema);

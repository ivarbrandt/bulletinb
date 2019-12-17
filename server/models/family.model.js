const mongoose = require("mongoose");
const { UserSchema } = require("./user.model");
const { AchievementSchema } = require("./achievement.model");
const FamilySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    users: [UserSchema],
    achievements: [AchievementSchema]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Family", FamilySchema);

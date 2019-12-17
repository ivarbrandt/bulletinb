const mongoose = require("mongoose");
const AchievementSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    length_of_time: { type: String, required: true },
    image_url: String
  },
  { timestamps: true }
);
module.exports.AchievementSchema = AchievementSchema;
module.exports.Achievement = mongoose.model("Achievement", AchievementSchema);

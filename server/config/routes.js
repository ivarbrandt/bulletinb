const AchievementController = require("../controllers/achievement.controller");
const UserController = require("../controllers/user.controller");
const FamilyController = require("../controllers/family.controller");
module.exports = app => {
  app.get("/api/achievements", AchievementController.showAllAchievements);
  app.get("/api/achievement/:id", AchievementController.showOneAchievement);
  app.post(
    "/api/achievements/new/:id",
    AchievementController.updateAchievement
  );
  app.delete(
    "/api/achievements/delete/:id",
    AchievementController.deleteAchievement
  );
  app.get("/api/families", FamilyController.allFamilies);
  app.get("/api/families/:id", FamilyController.findOneFamily);
  app.post("/api/families/new", FamilyController.createFamily);
  app.put("/api/families/update/:id", FamilyController.updateFamily);
  app.delete("/api/families/delete/:id", FamilyController.deleteFamily);
};

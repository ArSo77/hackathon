const express = require("express");
const controller = require("../controllers/progress");
const router = express.Router();

router.get("/group/list", controller.getAllGroups);
router.post("/group/create", controller.postGroup);
router.put("/group/edit", controller.editGroup)
router.delete("/group/delete", controller.deleteGroup);

router.get("/list", controller.getAllProgress);
router.post("/create", controller.postProgress);
router.delete("/delete", controller.deleteProgress);

module.exports = router;

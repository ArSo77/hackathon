const express = require("express");
const controller = require("../controllers/calendar");
const router = express.Router();

router.get("/list", controller.getAll);
router.post("/create", controller.post);
router.delete("/delete", controller.delete);
// router.put("/edit/:id", controller.edit);
// router.get("/:id", controller.getById);


module.exports = router;

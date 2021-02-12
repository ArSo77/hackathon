const express = require("express");
const trainingController = require("../controllers/training");
const router = express.Router();

router.get("/list", trainingController.getTrainings);
router.post("/create", trainingController.postTraining);
router.put("/edit/:trainingId", trainingController.editTraining);
router.delete("/delete", trainingController.deleteTraining);
router.get("/:trainingId", trainingController.getTrainingById);


module.exports = router;

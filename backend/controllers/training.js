const path = require("path");
const Training = require("../models/training");

exports.getTrainings = (req, res, next) => {
  const { userId } = req.query;
  console.log("--", userId);
  Training.find({ userId }).then((response) => {
    res.status(200).json(response);
  });
};

exports.getTrainingById = (req, res, next) => {
  Training.find({}).then((response) => {
    res.status(200).json({ trainings: response });
  });
};

exports.postTraining = (req, res, next) => {
  const { date, plan, process, comments, additionals, creatorId, userId, time } = req.body;
  const training = new Training({
    date,
    plan,
    process,
    comments,
    additionals,
    creatorId,
    userId,
    time,
  });
  training
    .save()
    .then((result) => {
      res.status(201).json({ message: "User created!" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  // res.status(200).json({ "text": "ok" });
};

exports.editTraining = (req, res, next) => {
  console.log("editTraining");
  const { plan, process, comments, additionals, creatorId, userId } = req.body;
  const training = new Training();
  Training.findByIdAndUpdate(req.params.trainingId, {
    $set: {
      plan,
      process,
      comments,
      additionals,
      creatorId,
      userId,
    },
  }).then((response) => {
    res.send(response);
  });
};

exports.deleteTraining = (req, res, next) => {
  const { id } = req.query;
  Training.findById(id)
    .then((training) => {
      if (!training) {
        const error = new Error("Could not find training.");
        error.statusCode = 404;
        throw error;
      }
      // if (training.creator.toString() !== req.userId) {
      //   const error = new Error('Not authorized!');
      //   error.statusCode = 403;
      //   throw error;
      // }
      return Training.findByIdAndRemove(id);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Deleted training." });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

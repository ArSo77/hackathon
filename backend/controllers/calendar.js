const path = require("path");
const CalendarRow = require("../models/calendarRow");

exports.getAll = (req, res, next) => {
  const { userId, from, to } = req.query;
  CalendarRow.find({
    userId,
    date: {
      $gte: from,
      $lt: to,
    },
  })
    .populate(["creator", "participants"])
    .then((response) => {
      res.status(200).json(response);
    });
};

exports.getById = (req, res, next) => {
  CalendarRow.find({})
    .populate("creator")
    .then((response) => {
      res.status(200).json({ CalendarRows: response });
    });
};

exports.post = (req, res, next) => {
  const { type, creator, participants, date, time, description, properties } = req.body;
  const calendarRow = new CalendarRow({
    type,
    creator,
    participants,
    date,
    time,
    description,
    properties,
  });
  calendarRow
    .save()
    .then((result) => {
      res.status(201).json({ message: "CalendarRow created!" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.delete = (req, res, next) => {
  const { id } = req.query;
  CalendarRow.findById(id)
    .then((calendarRow) => {
      if (!calendarRow) {
        const error = new Error("Could not find CalendarRow.");
        error.statusCode = 404;
        throw error;
      }
      return CalendarRow.findByIdAndRemove(id);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Deleted CalendarRow." });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

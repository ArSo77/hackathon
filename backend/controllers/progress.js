const Progress = require('../models/progress');
const Group = require('../models/progressGroup');


exports.getGroupById = (req, res, next) => {
    const { userId } = req.query;
    Group.find({ userId }).then((response) => {
        res.status(200).json(response);
    });
};

exports.getAllGroups = (req, res, next) => {
    Group.find({}).populate('items').then((response) => {
        res.status(200).json(response);
    });
};

exports.postGroup = (req, res, next) => {
    const { title, items, owner } = req.body;
    const group = new Group({ title, items, owner });
    group
        .save()
        .then((result) => {
            res.status(201).json({ message: "Group created!" });
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};



exports.editGroup = (req, res, next) => {
    let objToChange = {};
    if (req.body.title) objToChange.title = req.body.title
    if (req.body.items) objToChange.items = req.body.items
    Group.findByIdAndUpdate(req.query.id, {
        $set: objToChange,
    }).then((response) => {
        res.send("Updated");
    }).catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};








exports.getAllProgress = (req, res, next) => {
    Progress.find({}).then((response) => {
        res.status(200).json(response);
    });
};

exports.postProgress = (req, res, next) => {
    const { title, type, unit, owner, values } = req.body;
    const progress = new Progress({ title, type, unit, owner, values });
    progress
        .save()
        .then((result) => {
            res.status(201).json({ message: "Progress created!" });
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};








exports.deleteGroup = (req, res, next) => {
    const { id } = req.query;
    Group.findById(id)
        .then((group) => {
            if (!group) {
                const error = new Error("Could not find Group.");
                error.statusCode = 404;
                throw error;
            }
            return Group.findByIdAndRemove(id);
        })
        .then((result) => {
            console.log(result);
            res.status(200).json({ message: "Deleted Group." });
        })
        .catch((err) => {
            console.log(err);
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deleteProgress = (req, res, next) => {
    const { id } = req.query;
    Progress.findById(id)
        .then((progress) => {
            if (!progress) {
                const error = new Error("Could not find Progress.");
                error.statusCode = 404;
                throw error;
            }
            return Progress.findByIdAndRemove(id);
        })
        .then((result) => {
            console.log(result);
            res.status(200).json({ message: "Deleted Progress." });
        })
        .catch((err) => {
            console.log(err);
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};






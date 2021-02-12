const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainingSchema = new Schema(
  {
    plan: {
      type: [],
      required: false
    },
    process: {
      type: [],
      required: false
    },
    comments: {
      type: [],
      required: false
    },
    status: {
      type: [],
      required: false
    },
    dateFrom: {
      type: Date,
      require: true
    },
    dateTo: {
      type: Date,
      require: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    // posts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Post'
    //   }
    // ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", trainingSchema);

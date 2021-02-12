const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainingSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: false,
    },
    plan: {
      type: Array,
      require: true,
    },
    process: {
      type: Array,
      require: false,
    },
    comments: {
      type: Array,
      require: false,
    },
    additionals: {
      type: Array,
      require: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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

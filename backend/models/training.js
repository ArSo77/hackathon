const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainingSchema = new Schema(
  {
    plan: {
      type: [{






        name: { type: String, required: true },

        type: { type: String, required: true },

        series: { type: [], required: false }






      }],
      required: false
    },
    process: {
      type: [],
      required: false
    },
    comments: {
      type: [{
        creator: { type: Schema.Types.ObjectId },
        text: { type: String, required: true },
        date: { type: Date, default: Date.now }
      }],
      required: false
    },
    status: {
      type: String,
      enum: ["PLANNED", "ABORT", "DONE"],
      default: 'PLANNED',
      required: true
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

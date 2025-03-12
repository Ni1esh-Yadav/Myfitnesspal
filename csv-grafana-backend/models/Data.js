const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    uploadId: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("Data", dataSchema);

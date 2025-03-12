const express = require("express");
const router = express.Router();
const Data = require("../models/Data");

router.get("/upload-ids", async (req, res) => {
  try {
    const uploadIds = await Data.distinct("uploadId");
    res.json(uploadIds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:uploadId", async (req, res) => {
  try {
    const data = await Data.find({ uploadId: req.params.uploadId })
      .select("-_id -__v")
      .lean();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

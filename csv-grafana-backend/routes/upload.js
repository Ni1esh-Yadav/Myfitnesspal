const express = require("express");
const router = express.Router();
const multer = require("multer");
const csvParser = require("csv-parser");
const { Readable } = require("stream");
const Data = require("../models/Data");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("csvFile"), async (req, res) => {
  try {
    const { timestampColumn } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ error: "No CSV file uploaded" });
    if (!timestampColumn)
      return res.status(400).json({ error: "Timestamp column not specified" });

    const uploadId = generateUploadId();
    const documents = [];

    const readableStream = Readable.from(file.buffer.toString());

    readableStream
      .pipe(csvParser())
      .on("data", (row) => {
        const doc = {
          uploadId,
          timestamp: new Date(row[timestampColumn]),
        };

        // Process other columns
        for (const [key, value] of Object.entries(row)) {
          if (key !== timestampColumn) {
            doc[key] = isNaN(value) ? value : parseFloat(value);
          }
        }
        documents.push(doc);
      })
      .on("end", async () => {
        await Data.insertMany(documents);
        res.status(200).json({ uploadId });
      })
      .on("error", (err) => {
        throw err;
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function generateUploadId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = router;

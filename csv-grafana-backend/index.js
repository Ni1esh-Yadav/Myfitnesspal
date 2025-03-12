const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const uploadRouter = require("./routes/upload");
const dataRouter = require("./routes/data");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRouter);
app.use("/api/data", dataRouter);

mongoose
  .connect("mongodb://localhost:27017/grafana-data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

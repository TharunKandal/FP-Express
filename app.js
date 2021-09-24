import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import TestRoutes from "./routes/routes.js";
import Bp from "body-parser";

const app = express();
app.use(Bp.json());

app.use("/tests", TestRoutes);
app.get("/", (req, res) => {
  res.send("Here you are");
});

// connect to db
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to DB", process.env.MONGO_URL);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});

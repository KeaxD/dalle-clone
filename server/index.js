import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

import connectdb from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello World");
});

const StartServer = async () => {
  try {
    connectdb(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server is listening "));
  } catch (err) {
    console.log(err);
  }
};

StartServer();

import express from "express";
import cors from "cors";
import { getDbPool } from "./db.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = getDbPool();

app.listen(port, () => {
  console.log(` App is listening on port ${port}`);
});

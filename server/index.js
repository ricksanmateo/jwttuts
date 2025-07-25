import express from "express";
import cors from "cors";

import jwtAuth from "./routes/jwtAuth.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", jwtAuth);

app.listen(port, () => {
  console.log(` App is listening on port ${port}`);
});

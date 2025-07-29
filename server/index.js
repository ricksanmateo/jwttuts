import express from "express";
import cors from "cors";

import jwtAuth from "./routes/jwtAuth.js";
import dashboard from "./routes/dashboard.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", jwtAuth);

app.use("/dashboard", dashboard);

app.listen(port, () => {
  console.log(` App is listening on port ${port}`);
});

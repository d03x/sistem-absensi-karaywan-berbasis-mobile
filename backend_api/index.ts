import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ApiRoute from "@route/api";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", ApiRoute);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

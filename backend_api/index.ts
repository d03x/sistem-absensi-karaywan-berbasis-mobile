import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ApiRoute from "@route/api";
import morgan from "morgan";
import helmet from "helmet";

const port = 3000;

/**
 * The main Express application instance.
 * This instance is used to configure and run the backend API server.
 */
const app = express();
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Parse incoming request bodies in a middleware before the handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(helmet());
// Set up the API routes
app.use("/api", ApiRoute);
// Default route
app.get("/", (req, res) => {
  res.send("Hello World");
});
// Start the server
app.listen(port, () => {
  console.log("Server is running on port 3000");
});

import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // Standard middleware of expressJS application
app.use(express.json()); // To parse JSON bodies from frontend

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

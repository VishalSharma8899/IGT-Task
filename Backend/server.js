import express from "express";
import dotenv from "dotenv";
import "../Backend/Config/dbConnection.js";
import cors from "cors";
import bodyParser from "body-parser"; 
import userRouter from './routes/userRoutes.js'
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT;
app.use("/uploads", express.static("uploads/"))

app.get("/", (req, res) => res.send("Express on Vercel"));
 
app.use("/auth", userRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://aqibmehtab001:MERNpassword123@recipes.pmveazm.mongodb.net/recipes?retryWrites=true&w=majority",
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
);

app.listen(3001, () => console.log("Server started"));

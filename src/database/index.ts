import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoString = process.env.DATABASE_URL as string;

console.log(mongoString)

//connect to mongo db
mongoose.connect(mongoString, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
  }
});

const db = mongoose.connection;

export default db
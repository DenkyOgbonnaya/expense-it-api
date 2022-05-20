import { Router } from "express";
import userRoutes from "../lib/user/user-routes";

const v1Routes = Router();

v1Routes.get("/", (_, res) => {
  res.send("Welcome to ExpenseIt API V1");
});

v1Routes.use("/users", userRoutes);

export default v1Routes;

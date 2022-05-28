import { Router } from "express";
import userRoutes from "../lib/user/user-routes";
import expenseRoutes from "../lib/expense/expense-routes";
import categoryRoutes from "../lib/category/categories-routes";

const v1Routes = Router();

v1Routes.get("/", (_, res) => {
  res.send("Welcome to ExpenseIt API V1");
});

v1Routes.use("/users", userRoutes);
v1Routes.use("/expenses", expenseRoutes);
v1Routes.use("/categories", categoryRoutes);

export default v1Routes;

import mongoose, { Schema } from "mongoose";
import { IExpense } from "./expense-interface";

const SCALE_FACTOR = 100;
const ExpenseSchema = new Schema<IExpense>(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      set: (val) => val * SCALE_FACTOR,
      get: (val) => val / SCALE_FACTOR,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isDeleted: {
      type: "boolean",
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model<IExpense>("Expense", ExpenseSchema);

export default Expense;

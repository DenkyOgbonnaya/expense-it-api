import { Schema } from "mongoose";
export interface IExpense {
  title: string;
  date: Date | number;
  amount: number;
  category: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  isDeleted: boolean;
}

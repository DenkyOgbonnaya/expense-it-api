import mongoose, { Schema } from "mongoose";
import { ICategory } from "./category-interface";

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: "string",
      required: true,
    },
    user: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<ICategory>("Category", CategorySchema);
export default Category

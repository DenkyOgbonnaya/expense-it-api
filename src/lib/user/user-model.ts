import mongoose, { Schema } from "mongoose";
import { IUser } from "./user-interface";

const UserSchema: Schema = new Schema<IUser>(
  {
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

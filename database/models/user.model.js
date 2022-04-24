import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema(
  {
    id: String,
    name: String, // String is shorthand for {type: String}
    username: String,
    email: String,
    communities: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    creator: Boolean,
  },
  { database: "SuperFans", collection: "users" }
);

export default User;

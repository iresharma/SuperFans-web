import mongoose from "mongoose";

const mongo = await mongoose.connect(process.env.DB_URI);

export { mongo };

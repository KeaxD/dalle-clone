import mongoose, { mongo } from "mongoose";

const connectdb = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB is Connected"))
    .catch((err) => console.log(err));
};

export default connectdb;

import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Successful conection");
    })
    .catch((e) => {
      console.error("Error conecting DB", e);
    });
};

export default connectDB;

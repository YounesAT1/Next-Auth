import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    mongoose.connection.on("connected", () => {
      console.log("Connected");
    });
    mongoose.connection.on("error", (error) => {
      console.log(`error connecting ${error}`);
      process.exit();
    });
  } catch (error: any) {
    console.log(error);
  }
}

import mongoose from "mongoose";

const DB_NAME = "user";
const MONGO_URI = `mongodb+srv://vinay:vinay%40123@cluster0.qr43rnq.mongodb.net/${DB_NAME}`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

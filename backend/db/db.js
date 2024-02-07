import mongoose from "mongoose";

const username = "vinay";
const password = "vinay@123";
const clusterName = "Cluster0"; // Replace with your cluster name
const MONGO_URI = `mongodb+srv://${username}:${password}@${clusterName}.qr43rnq.mongodb.net/${dbName}`;

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
}

export default connectDB;

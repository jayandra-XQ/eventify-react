import mongoose from 'mongoose';


// Connect to MongoDB
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("error connecting to MONGODB", error.message)
    process.exit(1)
  }
}
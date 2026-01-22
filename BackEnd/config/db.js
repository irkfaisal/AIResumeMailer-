import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "AIResumeMailer",
    });

    // Log successful connection
    // console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(`DB connected`);
  } catch (error) {
    // Log and handle errors
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// const connectDB = async () => {
//     try {
//         const DB_OPTION = {
//             dbName: "AIResumeMailer",
//         }
//         await mongoose.connect(DATABASE_URL, DB_OPTION)
//         console.log("database connected successfully")
//     } catch (error) {
//         console.log(error)
//     }
// }
export default connectDB;

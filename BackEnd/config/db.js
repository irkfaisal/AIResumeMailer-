import mongoose  from 'mongoose';

// const DATABASE_URL = "mongodb+srv://irkfaisal:myresumeappProject@cluster0.7rcqr9a.mongodb.net/AIResumeMailer?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
      // Connect to MongoDB
      const conn = await mongoose.connect(process.env.DATABASE_URL, {
        dbName: "AIResumeMailer",
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      // Log successful connection
      console.log(`MongoDB connected: ${conn.connection.host}`);
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

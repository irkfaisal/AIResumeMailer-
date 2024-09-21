import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()


// Create a transporter object
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port:587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false         // Optional, useful for self-signed certificates
  }
});

import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  senderEmail: { type: String, required: true },
  status: { type: String, enum: ['sent', 'failed'], default: 'failed'},
  date: { type: Date, default: Date.now },
});

const Email = mongoose.model('Email', emailSchema);

export default Email;
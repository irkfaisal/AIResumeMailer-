# AIResumeMailer-
Conveys an AI-driven smart solution for applying to jobs via email

![AIResumeMailerBanner](https://github.com/user-attachments/assets/58db0713-5019-4eb3-a19d-81370da60660)

![AiResumeMailerForm](https://github.com/user-attachments/assets/9d6589fe-df2b-4c49-a1fb-65bec82dfdf1)



# MERN Email Sender App

This is a MERN (MongoDB, Express, React, Node.js) based application designed to help users send personalized emails to HR or company career emails. The app allows users to enter their basic details and generates a customized email text, which is sent to the desired recipient.

## Features

- **User Authentication**: 
  - Signup, Login, and Forgot Password functionalities with JWT-based authentication.
  
- **HR Email ID Input**:
  - Input recipient HR or company career email IDs via a simple form.
  
- **Resume & Profile Information**:
  - Users can enter their basic professional information such as name, email, phone, skills, and experience.

- **Enhanced Email Generation**:
  - ChatGPT API integration to automatically generate enhanced, personalized emails based on user information.

- **Email Sending**:
  - Send the generated email directly to the HR or company career email from the app.

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **External API**: ChatGPT

## Project Documentation
 -** Frontend: N.A
 -** Backend: https://docs.google.com/document/d/1boCr8-ec15o3YXC16mCrKyaxcbRcl7-C7TZfXIS1R-M/edit?usp=sharing
 -** Framewire: N/A

## Project Structure
Will update this in future

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/irkfaisal/AIResumeMailer-.git
   cd mern-email-sender
cd backend
npm install
cd ../frontend
npm install
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
cd backend
npm start
cd frontend
npm start


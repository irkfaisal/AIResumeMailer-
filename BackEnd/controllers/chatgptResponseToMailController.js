import {getChatGPTResponse} from "../config/chatgptConfig.js"

export const generateAIResponse = async (req, res) => {
  const { candidateDetails } = req.body;

  // Prompt to send to ChatGPT
  const prompt = `Generate a professional email for a job application using the following details: ${JSON.stringify(candidateDetails)}`;

  // Get the email text from ChatGPT
  const emailText = await getChatGPTResponse(prompt);

  if (emailText) {
    res.status(200).json({ emailText });
  } else {
    res.status(500).json({ error: 'Failed to generate email text' });
  }
};


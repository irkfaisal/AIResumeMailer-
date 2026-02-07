import { getAIResponse } from "../config/AIConfig.js";

export const generateAIResponse = async (req, res) => {
  const candidateDetails  = req.body;
  console.log(candidateDetails, "candidateDetails")

  if (!candidateDetails) {
    return res.status(400).json({ error: 'Candidate details are missing' });
  }

  const prompt = `Generate a professional email for a job application using the following details: ${JSON.stringify(candidateDetails.question)}`;
   console.log("promt", prompt)
  const response = await getAIResponse(prompt);

  if (response.success) {
    return res.status(200).json({ emailText: response.data });
  } else {
    return res.status(500).json({ error: `Failed to generate email text: ${response.error}` });
  }
};

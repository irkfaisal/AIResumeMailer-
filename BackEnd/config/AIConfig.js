import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const getAIResponse = async (prompt) => {
  const SARVAM_API_KEY = process.env.SARVAM_AI_API_KEY;

  if (!SARVAM_API_KEY) {
    console.error('API key is missing');
    return { success: false, error: 'API key is missing' };
  }

  try {
    const response = await axios.post(
      "https://api.sarvam.ai/v1/chat/completions",
      {
        model: "sarvam-m",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${SARVAM_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response.data);

    return { success: true, data: response.data.choices[0].message.content };
  } catch (error) {
    if (error.response?.data?.error?.code === 'insufficient_quota') {
      console.error("Quota exceeded: ", error.response.data.error.message);
      return { success: false, error: 'You have exceeded you API quota. Please check your plan and billing details.' };
    }
    console.error("Error in API call: ", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

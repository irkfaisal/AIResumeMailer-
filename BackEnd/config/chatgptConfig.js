import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const getChatGPTResponse = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('API key is missing');
    return { success: false, error: 'API key is missing' };
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an email assistant" },
        { role: "user", content: prompt }
      ],
      max_tokens: 500
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return { success: true, data: response.data.choices[0].message.content };
  } catch (error) {
    if (error.response?.data?.error?.code === 'insufficient_quota') {
      console.error("Quota exceeded: ", error.response.data.error.message);
      return { success: false, error: 'You have exceeded your OpenAI API quota. Please check your plan and billing details.' };
    }
    console.error("Error in OpenAI API call: ", error.response?.data || error.message);
    return { success: false, error: error.response?.data || error.message };
  }
};

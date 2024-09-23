import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()

export const getChatGPTResponse = async (prompt) => {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        console.error('API key is missing');
        return null;
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
  
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error in OpenAI API call: ", error);
      return null;
    }
  };
  
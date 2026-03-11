// import { getAIResponse } from "../config/AIConfig.js";
import { streamMockMail, streamActualResponse } from "../utils/streamReader.js";
import { getAIResponse } from "../config/AIConfig.js";

export const generateAIResponse = async (req, res) => {
  const { profile, jobDescription } = req.body;

  if (!profile || !jobDescription) {
    return res.status(400).json({
      error: 'User details are missing',
      message: 'User details are missing'
    });
  }

  const {
    fullName,
    email,
    phone,
    linkedinLink,
    portfolioLink,
    jobTitle: currentRole,
    yearsOfExperience,
    skills: mySkills,
    professionalSummary,
    projectDescription,
    projectLink,
    additionalInfo
  } = profile;

  const {
    jobTitle: targetRole,
    companyName,
    companyEmail,
    roles: jobRoles,
    skills: requiredSkills,
    noticePeriod,
    additionalNotes
  } = jobDescription;

  const prompt = `
    Write a professional job application email for the position of "${targetRole}" at "${companyName}".
    Name: ${fullName}
    Email: ${email}
    Phone: ${phone}
    LinkedIn: ${linkedinLink}
    Portfolio: ${portfolioLink}
    Current Role: ${currentRole}
    Experience: ${yearsOfExperience} years
    Skills: ${mySkills}
    Professional Summary: ${professionalSummary}
    Project Highlight: ${projectDescription} (Link: ${projectLink})
    Additional Info: ${additionalInfo}
    Target Role: ${targetRole}
    Company Name: ${companyName}
    Company Email: ${companyEmail}
    Key Responsibilities: ${Array.isArray(jobRoles) ? jobRoles.join(', ') : jobRoles}
    Required Skills: ${Array.isArray(requiredSkills) ? requiredSkills.join(', ') : requiredSkills}
    Additional Notes: ${additionalNotes}
    Notice Period: ${noticePeriod}
  `;

  const result = await getAIResponse(prompt);

  try {

    if (!result || !result.success || !result.data) {
      throw new Error("Invalid response format from AI");
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // We stream the actual text using the response object and the result data
    // Optionally remove '<think>...</think>' tags if your model generates reasoning blocks
    const responseText = result.data.replace(/<think>[\s\S]*?(<\/think>|$)/i, '').trim() || result.data;
    streamActualResponse(res, responseText);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to stream the AI response" });
    res.end();
  }
};


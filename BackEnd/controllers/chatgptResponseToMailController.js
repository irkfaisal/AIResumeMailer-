// import { getAIResponse } from "../config/AIConfig.js";
import { streamMockMail } from "../utils/streamReader.js";

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
    roles: jobRoles,
    skills: requiredSkills,
    noticePeriod,
    additionalNotes
  } = jobDescription;

  const prompt = `
    Write a professional job application email for the position of "${targetRole}".
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
    Key Responsibilities: ${Array.isArray(jobRoles) ? jobRoles.join(', ') : jobRoles}
    Required Skills: ${Array.isArray(requiredSkills) ? requiredSkills.join(', ') : requiredSkills}
    Additional Notes: ${additionalNotes}
    Notice Period: ${noticePeriod}
  `;

  try {

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    await streamMockMail(res);

  } catch (err) {
    console.error(err);
    res.end();
  }
};


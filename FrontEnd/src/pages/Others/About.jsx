export default function About() {
    return (
        <div className="min-h-screen gradient__bg p-6">
            <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About Our AI Resume Mailer App</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is this App?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our AI Resume Mailer App is designed to streamline the process of applying for jobs by creating professional, AI-enhanced email content.
                        Simply enter your details, and our application generates a tailored email draft to send to HR or company career emails, saving you time and improving the quality of your job applications.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Does it Work?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        This app is built using the MERN stack (MongoDB, Express, React, and Node.js) with integration to ChatGPT for AI-driven email content generation.
                        Just fill out a simple form with your resume details, and our AI will create a professional email text for you. Once ready, you can directly send this email to the targeted HR email ID without leaving the app.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Using Our App</h2>
                    <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                        <li>Saves time by automating the email writing process for job applications.</li>
                        <li>Ensures a professional tone with AI-generated content tailored to each job application.</li>
                        <li>Simplifies the application process with a user-friendly form and direct email sending.</li>
                        <li>Secure and private – your details are safe with our authenticated system.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Limitations</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        While our AI Resume Mailer App offers a significant improvement in streamlining job application emails, there are some current limitations:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2">
                        <div className='bg-green-400 p-1'>
                            <li><strong>Single Mail Sender Issue:</strong> Currently, all emails are sent from a single, fixed email address integrated on the backend. This means that users cannot send emails from their personal or login email addresses. All outgoing emails will show the same sender, which may reduce personalization and user control.</li>
                        </div>
                        <li><strong>Email Personalization:</strong> The AI-generated content may not fully capture specific experiences or nuanced roles, which may require additional manual edits.</li>
                        <li><strong>Email Delivery Reliability:</strong> The email delivery system depends on third-party servers, which could occasionally impact successful email delivery.</li>
                        <li><strong>Data Privacy:</strong> Although user data is secured, there are ongoing efforts to ensure end-to-end encryption and enhance data protection.</li>
                        <li><strong>AI Limitations:</strong> The ChatGPT integration, while powerful, may sometimes produce generic responses that may not align perfectly with all job applications.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 px-1">Privacy Policy for AIResumMailer</h1>
        <p className="text-gray-600 mb-8 italic">Last Updated: March 11, 2026</p>

        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <p>
            AIResumMailer ("we", "our", or "us") operates the AIResumMailer application. This Privacy Policy explains how we collect, use, and protect your information when you use our service.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h3>
          <p>When you use AIResumMailer, we may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic Google account information (such as your name and email address) when you sign in using Google Sign-In.</li>
            <li>Resume files or content that you upload or generate using the platform.</li>
            <li>Email addresses or recipient information that you provide for sending resumes.</li>
            <li>Usage data such as browser type, device information, and interactions with the application.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h3>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authenticate users using Google Sign-In.</li>
            <li>Generate and send resumes or emails through the platform.</li>
            <li>Improve the functionality and performance of the application.</li>
            <li>Provide user support and maintain service reliability.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Google User Data</h3>
          <p>
            If you sign in using Google authentication, we only access the information necessary for login and identification (such as your name and email address).
          </p>
          <p>
            We do not sell, rent, or share Google user data with third parties except when required to operate the application or comply with legal obligations.
          </p>
          <p>
            AIResumMailer complies with Google API Services User Data Policy.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Data Storage and Security</h3>
          <p>
            We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is completely secure.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Third-Party Services</h3>
          <p>
            Our application may use third-party services such as Google APIs for authentication and functionality. These services have their own privacy policies.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Data Retention</h3>
          <p>
            We retain your data only for as long as necessary to provide the services or comply with legal obligations.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Your Rights</h3>
          <p>
            You may request deletion of your account or personal data at any time by contacting us.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to This Privacy Policy</h3>
          <p>
            We may update this policy from time to time. Updated versions will be posted on this page with the revised date.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact</h3>
          <p>For privacy-related questions, contact:</p>
          <p className="font-medium">Email: your-email@example.com</p>
        </div>
      </div>
    </div>
  );
}

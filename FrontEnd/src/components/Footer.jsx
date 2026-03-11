import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12 border-t">
      <div className="max-w-3xl mx-auto flex justify-center space-x-6">
        <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="text-blue-600 hover:text-blue-800 font-medium">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}

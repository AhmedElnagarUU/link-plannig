import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 flex flex-col items-center justify-center px-4 py-10">
      {/* Card Wrapper */}
      <div className="backdrop-blur-md bg-gray-800/60 border border-gray-700 rounded-3xl shadow-2xl px-10 py-12 w-full max-w-md text-center space-y-6">
       

        {/* Title */}
        <h1 className="text-3xl font-bold text-white">Welcome to Lynqur</h1>
        <p className="text-gray-400 text-sm">
          Join us to explore powerful features and tools made for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <LoginLink>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition duration-300">
              Sign In
            </button>
          </LoginLink>

          <RegisterLink>
            <button className="w-full py-3 bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl transition duration-300">
              Create Account
            </button>
          </RegisterLink>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-500 mt-6">© 2025 Lynqur. All rights reserved.</p>
    </div>
  );
}

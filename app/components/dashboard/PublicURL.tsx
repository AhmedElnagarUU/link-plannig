

import React from "react";
import UserProfile from "@/app/model/UserProfile";
import { addURLName } from "@/app/action/addUrl";




export default function PublicURLPopup({user}:any) {
  
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
    <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 space-y-6">
      
      {/* Glow ring animation */}
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse delay-200"></div>
  
      <h2 className="text-2xl font-bold text-white text-center">🔗 Create Your Public Link</h2>
      <p className="text-sm text-gray-400 text-center">
        Choose a unique name to personalize and share your public page.
      </p>
  
      <form action={addURLName} className="space-y-4">
        <input
          type="text"
          name="urlName"
          placeholder="my-unique-link"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
  
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          🚀 Create Link
        </button>
      </form>
  
      <p className="text-sm text-center text-gray-400">
        Hello <span className="text-blue-400 font-semibold">{user || "friend"}</span>, make your profile public and sharable!
      </p>
    </div>
  </div>
  
  );
}

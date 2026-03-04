import React from "react";

const Footbar = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">
          
          <div>
            <h6 className="text-white font-semibold mb-4">Services</h6>
            <ul className="space-y-2">
              <li className="hover:text-indigo-400 cursor-pointer transition">Branding</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Design</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Marketing</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Advertisement</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Company</h6>
            <ul className="space-y-2">
              <li className="hover:text-indigo-400 cursor-pointer transition">About Us</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Contact</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Jobs</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Press Kit</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-4">Legal</h6>
            <ul className="space-y-2">
              <li className="hover:text-indigo-400 cursor-pointer transition">Terms of Use</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Cookie Policy</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} PT Suka Tidur. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footbar;
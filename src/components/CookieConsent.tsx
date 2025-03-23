"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    
    if (!hasAcceptedCookies) {
      // Show the cookie consent after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const closeCookies = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full">
      <div className="bg-white rounded-lg shadow-xl w-full relative">
        {/* Close button */}
        <button 
          onClick={closeCookies}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close cookie consent"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Cookie consent content */}
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            This website uses cookies to enhance user experience and to analyze performance and 
            traffic on our website. We also share information about your use of our site with our social media, 
            advertising and analytics partners.
            <Link href="/privacy-policy" className="text-[#1264A3] ml-1 hover:underline">
              More Info
            </Link>
          </p>
          
          <button
            onClick={acceptCookies}
            className="w-full bg-[#611f69] text-white py-3 px-4 rounded font-medium hover:bg-[#4A154B] transition-colors duration-200"
          >
            ACCEPT ALL COOKIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
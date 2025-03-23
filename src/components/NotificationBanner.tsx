"use client";
import Link from "next/link";
import { useState } from "react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  if (!isVisible) return null;

  return (
    <div className="w-[80%] mx-auto bg-[#1264A3] text-white py-7 px-6 relative rounded-full ">
      <div className="max-w-7xl mx-auto flex items-start justify-start">
        <p className="text-sm font-medium text-start">
          Slack is your digital HQ. Meet the new features keeping teams
          connected in a work-from-anywhere world.
          <Link
            href="/lets-go"
            className="ml-2 inline-flex items-center font-bold"
          >
            Let&apos;s go
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 3.5L11 8L6.5 12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          aria-label="Close notification"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;

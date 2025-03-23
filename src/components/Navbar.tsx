"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ctaButtons, navbarItems } from "../constants/navbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F4EDE4] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/slack-logo-new.png"
                alt="Slack"
                width={100}
                height={25}
                className="h-6 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-6">
              {navbarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors duration-200"
                >
                  {item.title}
                  {item.hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Search Icon and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              {ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.path}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
                    ${
                      button.variant === "text"
                        ? "text-gray-700 hover:text-purple-700"
                        : button.variant === "outline"
                        ? "text-[#611f69] border border-[#611f69] hover:bg-gray-50"
                        : "bg-[#611f69] text-white hover:bg-[#4A154B]"
                    }
                  `}
                >
                  {button.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-700 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-purple-700 hover:text-purple-700 transition-colors duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex flex-col px-4 space-y-3">
            {ctaButtons.map((button, index) => (
              <Link
                key={index}
                href={button.path}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-center
                  ${
                    button.variant === "text"
                      ? "text-gray-700 hover:text-purple-700"
                      : button.variant === "outline"
                      ? "text-[#611f69] border border-[#611f69] hover:bg-gray-50"
                      : "bg-[#611f69] text-white hover:bg-[#4A154B]"
                  }
                `}
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

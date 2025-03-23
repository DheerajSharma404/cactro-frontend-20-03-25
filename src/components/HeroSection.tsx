"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-[#F4EDE4] py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Slack is where the future works
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Transform the way you work with one place for everyone and
              everything you need to get stuff done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/try-free"
                className="bg-[#611f69] text-white px-6 py-3 rounded-md font-medium text-center hover:bg-[#4A154B] transition-colors duration-200"
              >
                TRY FOR FREE
              </Link>
              <Link
                href="/sign-up-google"
                className="bg-white text-[#1264A3] px-6 py-3 rounded-md font-medium text-center border border-[#1264A3] hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                SIGN UP WITH GOOGLE
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="md:w-1/2 relative">
            <Image
              src="/slack-interface.png"
              alt="Slack interface with project channels and conversations"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

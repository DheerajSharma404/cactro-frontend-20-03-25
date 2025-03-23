"use client";
import Image from "next/image";
import Link from "next/link";

const FutureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F4EDE4]  w-full mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1727243843893-514210bdcca3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pegboard with future items"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#36C5F0] p-4 rounded-md shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 bg-[#1264A3] text-white px-4 py-2 rounded-md shadow-md">
                <span className="font-medium">FUTURE</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Now is your moment to build a better tomorrow
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;ve seen what the future can be. Now it&apos;s time to
              decide what it will be.
            </p>
            <Link
              href="/watch-video"
              className="inline-block border-2 border-[#611f69] text-[#611f69] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              WATCH VIDEO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;

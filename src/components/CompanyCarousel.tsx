"use client";
import Image from "next/image";

interface CompanyLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface CompanyCarouselProps {
  logos: CompanyLogo[];
  className?: string;
}

const CompanyCarousel = ({
  logos,
  className = "",
}: CompanyCarouselProps) => {
  return (
    <div className={`w-full py-10 bg-[#F4EDE4] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            Trusted by companies all over the world
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-auto w-auto max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;

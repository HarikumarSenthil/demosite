import React from "react";
import Image from "next/image";
import Icon from "@/Icons/Icon";

interface ImageData {
  src: string;
  alt: string;
}

const HealthLibrary: React.FC = () => {
  const images: ImageData[] = [
    { src: "/LookingFor/HealthCare/image (5).svg", alt: "Team discussion with laptops" },
    { src: "/LookingFor/HealthCare/image (6).svg", alt: "Medical professionals having a meeting" },
    { src: "/LookingFor/HealthCare/image (7).svg", alt: "Doctors in a strategy session" },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-3xl font-extrabold mb-4 font-inter text-darkCustomBlue">Health Library</h2>
      <div className="flex gap-4 overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[200px] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-lg"
              width={500}
              height={500}
            />
            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-2 rounded-full shadow-md">
              <Icon type = "play-icon"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthLibrary;

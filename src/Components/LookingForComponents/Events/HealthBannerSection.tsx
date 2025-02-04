'use client'
import React, { useState } from "react";
import Icon from "@/Icons/Icon";
import Image from "next/image";

const HealthBannerSection: React.FC = () => {
  const images = [
    "/LookingFor/healthTips.svg",
    "/LookingFor/image.svg",
  ]; // Array of image URLs
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-4 bg-new">
      <h2 className="text-3xl font-extrabold mb-4 font-lato text-darkCustomBlue">Health Fairs</h2>
      <div className="relative flex items-center bg-white rounded-lg">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-blue-500"
          aria-label="Previous"
          onClick={handlePrev}
        >
          <Icon type="left-arrow" />
        </button>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Health Fair ${currentIndex + 1}`}
            className="w-[1120px] h-[300px] object-cover rounded-lg transition-transform duration-500"
            width={1000}
            height={300}
          />
        </div>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-blue-500"
          aria-label="Next"
          onClick={handleNext}
        >
          <Icon type="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default HealthBannerSection;

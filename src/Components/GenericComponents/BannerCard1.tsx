'use client';
import React from 'react';
import Image from 'next/image';

interface BannerProps {
  imageUrl?: string;
  altText?: string;
  title: string;
  description: string;
}

const HeroBanner: React.FC<BannerProps> = ({
  imageUrl,
  altText = "Banner Image",
  title,
  description,
}) => {
  const backgroundUrl = '/Hero/HeroBg.svg';

  return (
    <div
      className="bg-cover bg-center w-full md:h-auto lg:h-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-0"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="flex justify-center w-full md:w-1/2">
          <Image src={imageUrl} alt={altText} width={480} height={480} className="mt-0" />
        </div>
      )}

      {/* Text Section */}
      <div className={`w-full ${imageUrl ? "md:w-1/2" : "md:w-full"} mt-0 md:mt-0 ml-0 pl-4 md:pl-8`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-darkCustomBlue mb-4 font-lato">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-darkCustomBlue font-medium font-lato md:pb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;

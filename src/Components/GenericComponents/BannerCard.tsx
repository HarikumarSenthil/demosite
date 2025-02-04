'use client';
import React from 'react';
import Image from 'next/image';

interface BannerProps {
  imageUrl?: string;
  altText?: string;
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  altText = "Banner Image",
  title,
  description,
}) => {
  const backgroundUrl = '/Hero/HeroBg.svg';

  return (
    <div
      className="bg-cover bg-center w-full h-1/2 md:h-72 lg:h-96 flex justify-around"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="pl-0 max-w-5xl mx-auto flex justify-around items-center p-4 md:p-6 lg:p-8">
        {/* Image Section */}
        {imageUrl && (
          <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="relative">
            <Image
              src={imageUrl}
              alt={altText}
              width={450}
              height={450}
            />
          </div>
        </div>
        )}

        {/* Text Section */}
        <div className={`md:w-${imageUrl ? "1/2" : "full"} mt-6 md:mt-0 md:pl-8`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-darkCustomBlue mb-4 font-lato">
            {title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-darkCustomBlue font-medium font-lato">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
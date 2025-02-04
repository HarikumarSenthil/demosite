'use client';

import React from 'react';
import Icon from '@/Icons/Icon';
import Image from 'next/image';
import Link from 'next/link';  

interface DoctorCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  variant: 'viewProfile' | 'socialIcons';
  doctorId: string; 
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  title,
  description,
  imageUrl,
  variant,
  doctorId,  
}) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-2 flex h-96 flex-col items-center relative mt-36">
  
      <div className="absolute -top-32 w-52 h-52 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          className="object-cover"
          width={300}
          height={250}
        />
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl text-gray-800 font-lato font-extrabold">{name}</h3>
        <p className="text-lg text-black font-medium font-lato">{title}</p>
        <p className="text-gray-500 text-lg mt-2 leading-relaxed font-lato">
          {description}
        </p>
      </div>
      
      <div className="mt-3">
        {variant === 'viewProfile' ? (
          // Use Link for navigation instead of onClick
          <Link href={`/doctors/${doctorId}`}>
            <button className="text-customBlue p-3 border border-customBlue rounded-lg font-lato text-lg font-custom-500 mt-6">
              View Profile
            </button>
          </Link>
        ) : (
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <Icon type="bordered-facebook-icon"/>
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Icon type="bordered-linkedin-icon"/>
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <Icon type="bordered-twitter-icon"/>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;

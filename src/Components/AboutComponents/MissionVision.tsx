import React from 'react';
import Icon from '@/Icons/Icon';
import Image from 'next/image';
const MissionVision: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      
        <div className="flex justify-center md:justify-end ml-0 mr-20">
          <Image
            src="/AboutPage/DoctorVisionMission.svg" 
            alt="Doctor with patients in a hospital"
            className="rounded-xl shadow-lg w-full max-w-md h-auto"
            width={90}
            height={90}
          />
        </div>

     
        <div className="flex flex-row space-x-12 gap-4">
     
        <div className="w-1/2 ml-6">
  <div className="flex flex-col space-y-2 items-start">
    {/* Icon */}
    <Icon type="mission-icon" />

    {/* Mission Heading */}
    <h2 className="text-xl font-bold mt-2 text-gray-800 font-lato">
      Mission
    </h2>
  </div>

  <p
              className="text-gray-500 font-lato mt-5"
              style={{
                width: "282px",
                height: "192px",
                top: "444px",
                left: "18px",
              }}
            >
              Our mission at Image Hospitals is to deliver exceptional healthcare
              services, prioritizing compassion, innovation, and excellence. We are
              dedicated to providing top-tier care, utilizing advanced technology, and
              promoting wellness, all while upholding integrity and respect in
              personalized treatments.
            </p>
</div>


         
<div className="w-1/2">
  <div className="flex flex-col space-y-2 items-start">
    {/* Icon */}
    <Icon type="vision-icon" />

    {/* Vision Heading */}
    <h2 className="text-xl font-bold mt-2 text-gray-800 font-lato">
      Vision
    </h2>
  </div>

  {/* Vision Description */}
  <p
              className="text-gray-500 font-lato mt-4"
              style={{
                width: "282px",
                height: "192px",
                top: "444px",
                left: "18px",
              }}
            >
              Our mission at Image Hospitals is to deliver exceptional healthcare
              services, prioritizing compassion, innovation, and excellence. We are
              dedicated to providing top-tier care, utilizing advanced technology, and
              promoting wellness, all while upholding integrity and respect in
              personalized treatments.
            </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default MissionVision;

import React from "react";
import Image from "next/image";

const Accreditations: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto relative text-center h-[600px]">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-darkCustomBlue font-lato">Accreditations</h2>
        <p className="text-liteblack text-base mb-14 font-lato text-center text-size-20">
          Image Hospitals Proudly Holds Accreditation From Reputable Healthcare
          <br/>
          Authorities, Affirming Our Commitment To Excellence In Patient Care And Safety.
        </p>

        {/* ISO Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/AboutPage/isoCertification.svg"
            alt="ISO 20000 Logo"
            className="mb-2"
            width={150} 
            height={150} 
          />
        </div>

        {/* Top Left Box */}
        <div className="absolute top-40 left-32 w-96 p-4 border border-customBlue shadow-customBlue rounded-2xl shadow-sm bg-white font-lato">
          <p className="mb-2 text-black font-custom-500 text-size-16">
            International Seminars/Doctors Meet:  Image Hospital International Events At HICC Hyd
          </p>
        </div>

        {/* Bottom Left Box */}
        <div className="absolute top-[300px] left-32 w-96 p-4 border border-customBlue shadow-customBlue rounded-2xl shadow-sm bg-white font-lato">
          <p className="mb-2 text-black font-custom-500 text-size-16">
            Image & Royal College Of Surgeons Edinburgh: FRCS Exams At Madhapur
          </p>
        </div>

        {/* Top Right Box */}
        <div className="absolute top-40 right-32 w-96 p-4 border border-customBlue shadow-customBlue rounded-2xl shadow-sm bg-white font-lato">
          <p className="mb-2 text-black font-custom-500 text-size-16">Image At MNC’s Deloitte: IMPACT Day Camp</p>
        </div>

        {/* Bottom Right Box */}
        <div className="absolute top-[300px] right-32 w-96 p-4 border border-customBlue rounded-2xl shadow-sm shadow-customBlue bg-white font-lato">
          <p className="mb-2 text-black font-custom-500 text-size-16">
            Image – Press/Electronic Media: AI Press Meets On Rare Surgeries
          </p>
        </div>

        {/* Bottom Center Box */}
        <div className="absolute bottom-8 left-1/2 right-1/2 transform -translate-x-1/2 w-[50rem] p-4 border-customBlue shadow-customBlue border rounded-2xl shadow-sm bg-white font-lato">
          <p className="mb-2 text-black font-custom-500 text-size-16">Image Team At Emergencies:   Gandhi Bhavan On Fire – MRPS Attacks Flyover Collapsed At Punjagutta, Hyderabad.</p>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;

import React from "react";
import Image from "next/image";

const BlogDetails: React.FC = () => {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg">
      {/* Header Section */}
      <div className="flex flex-row justify-between">
        <Image
          src="/HomeServiceSection/DentalTreatments.svg"
          alt="Hospital Infrastructure"
          className="mx-auto rounded-lg"
          width={350}
          height={100}
        />
        <div className="ml-4">
          <h1 className="text-4xl font-bold text-hashBlack mb-4 font-lato text-size-22">
            Innovative Hospital Infrastructure
          </h1>
          <p className="text-hashBlack text-lg leading-custom-30 font-lato text-size-16">
            In an era where technology and healthcare are rapidly advancing, the infrastructure of hospitals plays a crucial role in delivering top-notch medical care. Modern hospitals are embracing beyond-traditional designs, incorporating innovative solutions that not only enhance patient care but also ensure improved efficiency and sustainability. Hospitals today are being redesigned not only to provide top-notch medical care but also to enhance patient experiences, optimize operational efficiency, and integrate cutting-edge technologies. Here’s a look at some of the most exciting innovations shaping hospital infrastructure that are changing the future of healthcare.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        <p className="text-lg leading-custom-30 mt-5 font-lato text-hashBlack text-size-16">
          Hospitals today are being redesigned not only to provide top-notch medical care but also to enhance patient experiences, optimize operational efficiency, and integrate cutting-edge technologies. Here’s a look at some of the most exciting innovations shaping hospital infrastructure that are changing the future of healthcare.
        </p>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2 font-lato text-newblue">
            1. Smart Hospital Design
          </h2>
          <p className="text-lg leading-custom-30 font-lato text-hashBlack text-size-16">
            Modern hospitals are embracing smart design principles to create spaces that are both functional and patient-friendly. This approach can easily accommodate future expansions or technological upgrades.
          </p>
          <ul className="list-disc pl-5">
            <li className="leading-custom-30 font-lato text-hashBlack text-size-16">
              Electronic Health Records (EHRs): Comprehensive digital records
              ensure that patient information is easily accessible to healthcare
              providers, enhancing coordination and care quality.
            </li>
            <li className="leading-custom-30 font-lato text-hashBlack text-size-16">
              Internet of Things (IoT): IoT devices, such as wearable health
              monitors and smart beds, provide real-time data to healthcare
              professionals, enabling proactive patient care.
            </li>
          </ul>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2 font-lato text-newblue">
            2. Advanced Digital Integration
          </h2>
          <p className="text-lg leading-relaxed font-lato text-hashBlack text-size-16">
            Digital technology is at the heart of modern hospital solutions,
            enabling seamless operations and improved patient care.
          </p>
          <ul className="list-disc pl-5">
            <li className="leading-custom-30 font-lato text-hashBlack text-size-16">
              Electronic Health Records (EHRs): Comprehensive digital records
              ensure that patient information is easily accessible to healthcare
              providers, enhancing coordination and care quality.
            </li>
            <li className="leading-custom-30 font-lato text-hashBlack text-size-16">
              Internet of Things (IoT): IoT devices, such as wearable health
              monitors and smart beds, provide real-time data to healthcare
              professionals, enabling proactive patient care.
            </li>
          </ul>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2 font-lato text-newblue">
            3. Telemedicine and Remote Monitoring
          </h2>
          <p className="text-lg leading-relaxed font-lato text-hashBlack text-size-16">
            Telemedicine helps hospitals deliver care, breaking down
            geographical barriers and expanding access to medical services.
            Remote monitoring and chronic disease management is improving the
            monitoring of patients while enhancing the quality of healthcare.
          </p>
          <ul className="list-disc pl-5">
            <li className="leading-custom-30 font-lato text-hashBlack text-size-16">
              Electronic Health Records (EHRs): Comprehensive digital records
              ensure that patient information is easily accessible to healthcare
              providers, enhancing coordination and care quality.
            </li>
            <li className="leading-custom-30 font-lato text-hashBlack text-size-16">
              Internet of Things (IoT): IoT devices, such as wearable health
              monitors and smart beds, provide real-time data to healthcare
              professionals, enabling proactive patient care.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

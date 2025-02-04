import React from "react";
import Image from "next/image";
import Icon from "@/Icons/Icon";

const services = [
  {
    title: "Patient Care",
    description:
      "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
    link: "#",
    img: "/LookingFor/MedicalArticles/MedicalArticles.svg",
  },
  {
    title: "Medical Facilities",
    description:
      "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
    link: "#",
    img: "/LookingFor/MedicalArticles/MedicalArticles.svg",
  },
];

const serviceslist = [
  {
    title: "Patient Care",
    date: "June 3, 2024",
  },
  {
    title: "Medical Facilities",
    date: "June 3, 2024",
  },
  {
    title: "Cardiology Services",
    date: "June 3, 2024",
  },
];

const MedicalNewsServiceSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Left Side: Service Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-5 w-full">
              <Image
                src={service.img}
                alt={service.title}
                className="w-full h-52 object-cover rounded-lg"
                width={100}
                height={50}
              />
              <h3 className="text-xl font-semibold text-customBlue font-lato mt-5">{service.title}</h3>
              <p className="text-liteblack text-size-18 mt-2 leading-relaxed mb-5 font-lato mb-5">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Service List */}
        <div className="flex-[0.7] flex flex-col gap-4">
          {serviceslist.map((service, index) => (
       <div
       key={index}
       className="flex-col items-start p-4 mr-2 mt-3 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow w-96"
     >
              <div>
              <h3 className="text-base font-semibold text-gray-800 font-lato">
              {service.title}
            </h3>
            <div className="flex flex-row items-center mt-2">
              <Icon type="clock-icon" fill="#6B7280" className="mt-1" />
              <p className="ml-2 text-sm text-gray-500 font-lato mt-1">{service.date}</p>
            </div>

              </div>
            </div>
          ))}
          
          {/* View All Button */}
          <button className="px-6 py-2 bg-customBlue text-white rounded-md transition w-36 font-lato text-size-16 flex items-center justify-center gap-2">
    View All
    <Icon 
      type="arrow-icon" 
      height="25" 
      width="25" 
      className="inline-block"
    />
  </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalNewsServiceSection;

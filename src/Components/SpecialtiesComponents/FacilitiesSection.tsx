import React from "react";
import Image from "next/image";

const facilities = [
  {
    title: "Advanced Hybrid Operating Rooms",
    description:
      "Experience surgical excellence in our advanced hybrid operating rooms, equipped with cutting-edge technology for precise and efficient interventions, ensuring optimal patient outcomes.",
    image: "/Specialities/EmergencyCare/image (1).svg",
  },
  {
    title: "Advanced Cardiac Imaging Centers",
    description:
      "Experience surgical excellence in our advanced hybrid operating rooms, equipped with cutting-edge technology for precise and efficient interventions, ensuring optimal patient outcomes.",
    image: "/Specialities/EmergencyCare/image (2).svg", 
  },
  {
    title: "Electrophysiology Lab facility Centers",
    description:
      "Experience surgical excellence in our advanced hybrid operating rooms, equipped with cutting-edge technology for precise and efficient interventions, ensuring optimal patient outcomes.",
    image: "/Specialities/EmergencyCare/image.svg"
  },
];

const FacilitiesSection: React.FC = () => {
  return (
    <section className="py-10 bg-white m-8">
      <div className="container mx-auto">
        <h2 className="text-3xl text-darkCustomBlue font-extrabold font-inter">Facilities available here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white shadow-md">
              <Image
                src={facility.image}
                alt={facility.title}
                className="w-full h-44 object-cover"
                width={44}
                height={44}
              />

              <h3 className="text-lg mt-4 p-5 font-poppins font-custom-500 text-size-22 text-darkCustomBlue">{facility.title}</h3>
              <p className="text-liteblack mt-0 p-5 font-poppins font-medium flex-grow">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

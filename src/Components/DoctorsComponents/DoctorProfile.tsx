'use client';

import React, { useState } from "react";
import DoctorCard from "../GenericComponents/DoctorCard";

// Define the types for doctors
interface Doctor {
  id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  specialty: string;
}

const specialties: string[] = [
  "Cardiology",
  "Oncology",
  "Orthopedics",
  "Neurology",
  "Urology",
  "General Medicine",
  "ENT",
  "General Surgery",
  "Gynecology",
  "Physiotherapy",
  "Pediatrics",
];

const doctors: Doctor[] = [
  {
    id: "dr-james-lee",
    name: "Dr. James Lee, MD",
    title: "Head of Cardiologist",
    description:
      "With expertise in managing complex heart conditions and performing advanced cardiac procedures.",
    imageUrl: "/AboutPage/Doctor1.svg",
    specialty: "Cardiology",
  },
  {
    id: "dr-john-smith",
    name: "Dr. John Smith, MD",
    title: "Emergency Medicine Physician",
    description:
      "With expertise in treating acute illnesses and injuries in medicine physician.",
    imageUrl: "/AboutPage/Doctor2.svg",
    specialty: "General Medicine",
  },
];

const DoctorProfile: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("Cardiology");

  const handleCheckboxChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
  };

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.specialty === selectedSpecialty
  );

  return (
    <div className="flex flex-col md:flex-row p-4 mt-7">
      {/* Checkbox container */}
      <div className="w-full md:w-1/4 pr-8 pl-4">
        <form className="bg-white p-4">
          {specialties.map((specialty) => (
            <div key={specialty} className="mb-4">
              <input
                    type="checkbox"
                    id={specialty}
                    name="specialty"
                    value={specialty}
                    checked={selectedSpecialty === specialty}
                    onChange={() => handleCheckboxChange(specialty)}
                    className="mr-2 cursor-pointer w-6 h-5 accent-blue-500 border-2 border-gray-300 rounded-md focus:ring-blue-500"
                  />

              <label
                htmlFor={specialty}
                className="text-xl mb-4 m-5 cursor-pointer font-lato text-black font-bold"
              >
                {specialty}
              </label>
            </div>
          ))}
        </form>
      </div>

      {/* Doctor cards */}
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            title={doctor.title}
            description={doctor.description}
            imageUrl={doctor.imageUrl}
            variant="viewProfile"
            doctorId={doctor.id}  
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;

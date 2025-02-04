'use client'
import React, { useEffect, useState } from "react";
import Banner from "@/Components/GenericComponents/BannerCard";
import Icon from "@/Icons/Icon";
import SimilarDoctorsProfile from "./SimiliarDoctorsProfile";
import Image from "next/image";


interface Doctor {
  id: string;
  name: string;
  title: string;
  department:string;
  description: string;
  imageUrl: string;
  specialty: string;
  achievements: string[];
  degrees: { main: string; light: string }[];
  contactInfo: { phone: string; email: string };
  schedules: { day: string; time: string }[];
}

const doctorData: Record<string, Doctor> = {
  "dr-james-lee": {
    id: "dr-james-lee",
    name: "Dr. James Lee, MD",
    title: "Head of Cardiologist",
    department:"Cardiology Department",
    description:
      "With expertise in managing complex heart conditions and performing advanced cardiac procedures.",
    imageUrl: "/AboutPage/Doctor1.svg",
    specialty: "Cardiology",
    achievements: [
      "Fellow of the American Psychiatric Association (FAPA).",
      "Recognized for research contributions with grants from the National Institute of Mental Health (NIMH) and the American Foundation for Suicide Prevention.",
    ],
    degrees: [
      {
        main: "University of California, San Francisco.",
        light: "Medical degree",
      },
      {
        main: "University of California, Los Angeles (UCLA) Medical Center.",
        light: "Completed residency training in psychiatry",
      },
      {
        main: "University of California, Berkeley.",
        light: "Master of Public Health degree",
      },
    ],
    contactInfo: { phone: "+123-456-7890", email: "jameslee@hospital.com" },
    schedules: [
      { day: "Monday", time: "09:00–12:00" },
      { day: "Wednesday", time: "15:00–18:00" },
      { day: "Friday", time: "10:00–13:00" },
    ],
  },
};

const DoctorProfilePage: React.FC = () => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    const doctorsId = window.location.pathname.split("/").pop();

    if (doctorsId) {
      const doctorDetails = doctorData[doctorsId as string];
      setDoctor(doctorDetails || null);
    }
  }, []);

  if (!doctor) {
    return <div className="p-8 text-red-500">Doctor not found</div>;
  }

  return (
    <div className="">
      {/* Banner Section */}
      <div className="relative">
        <Banner
          title={doctor.name}
          description={`${doctor.title} - ${doctor.specialty}`}
        />
        {/* Doctor Image */}
        <div className="absolute top-56 left-10 transform -translate-y-1/2">
          <Image
            src={doctor.imageUrl}
            alt="Doctor"
            className="w-80 h-full"
            width={80}
            height={100}
          />
          <button className="bg-blue w-80 h-12 text-white text-center text-lg font-semibold rounded-md shadow-md font-lato">
          {doctor.department}
          </button>
        </div>
        {/* Social Media Icons */}
        <div className="absolute top-[350px] right-10 bg-customBlue rounded-lg shadow-md p-4 flex items-center gap-2">
  <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
    <Icon type="linked-icon" />
  </button>
  <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
    <Icon type="twitter-icon" />
  </button>
  <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
    <Icon type="linked-icon" />
  </button>
</div>

      </div>

      {/* Details Section */}
      <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Contact Info & Appointment Schedules */}
        <div className="col-span-1 space-y-6">
          {/* Contact Info */}
          <div className="bg-white p-6">
            <div className="flex items-center space-x-4">
              <Icon type="contact-icon" width="20" height="20" />
              <h3 className="text-xl font-bold font-inter">Contact Info</h3>
            </div>
            <div className="text-gray-700 flex items-center mt-4 space-x-2">
              <Icon type="phone-icon" width="20" height="20" />
              <span className="font-lato pl-5">{doctor.contactInfo.phone}</span>
            </div>
            <div className="text-gray-700 flex items-center mt-2 space-x-2">
              <Icon type="email-icon" width="20" height="20" />
              <span className="font-lato pl-5">{doctor.contactInfo.email}</span>
            </div>
          </div>

          {/* Appointment Schedules */}
          <div className="bg-white p-6">
            <div className="flex items-center space-x-4">
              <Icon type="contact-icon" />
              <h3 className="text-xl font-bold font-inter pl-5">Appointment Schedules</h3>
            </div>
            <ul className="space-y-3 mt-4 rounded-lg shadow-md p-5">
              {doctor.schedules.map((schedule, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-700"
                >
                  <span className="font-poppins pl-5">{schedule.day}</span>
                  <span className="flex items-center font-medium text-blue-600 font-lato space-x-2">
                    <Icon type="clock-icon" />
                    <span className="pl-5">{schedule.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Degrees, Experiences & Achievements */}
        <div className="col-span-2 space-y-6 -mt-12">
          {/* Degrees Section */}
          <div className="bg-white p-6">
            <div className="flex items-center space-x-4">
              <Icon type="degree-icon" />
              <h3 className="text-xl font-bold font-inter pl-5">Degrees</h3>
            </div>
            <ul className="space-y-3 mt-4">
              {doctor.degrees.map((degree, index) => (
                <li key={index} className="flex items-center space-x-4 pl-6">
                  <Icon type="dot-icon" />
                  <span className="font-poppins">
                    {degree.main} <br />
                    <span className="text-gray-500 font-lato">{degree.light}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6">
            <div className="flex items-center space-x-4">
             <Icon type = "expericence-icon"/>
              <h3 className="text-xl font-bold font-inter pl-4">Experiences</h3>
            </div>
            <ul className="space-y-3 mt-4">
              <li className="flex items-center space-x-4 text-gray-700 pl-6">
                <Icon type = "dot-icon"/>
                <span className="font-poppins text-blueprinted">
                  Worked in community mental health clinics, private practice,
                  and academic medical centers.
                </span>
              </li>
              <li className="flex items-center space-x-4 text-gray-700 pl-6">
                <Icon type = "dot-icon"/>
                <span className="font-poppins text-blueprinted font-">
                  Expertise in the treatment of mood disorders, anxiety
                  disorders, and psychotic disorders.
                </span>
              </li>
              <li className="flex items-center space-x-4 text-gray-700 pl-6">
                <Icon type = "dot-icon"/>
                <span className="font-poppins text-blueprinted">
                  Special interest in womens mental health and perinatal
                  psychiatry.
                </span>
              </li>
              <li className="flex items-center space-x-4 text-gray-700 pl-6">
                <Icon type = "dot-icon"/>
                <span className="font-poppins text-blueprinted">
                  Experience managing complex cases that involve both mental
                  health and medical issues.
                </span>
              </li>
            </ul>
          </div>
          {/* Achievements Section */}
          <div className="bg-white p-6">
            <div className="flex items-center space-x-4">
              <Icon type="achievement-icon" />
              <h3 className="text-xl font-bold font-inter pl-4">Awards/Achievements</h3>
            </div>
            <ul className="space-y-3 mt-4">
              {doctor.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center space-x-4 pl-6">
                  <Icon type="dot-icon" />
                  <span className="font-poppins text-blueprinted">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Doctors recommendation section */}
      <SimilarDoctorsProfile />
    </div>
  );
};

export default DoctorProfilePage;

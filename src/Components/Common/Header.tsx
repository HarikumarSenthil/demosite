'use client';
import React, { useState } from "react";
import Link from "next/link";
import Icon from "@/Icons/Icon";
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Header: React.FC = () => {
  const [showSpecialities, setShowSpecialities] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const specialities = [
    { name: "Cardiology", imageIcon: <Icon type="Cardiology" fill="#969696" /> },
    { name: "General Physician", imageIcon: <Icon type="GeneralPhysician" fill="#969696" /> },
    { name: "Orthopedics", imageIcon: <Icon type="Orthopedics" fill="#969696" /> },
    { name: "Neurology", imageIcon: <Icon type="Neurology" fill="#969696" /> },
    { name: "Gastroenterology", imageIcon: <Icon type="Gastroenterology" fill="#969696" /> },
    { name: "Pediatrics", imageIcon: <Icon type="Pediatrics" fill="#969696" /> },
    { name: "Urology", imageIcon: <Icon type="Urology" fill="#969696" /> },
    { name: "Psychiatry", imageIcon: <Icon type="Psychiatry" fill="#969696" /> },
    { name: "Physiotherapy", imageIcon: <Icon type="Physiotherapy" fill="#969696" /> },
    { name: "Nephrology", imageIcon: <Icon type="Nephrology" fill="#969696" /> },
    { name: "Gynaecology", imageIcon: <Icon type="Gynaecology" fill="#969696" /> },
    { name: "ENT", imageIcon: <Icon type="ENT" fill="#969696" /> },
  ];

  const options = [
    { label: "Events", value: "events" },
    { label: "Health Hub", value: "health-hub" },
    { label: "Medical Articles", value: "medical-articles" },
    { label: "Medical Articles & News", value: "news" },
  ];

  const router = useRouter();
  const handleMouseLeave = () => {
    setShowSpecialities(false);
    setShowOptions(false);
  };

  const handleSpecialityClick = (speciality: string) => {
    router.push(`/specialties/${speciality.toLowerCase().replace(/\s+/g, '-')}`);
    setShowSpecialities(false);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false); // Close mobile menu on item click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full shadow-xl relative" onMouseLeave={handleMouseLeave}>
      {/* Contact Info */}
      <div className="bg-gray-100 py-2 text-right text-sm p-5">
        <div className="container mx-auto flex md:justify-end justify-around space-x-6 gap-5 items-center">
          <span className="flex items-center space-x-4">
            <Icon type="phone-icon" width="25" height="21" fill="#2F618A" className="ml-8 md:mt-8" />
            <span className="font-lato text-sm">+91 9874563241</span>
          </span>
          <span className="flex items-center space-x-4 font-lato">
            <Icon type="email-icon" width="25" height="21" fill="#2F618A" />
            <span className="font-lato text-sm p-1">info@wecare.in</span>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-around items-center w-full pt-5 pb-5 border shadow-xl">
        <div className="flex items-center space-x-4">
          <Icon type="header-icon" className="w-15 h-15 md:ml-12 ml-0" />
          <span className="text-base font-bold text-inkblue whitespace-nowrap font-lato">
            WECARE MULTI
            <br /> SPECIALITY CLINIC
          </span>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden mr-0">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6 text-base relative">
          <Link
            href="/"
            className={`${
              activeItem === "home"
                ? "underline text-customBlue opacity-100"
                : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
            } font-lato font-custom-400 text-size-20 text-black`}
            onClick={() => handleItemClick("home")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              activeItem === "about"
                ? "underline text-customBlue opacity-100"
                : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
            } font-lato font-custom-400 text-size-20 text-black`}
            onClick={() => handleItemClick("about")}
          >
            About Us
          </Link>

          {/* Specialities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowSpecialities(true)}
          >
            <a
              className={`${
                activeItem === "specialities"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato text-size-20 text-black`}
              onClick={() => handleItemClick("specialities")}
            >
              Specialities
            </a>
            <select value="" disabled className="hover:underline text-black"></select>
            {showSpecialities && (
              <div
                className="absolute bg-white shadow-lg p-4 grid grid-cols-4 gap-4 border rounded-md"
                style={{
                  top: "65px",
                  left: "50%",
                  transform: "translateX(-40%)",
                  zIndex: 50,
                  width: "1200px",
                }}
              >
                {specialities.map((speciality, index) => (
                  <div
                    key={index}
                    className="p-2 border-transparent border-2 rounded-md cursor-pointer text-gray-700 flex flex-row items-center justify-around text-center group hover:border-customBlue"
                    onClick={() => handleSpecialityClick(speciality.name)}
                    style={{ height: '100px' }}
                  >
                    <div className="mb-2 group-hover:filter group-hover:invert group-hover:text-customBlue">
                      {speciality.imageIcon}
                    </div>
                    <span className="mr-1 text-customGray font-lato text-size-20 font-custom-500 group-hover:text-gray-800">
                      {speciality.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/doctors"
            className={`${
              activeItem === "doctors"
                ? "underline text-customBlue opacity-100"
                : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
            } font-lato font-custom-400 text-size-20 text-black`}
            onClick={() => handleItemClick("doctors")}
          >
            Doctors Page
          </Link>
          <Link
            href="/contact"
            className={`${
              activeItem === "contact"
                ? "underline text-customBlue opacity-100"
                : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
            } font-lato font-custom-400 text-size-20 text-black`}
            onClick={() => handleItemClick("contact")}
          >
            Contact Us
          </Link>

          {/* Looking For Dropdown */}
          <div
            className="relative w-40"
            onMouseEnter={() => setShowOptions(true)}
          >
            <a
              className={`${
                activeItem === "lookingfor"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato text-size-20 text-black`}
              onClick={() => handleItemClick("lookingfor")}
            >
              Looking For
            </a>
            <select value="" disabled className="hover:underline text-black"></select>
            {showOptions && (
              <div
                className="absolute bg-white shadow-lg p-4 grid grid-cols-1 gap-2 border rounded-md"
                style={{
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 50,
                  width: "180px",
                }}
              >
                {options.map((option, index) => (
                  <Link
                    key={index}
                    href={`/LookingFor/${option.value}`}
                    className="p-2 border-transparent border-2 rounded-md cursor-pointer font-lato font-bold hover:border-customBlue"
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Appointment Button for Desktop */}
        <Link
          href="/contact"
          className="bg-greyBlue font-lato text-size-20 text-white px-6 py-2 rounded-md transition shrink-0 whitespace-nowrap hidden md:block"
        >
          Book An Appointment
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className={`${
                activeItem === "home"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato font-custom-400 text-size-20 text-black`}
              onClick={() => handleItemClick("home")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                activeItem === "about"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato font-custom-400 text-size-20 text-black`}
              onClick={() => handleItemClick("about")}
            >
              About Us
            </Link>
            <Link
              href="/doctors"
              className={`${
                activeItem === "doctors"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato font-custom-400 text-size-20 text-black`}
              onClick={() => handleItemClick("doctors")}
            >
              Doctors Page
           
            </Link>
            {/* Specialities Dropdown */}
            <div
            className="relative w-40"
            onClick={() => setShowOptions1(true)}
          >
            <a
              className={`${
                activeItem === "lookingfor"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato text-size-20 text-black`}
              onClick={() => handleItemClick("specialities")}
            >
             specialities
            </a>
            <select value="" disabled className="hover:underline text-black"></select>
            {showOptions1 && (
              <div
                className="absolute bg-white shadow-lg p-4 grid grid-cols-1 gap-2 border rounded-md"
                style={{
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 50,
                  width: "180px",
                }}
              >
                {specialities.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSpecialityClick(option.name)}
                    className="p-2 border-transparent border-2 rounded-md cursor-pointer font-lato font-bold hover:border-customBlue"
                     
                  >
                    {option.name}
                  </div>
                ))}
              </div>
            )}
          </div>
            <Link
              href="/contact"
              className={`${
                activeItem === "contact"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato font-custom-400 text-size-20 text-black`}
              onClick={() => handleItemClick("contact")}
            >
              Contact Us
            </Link>
           {/* Looking For  */}
            <div
            className="relative w-40"
            onMouseEnter={() => setShowOptions(true)}
          >
            <a
              className={`${
                activeItem === "lookingfor"
                  ? "underline text-customBlue opacity-100"
                  : "hover:underline hover:text-customBlue hover:opacity-100 opacity-66"
              } font-lato text-size-20 text-black`}
              onClick={() => handleItemClick("lookingfor")}
            >
              Looking For
            </a>
            <select value="" disabled className="hover:underline text-black"></select>
            {showOptions && (
              <div
                className="absolute bg-white shadow-lg p-4 grid grid-cols-1 gap-2 border rounded-md"
                style={{
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 50,
                  width: "180px",
                }}
              >
                {options.map((option, index) => (
                  <Link
                    key={index}
                    href={`/LookingFor/${option.value}`}
                    className="p-2 border-transparent border-2 rounded-md cursor-pointer font-lato font-bold hover:border-customBlue"
                    onClick={() => handleItemClick("lookingfor")}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            )}
          </div>





          </nav>
          {/* Appointment Button for Mobile */}
          <div className="p-4">
            <Link
              href="/contact"
              className="bg-greyBlue font-lato text-size-20 text-white px-6 py-2 rounded-md transition shrink-0 whitespace-nowrap block text-center"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
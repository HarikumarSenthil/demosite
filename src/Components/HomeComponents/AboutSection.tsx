import Icon from "@/Icons/Icon";
import Image from "next/image";
import React from "react";

const HomeAboutSection: React.FC = () => {
  return (
    <section className="py-12 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold font-lato leading-custom-30 mt-7" style={{ color: '#274760' }}>
            About Us
          </h1>

          <h2 className="text-2xl font-semibold text-green-600 mb-4 font-lato leading-custom-30 mt-5">
            Meet best Doctors today
          </h2>
          <p className="text-liteblack mb-6 font-lato text-size-20 font-custom-500 leading-custom-30 max-w-xs md:max-w-lg lg:max-w-none">
            We are dedicated to delivering exceptional healthcare services,
            blending medical expertise with compassion. Our team provides
            personalized care tailored to each patient's needs, ensuring a
            positive healthcare experience. Trust us to be your partner in
            health and well-being.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center">
              <Icon type="emergency-icon" height="50" width="50" />
              <span className="text-black font-bold font-lato m-2">Emergency Cases</span>
            </div>
            <div className="flex items-center">
              <Icon type="expert-doctor" height="50" width="50" />
              <span className="text-black font-bold font-lato m-2">Expert Doctors</span>
            </div>
            <div className="flex items-center">
              <Icon type="modern-clinic-icon" height="50" width="50" />
              <span className="text-black font-bold font-lato m-2">Modern Clinic</span>
            </div>
            <div className="flex items-center">
              <Icon type="support-icon" height="50" width="50" />
              <span className="text-black font-bold font-lato m-2">24/7 Support</span>
            </div>
          </div>
          <button className="px-6 py-2 bg-customBlue text-white rounded-md transition w-44 font-lato text-size-20 flex items-center justify-center gap-2">
            See More
            <Icon type="arrow-icon" height="25" width="25" />
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center lg:items-start relative">
          <div className="relative w-full sm:w-96 md:w-[450px] lg:w-[621px]">
            <Image
              src="/HomeAboutUs/HomeAboutImg.svg"
              alt="Doctor and Patient"
              className="rounded-md w-full h-full object-cover"
              width={621}
              height={619.24}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;

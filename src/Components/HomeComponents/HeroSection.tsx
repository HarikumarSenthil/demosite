'use client';
import Icon from "@/Icons/Icon";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white">
      {/* Hero Content */}
      <div className="mx-auto container px-4 sm:px-6 lg:px-20 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-9 font-lato">
            Discover <span className="text-[#00A65A] font-lato">Excellence</span> In{' '}
            <span className="text-customBlue font-lato">Healthcare</span> At Image
          </h1>
          <p className="mt-4 text-liteblack text-base sm:text-lg font-lato max-w-full lg:max-w-[587px]">
            Find your health haven at Image Hospital, where your well-being is our top priority. With personalized care and a commitment to excellence, we’re here to support you.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center space-x-4">
            <button className="bg-customBlue text-white py-3 px-6 rounded-md shadow-md font-lato font-custom-500 text-size-20">
              Book An Appointment
            </button>
            <button className="flex items-center space-x-2 text-[#3064E3]">
              <Icon type="video-icon" />
              <span className="text-lg font-semibold font-lato text-black">Watch Video</span>
            </button>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="order-1 lg:order-2 flex justify-center w-full h-full">
          <Image
            src="/Hero/HeroBannerImg.svg"
            alt="Doctor"
            width={600}
            height={600}
            className="h-auto w-full max-w-[500px] lg:max-w-none"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[url('/Hero/HeroBg.svg')] bg-cover bg-center py-8 mx-4 lg:mx-24 mt-4 lg:mt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Testimonial Items */}
          {[
            {
              name: "Manoj Kumar",
              text: "Very polite and kind staff. Provided proper treatment with positivity in a supportive environment."
            },
            {
              name: "Sandeep Kumar",
              text: "I had a good experience in Image Hospitals. The doctor and nurses are friendly."
            },
            {
              name: "Harsha Reddy",
              text: "Good maintenance doctors are available 24 hours. Every employee in the hospital is helpful."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-transparent p-4 lg:p-6">
              <h3 className="font-bold text-base lg:text-lg font-lato text-darkCustomBlue">{testimonial.name}</h3>
              <div className="flex justify-start mt-1 lg:mt-2">
                {[...Array(5)].map((_, idx) => (
                  <Icon type="star-icon" key={idx} className="w-4 h-4 lg:w-5 lg:h-5 m-0.5" />
                ))}
              </div>
              <p className="mt-2 lg:mt-4 text-sm lg:text-base text-liteblack font-lato leading-snug lg:leading-normal">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
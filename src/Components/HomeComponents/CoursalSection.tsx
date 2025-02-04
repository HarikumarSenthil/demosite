'use client';

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Feedback: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const feedbacks = [
    {
      id: 1,
      name: "John Carter",
      position: "CEO at Google",
      feedback: "An amazing service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      image: "/HomeCourselSection/BG.svg",
    },
    {
      id: 2,
      name: "Sophie Moore",
      position: "MD at Facebook",
      feedback: "One of a kind service",
      description:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam.",
      image: "/HomeCourselSection/person1.svg",
    },
    {
      id: 3,
      name: "Andy Smith",
      position: "CEO Dot Austere",
      feedback: "The best service",
      description:
        "Convallis posuere morbi leo urna molestie at elementum eu facilisis.",
      image: "/HomeCourselSection/person2.svg",
    },
    // {
    //   id: 4,
    //   name: "Andy Smith",
    //   position: "CEO Dot Austere",
    //   feedback: "The best service",
    //   description:
    //     "Convallis posuere morbi leo urna molestie at elementum eu facilisis.",
    //   image: "/HomeCourselSection/person1.svg",
    // },
  ];

  return (
    isClient && (
      <section className="py-10 px-5 lg:px-20 bg-coursalgrey pb-20 mb-24">
        <h2 className="text-3xl font-bold font-lato text-center mb-4 text-darkCustomBlue">
          Testimonial
        </h2>
        <p className="text-center text-liteblack text-size-20 font-lato mb-8">
          Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Semper Dalar
          <br />
          Elementum Tempus Hac Tellus Libero Accumsan.
        </p>
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}" style="background-color: #274760; position:relative; top:5px;"></span>`,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-container"
          >
            {feedbacks.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white shadow-lg rounded-2xl p-6 mx-auto w-full max-w-md mb-7 flex flex-col justify-between">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                    width={16}
                    height={16}
                  />
                  <blockquote className="font-lato text-lg mb-4 text-hashgrey leading-custom-30 font-extrabold">
                    “{item.feedback}”
                  </blockquote>
                  <p className="text-gray-600 leading-relaxed mb-4 font-lato">
                    {item.description}
                  </p>
                  <h3 className="font-bold text-customBlue font-lato">{item.name}</h3>
                  <p className="text-sm text-gray-500 font-lato">{item.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
  );
};

export default Feedback;

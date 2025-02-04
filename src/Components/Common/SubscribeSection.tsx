'use client'

import React from "react";
import Image from "next/image";

const SubscribeSection: React.FC = () => {
    return (
        <section className="bg-[url('/Hero/HeroBg.svg')] bg-cover bg-center py-8 flex flex-col lg:flex-row justify-between items-center px-4">
           
            <div className="mb-6 lg:mb-0">
                <Image
                    src="/HomeSubscribeSection/image 9.svg"
                    alt="Doctor thumbs up"
                    width={250}
                    height={250}
                    className="mx-auto lg:ml-10"
                />
            </div>

            
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
                <div className="text-center lg:text-left mb-6 lg:mb-0 lg:ml-22">
                    <h2 className="text-3xl font-bold mb-4 font-lato">
                        Subscribe to our newsletter
                    </h2>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center gap-4">
                        <div className="p-2 rounded-3xl shadow-md bg-white">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow w-80 sm:w-80 p-2 border-none focus:outline-none font-lato"
                            />
                        </div>
                        <button
                            className="bg-customBlue text-white px-6 py-2 rounded-lg font-bold leading-custom-30 font-lato">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

           
            <div className="relative flex items-center lg:w-1/3 mt-8 lg:mt-0">
                <Image
                    src="/HomeSubscribeSection/hero_img 1.svg"
                    alt="Doctor female"
                    height={320}
                    width={320}
                    className="mx-auto lg:mr-10"
                />
            </div>
        </section>
    );
};

export default SubscribeSection;

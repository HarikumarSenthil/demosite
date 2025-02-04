"use client";

import { useState } from "react";
import Image from "next/image";

interface ContentItem {
  id: number;
  category: "seminars" | "workshops";
  title: string;
  image: string;
}

const SeminarsAndWorkshops: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"seminars" | "workshops">("seminars");

  // Array of content items
  const content: ContentItem[] = [
    { id: 1, category: "seminars", title: "Health and Wellness Seminars", image: "/LookingFor/image (1).svg" },
    { id: 2, category: "seminars", title: "Business Growth Seminars", image: "/LookingFor/image (2).svg" },
    { id: 3, category: "seminars", title: "Educational Seminars", image: "/LookingFor/image (3).svg" },
    { id: 4, category: "workshops", title: "Team Collaboration Workshop", image: "/LookingFor/image (1).svg" },
    { id: 5, category: "workshops", title: "Leadership Development Workshop", image: "/LookingFor/image (2).svg" },
    { id: 6, category: "workshops", title: "Technical Skills Workshop", image: "/LookingFor/image (3).svg" },
  ];

  const filteredContent = content.filter((item) => item.category === activeTab);

  return (
    <div className="container mx-auto py-8 px-4 mb-0">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-darkCustomBlue mb-6 font-lato">
        Seminars and Workshops
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`font-lato font-bold text-xl py-2 w-[600px] rounded mr-0 ${
            activeTab === "seminars"
              ? "bg-blue text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setActiveTab("seminars")}
        >
          Seminars
        </button>
        <button
          className={`font-lato font-bold text-xl py-2 w-[600px] rounded ml-0 ${
            activeTab === "workshops"
              ? "bg-blue text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setActiveTab("workshops")}
        >
          Workshops
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="relative text-center overflow-hidden"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="rounded-md"
            />
            {/* Text overlay */}
            <div className="relative bottom-20 bg-white bg-opacity-45 p-3">
              <p className="text-md font-normal font-lato text-black">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeminarsAndWorkshops;

'use client'
import React from "react";
import Icon from "@/Icons/Icon";

const FindUsHere: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-white -mt-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-darkCustomBlue mb-6 text-left font-lato">Find Us Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex justify-start bg-backgroundblue p-6 rounded-xl shadow-md gap-2">
            <Icon type = "phone-icon" width="60" height="60" fill="#307BC4" onClick={() => console.log("Icon clicked")} className="w-30 h-30 mt-1 p-2" />
            <div>
              <h3 className="text-xl font-extrabold text-darkCustomBlue mt-4 font-lato">Phone</h3>
              <p className="text-base text-darkCustomBlue font-lato">123-456-7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex justify-start bg-backgroundblue p-6 rounded-xl shadow-md gap-2">
            <Icon type = "email-icon" className="w-30 h-30 mt-1 p-2" fill="#307BC4" height="60" width="60" />
            <div>
              <h3 className="text-xl font-extrabold text-darkCustomBlue mt-4 font-lato">Email</h3>
              <p className="text-base text-darkCustomBlue font-lato">hellocallcenter@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex justify-start bg-backgroundblue p-6 rounded-xl shadow-md gap-2">
            <Icon type = "location-icon" className="mt-3"/>
            <div>
              <h3 className="text-xl font-extrabold text-darkCustomBlue mt-4 font-lato">Location</h3>
              <p className="text-base text-darkCustomBlue font-lato">123 Anywhere St, Any City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsHere;

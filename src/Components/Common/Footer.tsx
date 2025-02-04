'use client';
import Link from "next/link";
import Icon from "@/Icons/Icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#265680] text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo, Title, and Copyright Section */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start md:ml-20">
          <div className="flex space-x-3">
            <Icon type="footer-logo-icon" />
            <div className="text-center w-16 md:text-left">
              <h2 className="text-xl font-extrabold font-lato leading-custom-30">WECARE MULTI</h2>
              <h4 className="text-xl font-extrabold font-lato leading-custom-30">SPECIALITY CLINIC</h4>
            </div>
          </div>
          <p className="mt-6 md:mt-10 font-lato text-sm md:text-size-16 text-center md:text-left">
            Copyright &copy; 2022 | All Rights Reserved
          </p>
        </div>

        {/* Quick Links, Contact, Location, Follow Us Section */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:ml-52">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 font-lato">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline font-lato text-base md:text-size-16">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline font-lato text-base md:text-size-16">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:underline font-lato text-base md:text-size-16">
                  Doctors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 font-lato">Contact</h4>
            <ul className="space-y-2">
              <li className="font-lato text-base md:text-size-16">info@wecare.com</li>
              <li className="font-lato text-base md:text-size-16">+91 9874563219</li>
              <li className="font-lato text-base md:text-size-16">+91 8547985425</li>
            </ul>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4 font-lato">Location</h4>
            <p className="font-lato text-base md:text-size-16">
              B-12-393, Santhi nagar, Near Gandhi statue, Buchi reddy palem,
              Nellore District, Andhra Pradesh, 524305.
            </p>
          </div>
          <hr className="md:hidden col-span-full my-6 border-gray-500" />
          {/* Follow Us */}
          <div >
        <h4 className="font-semibold text-lg mb-4 font-lato">Follow us</h4>
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-center font-lato">
              <Icon type="footer-facebook-icon" />
              <span className="ml-3 font-lato text-size-16 font-custom-500 leading-custom-30">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center font-lato">
              <Icon type="footer-twitter-icon" />
              <span className="ml-3 font-lato text-size-16 font-custom-500 leading-custom-30">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center font-lato">
              <Icon type="footer-insta-icon" />
              <span className="ml-3 font-lato text-size-16 font-custom-500 leading-custom-30">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center font-lato">
              <Icon type="footer-youtube-icon" />
              <span className="ml-3 font-lato text-size-16 font-custom-500 leading-custom-30">YouTube</span>
            </a>
          </li>
        </ul>
      </div>
        </div>

        {/* Horizontal line for mobile */}
        {/* <hr className="md:hidden col-span-full my-6 border-gray-500" /> */}

        {/* Services and Specialties Section */}
        <div className="hidden sm:grid md:col-span-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:ml-[29rem]">
  {/* Services */}
  <div className="text-center md:text-left">
    <h4 className="font-semibold text-lg mb-4 font-lato">Services</h4>
    <ul className="space-y-2">
      {['Emergency Care', 'Inpatient Care', 'Surgical Services'].map((service) => (
        <li key={service} className="font-lato text-base md:text-size-16">
          {service}
        </li>
      ))}
    </ul>
  </div>

  {/* Specialties */}
  <div className="text-center md:text-left">
    <h4 className="font-semibold text-lg mb-4 font-lato">Specialties</h4>
    <ul className="space-y-2">
      {['Cardiology', 'Nephrology', 'Orthopedics'].map((specialty) => (
        <li key={specialty} className="font-lato text-base md:text-size-16">
          {specialty}
        </li>
      ))}
    </ul>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
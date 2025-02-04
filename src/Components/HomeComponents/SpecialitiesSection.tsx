import React from 'react';
import Icon from '@/Icons/Icon';

interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const specialties: SpecialtyCardProps[] = [
  { title: 'Cardiology Department', description: "Heart Diagnostics & Advanced Treatments, Navigating Your Heart's Journey Starts Here.", icon: <Icon type="Cardiology" fill="#2F618A" height='71' width='60'/> },
  { title: 'General Physician', description: 'Our General Physicians Focus On Prevention, Diagnosis & Treatment Of Common Illnesses.', icon: <Icon type = "GeneralPhysician" fill="#2F618A" height='71' width='60'/> },
  { title: 'Orthopedics', description: 'From Bones to Joints, We Champion Mobility & Wellness. Personalized Care For A Life In Motion.', icon: <Icon type = "Orthopedics" fill="#2F618A" height='71' width='60'/> },
  { title: 'Neurology', description: 'From Memory to Movement, We Unlock The Mysteries Of The Nervous System. Expert Care For Neurological Health.', icon: <Icon type = "Neurology" fill="#2F618A" height='71' width='60'/> },
  { title: 'Gastroenterology', description: 'Your Guts Vital Matters. Our Gastroenterologists Listen, Diagnose, & Treat With Precision.', icon: <Icon type = 'Gastroenterology' fill="#2F618A" height='71' width='60'/> },
  { title: 'Pediatrics', description: 'Our Pediatricians Offer Compassionate Care For Your Children, Ensuring Healthy Futures.', icon: <Icon type="Pediatrics" fill="#2F618A" height='71' width='60'/>},
  { title: 'Urology', description: 'Optimizing Urinary Health For Men & Women. Provides Comprehensive Urology Care For Optimal Function.', icon: <Icon type="Urology" fill="#2F618A" height='71' width='60'/> },
  { title: 'Psychiatry', description: 'Our Psychiatrists Understand And Treat For Emotional & Behavioral Well-Being.', icon: <Icon type = "Psychiatry" fill="#2F618A" height='71' width='60'/> },
  { title: 'Physiotherapy', description: 'Our Physiotherapists Work With You To Prevent Movement, Manage Pain, & Restore Physical Function.', icon: <Icon type = "Physiotherapy" fill="#2F618A" height='71' width='60'/> },
  { title: 'Nephrology', description: 'Our Nephrologists Are Dedicated To Treating Kidney Health, Providing Advanced Treatments.', icon: <Icon type = "Nephrology" fill="#2F618A" height='71' width='60'/> },
  { title: 'Gynaecology', description: 'Providing A Full Spectrum Of Care For Womens Health. From Reproductive Health To Menopause.', icon: <Icon type= "Gynaecology" fill="#2F618A" height='71' width='60'/>},
  { title: 'ENT', description: 'Our ENT Specialists Provide Comprehensive Care For Your Ears, Nose, Throat & Related Concerns.', icon: <Icon type = "ENT" fill="#2F618A" height='71' width='60'/> },
];

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ title, description, icon }) => (
  <div
    className="shadow-lg mx-2 my-4 border rounded-lg bg-white p-5 flex flex-col justify-between"
    style={{
      width: "100%",
      maxWidth: "310px",
      height: "330px",
      borderRadius: "20px",
      boxShadow: "0px 4px 21px 1px rgba(48, 123, 196, 0.1)",
      border: "1px solid rgba(47, 97, 138, 0.5)",
      opacity: "1",
    }}
  >
    <div>
      <div className="text-4xl mb-6 flex justify-center m-2">
        <div
          className="mb-2 group-hover:filter group-hover:invert group-hover:text-customBlue relative"
          style={{
            width: "72px", 
            height: "72px",
            gap: "0px",
            opacity: "1",
          }}
        >
          {icon}
        </div>
        <h3
          className="text-xl font-semibold text-customBlue font-lato m-3 relative"
          style={{
            width: "auto", 
            gap: "0px",
            opacity: "1",
          }}
        >
          {title}
        </h3>
      </div>
      <p
        className="text-gray-600 font-lato text-base font-normal leading-7 text-left underline-offset-auto decoration-slice relative"
        style={{
          width: "auto",
          height: "auto", 
          gap: "0px",
          opacity: "1",
          textDecorationSkipInk: "none",
        }}
      >
        {description}
      </p>
    </div>
    <div className="flex justify-start">
      <button
        className="text-size-18 font-bold leading-custom-20 font-lato px-5 py-4 bg-white text-customBlue rounded-lg border border-customBlue transition hover:bg-customBlue hover:text-white relative"
        style={{
          width: "100%", // Make it responsive
          maxWidth: "142px", // Set a max width
          height: "50px",
          gap: "0px",
          borderRadius: "8px",
          opacity: "1",
        }}
      >
        Read More
      </button>
    </div>
  </div>
);

const SpecialtiesSection: React.FC = () => (
  <section className="py-16">
    <div className="container bg-white mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold font-lato text-darkCustomBlue">
        Our Specialties
      </h2>

      <p
        className="text-black mt-2 max-w-3xl mx-auto font-lato text-size-20 md:text-base sm:text-sm"
        style={{
          width: "100%", 
          height: "auto", 
          top: "auto", 
          left: "auto", 
          gap: "0px", 
          opacity: "1", 
        }}
      >
        We Offer A Comprehensive Range Of Medical Services To Meet The Diverse Needs Of Our Patients. Our Team Of Skilled Healthcare Professionals Is Dedicated To Providing High-Quality Care With Compassion And Expertise.
      </p>
    </div>

    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">
        {specialties.map((specialty, index) => (
          <SpecialtyCard key={index} {...specialty} />
        ))}
      </div>
    </div>
  </section>
);

export default SpecialtiesSection;

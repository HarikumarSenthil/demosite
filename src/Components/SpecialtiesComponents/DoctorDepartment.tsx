import React from "react";
import DoctorCard from "../GenericComponents/DoctorCard";

const doctors = [
    {
      name: 'Dr. James Lee, MD',
      title: 'Head of Cardiologist',
      description:
        'With expertise in managing complex heart conditions ',
      imageUrl: '/AboutPage/Doctor1.svg',
    },
    {
      name: 'Dr. John Smith, MD',
      title: 'Emergency Medicine Physician',
      description:
        'With expertise in treating acute illnesses and injuries in medicine physician.',
      imageUrl: '/AboutPage/Doctor2.svg',
    },
    {
      name: 'Dr. Susan Bones, MD',
      title: 'Board-certified Pediatrician',
      description:
        'With experience in managing complex medical conditions in children.',
      imageUrl: '/AboutPage/Doctor3.svg',
    },
  ];
  
  interface DoctorDepartmentProps {
    title: string;
  }

const DoctorDepartment : React.FC<DoctorDepartmentProps> = ({title})=>{
    return (
        <>
        <div className = "mt-20">
            <h1 className = "font-lato text-3xl text-darkCustomBlue leading-custom-30 font-extrabold pb-20 ml-9"> Department of  {title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ml-7 mr-7">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              title={doctor.title}
              description={doctor.description}
              imageUrl={doctor.imageUrl}
              variant="viewProfile"
              doctorId=''
            />
          ))}
        </div>
        </div>

        </>
    )
}

export default DoctorDepartment 
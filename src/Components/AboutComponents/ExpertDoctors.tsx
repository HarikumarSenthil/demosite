import React from 'react';
import DoctorCard from '../GenericComponents/DoctorCard';

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

const ExpertDoctors: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-blue font-bold text-lg font-lato mb-7">MEET OUR</h2>
        <h1 className="text-4xl md:text-4xl font-semibold text-darkCustomBlue font-lato mb-10">
          Healthcare Experts Doctor
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              title={doctor.title}
              description={doctor.description}
              imageUrl={doctor.imageUrl}
              variant="socialIcons" 
              doctorId=''
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertDoctors;

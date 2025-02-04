import React from "react";
import Image from "next/image";

const FeaturesSectionEmergency: React.FC = () => {
  return (
    <div className="text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-20 font-poppins bg-benefitsblue leading-custom-30 mt-10">
      <div className="w-[750px]">
      
        <p>
          Emergency care in a hospital involves providing immediate medical attention to patients who are experiencing severe or life-threatening conditions.
          This care is typically delivered in the emergency department (ED), also known as the emergency room (ER). Here’s an overview of the key aspects of emergency care in a hospital:
        </p>
        <ul className="list-disc list-inside mt-4 ml-5">
          <li>Triage: Determines the priority of patients’ treatment based on the severity of their condition.</li>
          <li>Initial Assessment: Includes checking vital signs, medical history, and current symptoms.</li>
          <li>Diagnosis and Stabilization: Conducts diagnostic tests (blood work, X-rays, CT scans, MRI, ultrasound) and stabilizes the patient with medications, fluids, oxygen, or emergency procedures.</li>
          <li>Treatment:Involves medical or surgical interventions, with specialist consultations as needed.</li>
          <li>Observation and Monitoring: Continuously monitors patients and performs reassessments.</li>
          <li>Hospitalization Decisions: Decides whether to admit, discharge, or transfer patients based on their condition.</li>
          <li>Supportive Services: Provides social work, counseling, and pharmacy services.</li>
          <li>Documentation: Maintains detailed medical records for legal and medical purposes.</li>
          <li>ED Personnel: Includes emergency physicians, nurses, technicians, and support staff.</li>
          <li>Common Conditions Treated: Trauma, cardiac emergencies, respiratory distress, neurological issues, acute infections, and severe pain.</li>
          <li>Emergency Preparedness: Establishes protocols, regular training, and equips the ED with advanced medical technology and supplies.</li>
        </ul>
      </div>
      <div className="flex gap-2 ml-24">
        <div className="mr-0 p-0">
        <Image src="/Specialities/EmergencyCare/image (1).svg" alt="Emergency Scene 1" className="p-0 mt-3" width={166} height={166} />
        <Image src="/Specialities/EmergencyCare/image (3).svg" alt="Emergency Scene 3" className="p-0 mt-3" width={166} height={166} />
        <Image src="/Specialities/EmergencyCare/image (4).svg" alt="Emergency Scene 3" className="p-0 mt-3" width={166} height={166} />
        <Image src="/Specialities/EmergencyCare/image (6).svg" alt="Emergency Scene 3" className="p-0 mt-3" width={166} height={166} />
        </div>
        <div className="ml-0 p-0">
        <Image src="/Specialities/EmergencyCare/image (7).svg" alt="Emergency Scene 2" className="p-0 mt-3" width={200} height={250} />
        <Image src="/Specialities/EmergencyCare/image (5).svg" alt="Emergency Scene 4" className="p-0 mt-3" width={200} height={250} />
        <Image src="/Specialities/EmergencyCare/image (8).svg" alt="Emergency Scene 4" className="p-0 mt-3" width={200} height={250} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionEmergency;

'use client'
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";
import HeroBanner from "@/Components/GenericComponents/BannerCard1";
import DoctorDepartment from "@/Components/SpecialtiesComponents/DoctorDepartment";
import FacilitiesSection from "@/Components/SpecialtiesComponents/FacilitiesSection";
import DetailsSection from "@/Components/SpecialtiesComponents/DetailsSection";
import QuestionSection from "@/Components/SpecialtiesComponents/QuestionSection";


const specialties = {
  cardiology: {
    name: "Cardiology",
    title: "Speciality In Cardiology",
    description:
      "Experience excellence in cardiology at Image Hospitals, where our specialized team delivers advanced cardiac care with compassion and expertise. From diagnosis to treatment, trust us to ensure optimal heart health and well-being.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Cardiology",
  },
  "general-physician": {
    name: "General Physician",
    title: "Speciality In General Physician",
    description:
      "Expert general physician services at Image Hospitals, ensuring comprehensive healthcare for all.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "General Physician",
  },
  orthopedics: {
    name: "Orthopedics",
    title: "Speciality In Orthopedics",
    description:
      "Advanced orthopedic care at Image Hospitals, from diagnosis to surgery and rehabilitation.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Orthopedics",
  },
  neurology: {
    name: "Neurology",
    title: "Speciality In Neurology",
    description:
      "Expert neurology care at Image Hospitals, providing diagnosis and treatment for neurological disorders.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Neurology",
  },
  gastroenterology: {
    name: "Gastroenterology",
    title: "Speciality In Gastroenterology",
    description:
      "Comprehensive gastroenterology services at Image Hospitals for digestive health.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Gastroenterology",
  },
  pediatrics: {
    name: "Pediatrics",
    title: "Speciality In Pediatrics",
    description:
      "Trusted pediatric care for children at Image Hospitals, ensuring their well-being and growth.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Pediatrics",
  },
  urology: {
    name: "Urology",
    title: "Speciality In Urology",
    description:
      "Expert urology services at Image Hospitals for kidney, bladder, and urinary tract care.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Urology",
  },
  psychiatry: {
    name: "Psychiatry",
    title: "Speciality In Psychiatry",
    description:
      "Comprehensive mental health care at Image Hospitals, providing expert psychiatric support.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Psychiatry",
  },
  physiotherapy: {
    name: "Physiotherapy",
    title: "Speciality In Physiotherapy",
    description:
      "Personalized physiotherapy treatments at Image Hospitals to restore mobility and strength.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Physiotherapy",
  },
  nephrology: {
    name: "Nephrology",
    title: "Speciality In Nephrology",
    description:
      "Expert nephrology care at Image Hospitals for kidney-related conditions and treatments.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Nephrology",
  },
  gynaecology: {
    name: "Gynaecology",
    title: "Speciality In Gynaecology",
    description:
      "Comprehensive gynaecology services at Image Hospitals for women's reproductive health.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "Gynaecology",
  },
  ent: {
    name: "ENT",
    title: "Speciality In ENT",
    description:
      "Expert ENT services at Image Hospitals for ear, nose, and throat conditions.",
    imageUrl: "/LookingFor/banner_img.png.svg",
    altText: "ENT",
  },
};
export default function SpecialtyPage() {
  const params = useParams();
  const router = useRouter();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    if (params?.slug) {
      setSlug(params.slug as string);
    } else {
      router.push("/404"); // Redirect if slug is missing
    }
  }, [params, router]);

  if (!slug || !specialties[slug as keyof typeof specialties]) return null;

  const specialty = specialties[slug as keyof typeof specialties];

  return (
    <div>
      <HeroBanner
        imageUrl={specialty.imageUrl}
        altText={specialty.altText}
        title={specialty.title}
        description={specialty.description}
      />
      <div className="m-8">
       <DoctorDepartment title={specialty.name} />
      <FacilitiesSection  />
      <DetailsSection title= {specialty.name} />
      <QuestionSection />
      </div>
    </div>
  );
}


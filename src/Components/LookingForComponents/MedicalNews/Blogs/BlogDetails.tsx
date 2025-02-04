import React from "react";
import Link from "next/link";
import ServiceSection from "@/Components/GenericComponents/ServiceCard";


const services= [
    {
      title: "Dental treatments",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
      link: "#",
      img: "/HomeServiceSection/DentalTreatments.svg",
    },
    {
      title: "Bones treatments",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
      link: "#",
      img: "/HomeServiceSection/BonesTreaments.svg",
    },
    {
      title: "Diagnosis",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
      link: "#",
      img: "/HomeServiceSection/Diagnosis.svg",
    },
]


const BlogDetails : React.FC = ()=>{
    return (
       <>
       <Link href = "/LookingFor/news/blogs/Eachblog">
       <ServiceSection
          services={services}
          title="Our Services"
        description="At Image Hospitals, we offer personalized healthcare services, from routine check-ups to specialized treatments. With our expert team and state-of-the-art facilities, your well-being is our priority."
          actionIcon = "latest"/>
       </Link>
       </>
      
    )
} 

export default BlogDetails
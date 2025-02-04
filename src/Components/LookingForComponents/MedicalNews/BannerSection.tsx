"use client"
import React from "react";
import HeroBanner from "@/Components/GenericComponents/BannerCard1";



const MedicalNewsBannerSection : React.FC =()=>{
    return (
      <>
      <HeroBanner
      imageUrl="/LookingFor/MedicalNews/MedicalNews.svg"
      altText="Medical Articles & News"
      title="Medical Articles & News"
      description="Emergency care at Image Hospital provides immediate and comprehensive medical attention for acute illnesses and injuries, ensuring 24/7 availability with a team of skilled professionals and advanced facilities." />
      </>
    )
}

export default MedicalNewsBannerSection

'use client'
import React from "react"
import HeroBanner from "@/Components/GenericComponents/BannerCard1"


const MedicalArticlesBannerSection : React.FC = ()=>{
return (
<>
<HeroBanner
imageUrl="/LookingFor/MedicalArticles/BannerWelcomeImg.svg"
altText="Medical Articles"
title="Medical Articles"
description="Emergency care at Image Hospital provides immediate and comprehensive medical attention for acute illnesses and injuries, ensuring 24/7 availability with a team of skilled professionals and advanced facilities." />
</>
)
}

export default MedicalArticlesBannerSection
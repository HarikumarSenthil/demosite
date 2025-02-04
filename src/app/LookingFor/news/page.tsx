import React from "react";

import MedicalNewsBannerSection from "@/Components/LookingForComponents/MedicalNews/BannerSection";
import MedicalNewsServiceSection from "@/Components/LookingForComponents/MedicalNews/NewsServiceSection";
import MedicalNewsArticles from "@/Components/LookingForComponents/MedicalNews/MedicalArticles"

export default function News(){

    return (
        <>

        <MedicalNewsBannerSection/>
        <MedicalNewsServiceSection/>
        <MedicalNewsArticles/>
 
        </>
    )
}
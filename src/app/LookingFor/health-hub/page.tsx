
import React from "react";

import HealthCareBannerSection from "@/Components/LookingForComponents/HealthClub/BannerSection";
import HealthLibrary from "@/Components/LookingForComponents/HealthClub/HealthLibrary";
import MedicalTerms from "@/Components/LookingForComponents/HealthClub/MedicalTerms";
import HealthBannerSection from "@/Components/LookingForComponents/Events/HealthBannerSection";
export default function Healthclub(){
    return (
        <>
        <HealthCareBannerSection/>
        <div className="m-8">
        <HealthBannerSection/>
        <HealthLibrary/>
        <MedicalTerms/>
        </div>
        </>
    )
}
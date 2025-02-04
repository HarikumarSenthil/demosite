import React from "react";
import HealthBannerSection from "@/Components/LookingForComponents/Events/HealthBannerSection";
import EventBannerSection from "@/Components/LookingForComponents/Events/EventBannerSection";
import SeminarsAndWorkshops from "@/Components/LookingForComponents/Events/SeminarAndWorkshops";
import CommunityServices from "@/Components/LookingForComponents/Events/EventServiceSection";
export default function EventsPage(){
    return (
        <>
  
        <EventBannerSection/>
        <div className="m-8">
        <HealthBannerSection/>
        <SeminarsAndWorkshops/>
        <CommunityServices/>
        </div>
 
        </>
    )
}

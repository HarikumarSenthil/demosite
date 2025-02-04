import React from "react";
import HeroBanner from "../../GenericComponents/BannerCard1";

const EmergencyBannerSection : React.FC = ()=>{
    return (
        <>
        <HeroBanner
            imageUrl="/Specialities/EmergencyCare/Daco_4756235 1.svg"
            altText="Emergency care"
            title="Emergency care"
            description="Emergency care at Image Hospital provides immediate and comprehensive medical attention for acute illnesses and injuries, ensuring 24/7 availability with a team of skilled professionals and advanced facilities."
         />
        </>
    )
}


export default EmergencyBannerSection
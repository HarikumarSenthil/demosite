import React from "react";
import HeroBanner from "../GenericComponents/BannerCard1";


const SpecialtiesHeroSection : React.FC = ()=>{
    return (
        <>
        <HeroBanner
         imageUrl="/LookingFor/banner_img.png.svg"
         altText="Nurse"
         title="Speciality In Cardiology"
         description="Experience excellence in cardiology at Image Hospitals, where our specialized team delivers advanced cardiac care with compassion and expertise. From diagnosis to treatment, trust us to ensure optimal heart health and well-being."
        />
        </>
    )
}


export default SpecialtiesHeroSection
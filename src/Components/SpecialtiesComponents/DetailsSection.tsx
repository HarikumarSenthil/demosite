import React from "react";

interface DetailsSection{
    title:string
}

const DetailsSection :React.FC<DetailsSection> = ({title})=>{
    return (
        <>
      <div className="m-8" >
        <div className = "mt-5">

            <h1 className="text-3xl text-darkCustomBlue font-extrabold font-inter"> {title}</h1>
            <p className = "font-lato text-hashBlack leading-custom-30 mt-5"> At Image Hospitals, our Interventional Cardiology unit specializes in minimally invasive procedures to diagnose and treat heart conditions with precision and efficiency. Led by experienced interventional cardiologists, our team offers advanced interventions such as angioplasty, stenting, and catheter-based treatments to restore heart function and improve patient outcomes. Trust us to provide personalized care and innovative solutions for your cardiac needs.</p>
        </div>
        <div className = "mt-5"> 
            <h1 className="text-3xl text-darkCustomBlue font-extrabold font-inter" > Interventional {title}</h1>
            <p className = "font-lato text-hashBlack leading-custom-30 mt-5"> Interventional {title} involves performing minimally invasive procedures to diagnose and treat heart conditions using catheter-based techniques. These procedures include angioplasty, stenting, and transcatheter valve replacement, led by experienced {title}s to restore heart function and improve patient outcomes.</p>
            <p className = "font-lato text-hashBlack leading-custom-30 mt-5"> At Image Hospitals, our Interventional {title} unit specializes in minimally invasive procedures like angioplasty and transcatheter valve replacement. Led by experienced {title}s, we provide innovative solutions for heart conditions, ensuring personalized care and improved patient outcomes.</p>

        </div>
        </div>
     
        
        </>
    )
}

export default DetailsSection
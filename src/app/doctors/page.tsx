'use client'

import React from "react";

import HeroDoctors from "@/Components/DoctorsComponents/DoctorHeroSection";
import DoctorProfile from "@/Components/DoctorsComponents/DoctorProfile";
import FeedbackSection from "@/Components/DoctorsComponents/FeedbackSection";
export default function specificdocotorpage (){
    return (
        <>
        <HeroDoctors/>
        <div className="m-5">
        <DoctorProfile/>
        <FeedbackSection/>
        </div>
        </>
    )
}
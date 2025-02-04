'use client'

import '../../app/globals.css';
import React from "react";

import HeroAboutUs from '@/Components/AboutComponents/HeroSection';
import MissionVision from '@/Components/AboutComponents/MissionVision';
import BenefitsBanner from '@/Components/Common/BenefitsBanner';
import ExpertDoctors from '@/Components/AboutComponents/ExpertDoctors';
import Accreditations from '@/Components/AboutComponents/Accreditations';
import SubscribeSection from '@/Components/Common/SubscribeSection';
export default function AboutPage() {
  return (
    <>

    <HeroAboutUs/>
    <MissionVision/>
    <BenefitsBanner/>
    <ExpertDoctors/>
    <Accreditations/>
    <SubscribeSection/>

    </>
  );
}
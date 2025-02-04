'use client'

import '../../app/globals.css';
import React from "react";

import HeroContactUs from '@/Components/ContactComponents/HeroSection';
import ContactForm from '@/Components/ContactComponents/ContactFormSection';
import FindUsHere from '@/Components/ContactComponents/ContactSection';
import BenefitsBanner from '@/Components/Common/BenefitsBanner';
export default function ContactPage() {
  return (
    <>

    <HeroContactUs/>
    <ContactForm/>
    <FindUsHere/>
    <BenefitsBanner/>

    
    </>
  );
}
'use client'
import HeroSection from "@/Components/HomeComponents/HeroSection";
import HomeAboutSection from "@/Components/HomeComponents/AboutSection";
import SpecialtiesSection from "@/Components/HomeComponents/SpecialitiesSection";
import ServicesSection from "@/Components/HomeComponents/ServiceSection";
import FeedBack from "@/Components/HomeComponents/CoursalSection";
import SubscribeSection from "@/Components/Common/SubscribeSection";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeAboutSection/>
      <SpecialtiesSection/>
      <ServicesSection/>
      <FeedBack/>
      <SubscribeSection/>
    </div>
  );
}

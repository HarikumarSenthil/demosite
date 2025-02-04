import React from "react";
import HeroBanner from "@/Components/GenericComponents/BannerCard1";




const BlogsHeroSection :React.FC  = ()=>{
    return (
       <>
       <HeroBanner
       imageUrl="/LookingFor/MedicalNews/Blogs/blogsHeroBanner.svg"
       altText="Our Blogs"
       title="Our Blogs"
       description="Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence." />
       </>
    )
}
export default BlogsHeroSection
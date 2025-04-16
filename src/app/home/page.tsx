import AnimatedTestimonialSection from "@/screen/common/animatedTestimonials/page";
import AppleCardsCarousel from "@/screen/common/AppleCardsCarousel/page";
import { BentoGridThird } from "@/screen/common/BentoGridThird/page";
import { CardSection } from "@/screen/common/Card/page";
import React from "react";

function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
        <div className="md:col-span-12 p-6 rounded shadow">
          <AppleCardsCarousel />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
        <div className="md:col-span-12 p-6 rounded shadow">
          <BentoGridThird />
        </div>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
        <div className="md:col-span-8 p-6 rounded shadow">
          <AnimatedTestimonialSection />
        </div>
        <div className="md:col-span-4 p-6 rounded shadow"><CardSection/></div>
      </div>
    </>
  );
}

export default HomePage;

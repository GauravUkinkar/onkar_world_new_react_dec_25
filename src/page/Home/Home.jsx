import React from "react";
import Herosection from "../../comp/herosection/Herosection";
import Services from "../../comp/services/Services";
import WhyChoose from "../../comp/whychoose/WhyChoose";
import Faq from "../../comp/faq/Faq";
import Testimonial from "../../comp/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Herosection />
      <Services />
      <WhyChoose />
      <Faq />
      <Testimonial />
    </>
  );
};

export default Home;

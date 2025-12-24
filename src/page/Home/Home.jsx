import React from "react";
import Herosection from "../../comp/herosection/Herosection";
import Services from "../../comp/services/Services";
import WhyChoose from "../../comp/whychoose/WhyChoose";
import Faq from "../../comp/faq/Faq";
import Testimonial from "../../comp/testimonial/Testimonial";
import Header from "../../comp/Header/Header";

const Home = () => {
  return (
    <>
      <Herosection />
      <Header />
      <Services />
      <WhyChoose />
      <Faq />
      <Testimonial />
    </>
  );
};

export default Home;

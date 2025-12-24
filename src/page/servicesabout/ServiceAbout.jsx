import React from "react";
import "./ServiceAbout.scss";
import img1 from "../../../public/assets/about/rawmaterial.webp";
import img22 from "../../../public/assets/services/img22.jpg";
import img3 from "../../../public/assets/services/niche.webp";
import TwoCol from "../../comp/twocol/TwoCol";
const ServiceAbout = () => {
   
  const data = [
    {
      title: "Reliable Procurement of Quality Raw Materials ",
      content:
        "At Onkar World, we take pride in sourcing the highest quality raw materials from trusted suppliers. With a strong focus on quality control, we ensure that every product we deliver meets international standards, providing our clients with the best resources available. Deeply connected to the agriculture industry and community, we produce our own goods, giving us expert knowledge of the products we trade. This hands-on experience allows us to excel in the global agricultural landscape.",
      img: img1,
    },
    {
      title: "Bulk Availability and Consistent Supply Across India and Africa",
      content:
        "Onkar World maintains a bulk stock and ensures the availability of raw and processed goods from India and Africa to meet the demands of a global market. Our extensive supply network allows us to fulfill large orders efficiently, making us a reliable partner for businesses worldwide. We prioritise consistency, ensuring that our clients never experience shortages or delays in their supply.",
      img: img22,
    },
    {
      title: "Niche Products in Unmatched Quality ",
      content:
        "We specialise in premium fresh produce, spices, grains, and select agricultural products. Our offerings include the finest varieties of fruits and vegetables, flavorful spices that enhance meals globally, and ayurvedic herbs. We also provide superfoods like millets and other organic, regional varieties packed with essential nutrients. By prioritising quality and sustainability, we ensure our products contribute to a healthier world, nourishing both people and the planet.",
      img: img3,
    },
  ];
  return (
    <>
      <div className="service-parent-main">
        <div className="service-container-main">
          {data.map((item, index) => {
            return (
              <TwoCol
                key={index}
                title={item.title}
                content={item.content}
                background={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceAbout;

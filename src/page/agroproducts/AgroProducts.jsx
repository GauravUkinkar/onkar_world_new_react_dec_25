import React from "react";
import "./AgroProducts.scss";
import img1 from "../../assets/servicep/sugars.jpg";
import img3 from "../../../public/assets/servicep/pulses2.webp";
import millets from "../../../public/assets/products/Millets/millets.webp";
import img2 from "./../../../public/assets/servicep/Jaggery.webp";
import superfood from "../../../public/assets/products/superfood/superfood.webp";
import rice from "../../../public/assets/products/rice/rice.jpg";

import spices from "../../../public/assets/products/spices/Spices.webp";
import Herbss from "../../../public/assets/products/Herbs/herbs.webp";
import fruitveg from "../../../public/assets/products/fruitsandvegetable/fruitsvegetable.webp";
import TwoCol from "../../comp/twocol/TwoCol";

import {
  jaggerytype,
  millettype,
  pulsetype,
  ricetype,
  sugartype,
  superfoodtype,
  spicesauthentic,
  ayurvedicherbs,
  fruits,
} from "../../static/ProductType";

const AgroProducts = () => {
  const data = [
    {
      title: "Sugar ",
      content:
        "Our sugar trading services focus on sourcing and delivering the finest sugar from reputable producers. We rigorously ensure that our sugar meets international quality standards, making it a preferred choice for clients across the globe. By maintaining strong relationships with trusted suppliers, we guarantee the consistent quality and timely delivery of sugar to meet the diverse needs of our international clientele.",
      img: img1,
      type: sugartype,
    },
    {
      title: "Jaggery ",
      content:
        "We trade premium jaggery, renowned for its rich taste, natural sweetness, and nutritional benefits. Our jaggery is sourced from trusted suppliers who adhere to traditional production methods, preserving its authentic quality. This commitment to quality ensures that our jaggery meets the demands of diverse markets, offering a healthy, chemical-free alternative to refined sugars for a wide range of culinary applications.",
      img: img2,
      type: jaggerytype,
    },
    {
      title: "Pulses  ",
      content:
        "Onkar World provides a variety of high-grade pulses that cater to the growing global demand. We collaborate closely with experienced producers to offer a broad selection of pulses, including lentils, chickpeas, and beans. By prioritising quality and freshness, we ensure that our pulses meet the highest standards while maintaining competitive pricing, making them a staple in kitchens worldwide.",
      img: img3,
      type: pulsetype,
    },
    {
      title: "Millets",
      content:
        "We provide a variety of premium millets, known for their health benefits and adaptability in cooking. Sourced from reliable producers, our millets meet the demands of global markets seeking wholesome, nutrient-rich grains.",
      img: millets,
      type: millettype,
    },
    {
      title: "Rice",
      content:
        "Onkar World specialises in trading top-grade rice varieties, including basmati and non-basmati. We ensure that our rice is sourced from the best fields, offering superior taste and quality to satisfy international palates.",
      img: rice,
      type: ricetype,
    },
    {
      title: "Superfoods from India",
      content:
        "Our collection of Indian superfoods includes nutrient-dense options like turmeric, moringa, and amla. We source these superfoods from reputable growers, delivering authentic products that promote health and wellness globally.",
      img: superfood,
      type: superfoodtype,
    },

    {
      title: "Spices – Authentic Flavours from India",
      content:
        "Onkar World specialises in trading premium traditional Indian spices, celebrated for their rich flavors and medicinal benefits. Our spice offerings enhance culinary experiences while promoting health and well-being.",
      img: spices, // chane-img
      type: spicesauthentic,
    },

    // change-img
    {
      title: "Ayurvedic Herbs – Nature’s Healing Touch",
      content:
        "At Onkar World, we take pride in offering a curated selection of Ayurvedic herbs, revered for centuries for their powerful therapeutic properties, natural healing abilities, and role in promoting overall wellness and balance.",
      img: Herbss, // change-img
      type: ayurvedicherbs,
    },

    // change-img
    {
      title: "Fruits and Vegetables – Freshness Rooted in Strong Connections",
      content:
        "At Onkar World, our commitment to freshness comes from cultivating strong, lasting relationships with local farmers. This ensures that every fruit and vegetable we deliver is grown with care, reaching global markets at its peak quality.",
      img: fruitveg, // change-img
      type: fruits,
      // type: vegitables,
    },

    //     {
    //       title: "Our Vegetable Offerings Include",
    //  type: fruits,
    //     },
  ];
  return (
    <>
      <div className="service-parent-page">
        <div className="service-container container">
          <div className="service-heading-section">
            <h3 className="section-title title2">
              Agro-commodities <div className="gap"></div>
              <span>Trading Globally</span>{" "}
              <span className="scection-line"></span>
              <span className="underline"></span>
            </h3>
            <p className="service-p desc">
              At Onkar World, we specialise in the global trading of
              high-quality agro-commodities. Our extensive network and deep
              understanding of international markets allow us to deliver the
              best produce from India and Africa to clients across the globe.
              Our commitment to quality, efficiency, and sustainability sets us
              apart in the industry.
            </p>
          </div>
        </div>
        <div className="service-container-main">
          {data.map((item, index) => {
            return (
              <TwoCol
                key={index}
                title={item.title}
                content={item.content}
                background={item.img}
                type={item.type}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AgroProducts;

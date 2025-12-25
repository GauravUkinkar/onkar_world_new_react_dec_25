import React, { useEffect, useRef } from "react";
import "./Experties.scss"
import gsap from "gsap";
import img4 from "../../../public/assets/Icon/1NewRawMaterialGreen.gif";
import img5 from "../../../public/assets/Icon/2NewBulkavailabilityGreen.gif";
import img7 from "../../../public/assets/Icon/3NewunmatchqualityGreen.gif";
import gif1 from "../../../public/assets/about/experties/1Raw_material.gif";
import gif2 from "../../../public/assets/about/experties/2Bulk_availability.gif";
import gif3 from "../../../public/assets/about/experties/3unmatch_quality.gif";
import ExpertiesComponent from "../expertice/Expertiescomponent"

const cardData = [
  {
    img: gif1,
    img_hover: img4,

    cardHeading: "Reliable Procurement of Quality Raw Materials",
    cardText:
      "We source the finest raw materials from trusted suppliers, ensuring each product meets the highest quality standards.",
  },
  {
    img: gif2,
    img_hover: img5,
    cardHeading: "Bulk Availability and Consistent Supply",
    cardText:
      "Onkar World offers bulk stock and reliable availability of raw and processed goods from India and Africa. ",
  },
  {
    img: gif3,
    img_hover: img7,
    cardHeading: "Niche Products in Unmatched Quality",
    cardText:
      "We specialise in premium fresh produce, spices, grains, and other select agricultural products.",
  },
];

const Experties = () => {
  const cardsRef = useRef([]); 
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate each card with staggered effect
          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", stagger: 0.3 }
          );

          // Unobserve once animated
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="experties-parent parent" ref={sectionRef}>
        <div className="experties-container container">
          <h3 className="section-title title2">
            Onkar World <div className="gap"></div>
            <span>Expertise</span> <span className="scection-line"></span>
            <span className="underline"></span>
          </h3>

          <div className="experties-box">
            {cardData.map((data, key) => (
              <div
                key={key}
                ref={(el) => (cardsRef.current[key] = el)} // Reference each card
              >
                <ExpertiesComponent
                  index={key}
                  img={data.img}
                  img_hover={data.img_hover}
                  cardHeading={data.cardHeading}
                  cardText={data.cardText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;

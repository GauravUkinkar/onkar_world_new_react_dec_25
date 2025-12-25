import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./TwoCol.scss";
import { Link } from "react-router-dom";
import ProductCardSection from "../product-card-section/ProductCardSection";
const TwoCol = ({title, content, background,type, direction}) => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // To track if animation has already run

  useEffect(() => {
    const section = sectionRef.current;
    const animateSection = () => {
      gsap.fromTo(
        ".service-left",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
      );
      gsap.fromTo(
        ".service-right",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
      );
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateSection();
          hasAnimated.current = true; // Mark animation as done
          observer.disconnect(); // Disconnect observer after animation
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);

      // Check if already in view on initial load
      const rect = section.getBoundingClientRect();
      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        !hasAnimated.current
      ) {
        animateSection();
        hasAnimated.current = true; // Mark animation as done
        observer.disconnect(); // Disconnect observer after animation
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="service-parent1 parent" ref={sectionRef}>
        <div
          className="container service-container"
          style={{ flexDirection: `${direction}` }}
        >
          <div className="service-left">
            <div
              className="service-img bg-cover"
              style={{ background: `url(${background})` }}
            ></div>
          </div>
          <div className="service-right">
            <div className="content">
              <h3 className="title3 service-title">{title}</h3>
              <p style={{ textAlign: "justify" }}>{content}</p>
            </div>
            <Link
              to="/contact"
              className="cta-btn hand-light button hand-light"
            >
              <p className="hand-light">Get a Quote</p>
            </Link>
          </div>
        </div>
        <ProductCardSection type={type} title={title} />
      </div>
    </>
  );
};

export default TwoCol;

import React, { useState, useEffect, useRef } from "react";

import { gsap } from "gsap";
import "./ProductCard.scss";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";

const ProductCard = ({title, description, image}) => {
  const [toggle, setToggle] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const rightCardRef = useRef(null);

  useEffect(() => {
    // This useEffect only runs on the client side
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    // Set initial screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (toggle && rightCardRef.current) {
      const fromProps = isSmallScreen
        ? { y: -100, opacity: 0 }
        : { x: -100, opacity: 0 };
      const toProps = isSmallScreen
        ? { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        : { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" };
      gsap.fromTo(rightCardRef.current, fromProps, toProps);
    }
  }, [toggle, isSmallScreen]);

  return (
    <div>
      <div className="product-card-parent">
        <div
          className="product-card-left bg-cover"
          style={{ background: `url(${image && image})` }}
        >
          <div className="product-overlay"></div>
          <h2 className="product-title title3 hand-light">
            {title}
            {!toggle && (
              <span className="hand-light" onClick={() => setToggle(true)}>
                {isSmallScreen ? (
                  <MdKeyboardArrowDown className="hand-light" />
                ) : (
                  <MdKeyboardArrowRight className="hand-light" />
                )}
              </span>
            )}
          </h2>
        </div>
        {toggle && (
          <div className="product-card-right" ref={rightCardRef}>
            <span className="product-paragraph">{description}</span>
            <span
              className="close-product hand-light"
              onClick={() => setToggle(false)}
            >
              {isSmallScreen ? (
                <MdKeyboardArrowUp className="hand-light" />
              ) : (
                <MdKeyboardArrowLeft className="hand-light" />
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

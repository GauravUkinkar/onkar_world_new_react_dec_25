import React, { useEffect, useRef } from 'react'
import "./Herosection.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { MdArrowForward } from "react-icons/md";
import slider1 from "../../assets/slider.webp";
import slider2 from "../../assets/s222.jpg";
import slider3 from "../../assets/slide3.webp";
import logo3 from "../../assets/logo/logo2.png"
const Herosection = () => {
      const slideRefs = useRef([]);

  useEffect(() => {
    const handleSlideChange = (swiper) => {
      slideRefs.current.forEach((slide, index) => {
        if (index === swiper.activeIndex) {
          slide.classList.add("fade-in");
        } else {
          slide.classList.remove("fade-in");
        }
      });
    };

    const swiperContainer = document.querySelector(".mySwiper").swiper;
    swiperContainer.on("slideChange", () => handleSlideChange(swiperContainer));
    handleSlideChange(swiperContainer); // Trigger animation on initial load
    return () => {
      swiperContainer.off("slideChange", () =>
        handleSlideChange(swiperContainer)
      );
    };
  }, []);

  const slides = [
    {
      title: "Delivering Nature's Best, ",
      highlight: "Worldwide",
      titlelast: "",
      link: "/agroproducts",
      image: slider1,
    },
    {
      title: "Connecting",
      highlight: " Continents, ",
      titlelast: "Cultivating Commerce",
      link: "/generaltrading",
      image: slider2,
    },

      
    {
      title: "Trading ",
      highlight: "Quality",
      titlelast: " with Every Quantity Globally ",
      link: "/generaltrading",
      image: slider3,
    },
  ];
  return (
    <>
          <div className="homeslider-parent">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}  
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            className="bg-cover"
            key={index}
            style={{
              background: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="carousel-overlay"></div>
            <div
              className="slide-content-box"
              ref={(el) => (slideRefs.current[index] = el)}
            >
              <h1 className="title">
                {slide.title}
                <span>{slide.highlight}</span>
                {slide.titlelast}
              </h1>
              <Link className="cta-btn hand-light" href={slide.link}>
                <p className="hand-light">
                  Know More
                  <span>
                    <MdArrowForward />
                  </span>
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <div className="company-logo-box">
          <img src={logo3} alt="Company Logo" className="logo-img" />
        </div>
      </Swiper>
    </div>
    </>
  )
}

export default Herosection

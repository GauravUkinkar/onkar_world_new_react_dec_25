import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./getintouch.scss";
import { TbPhoneCall } from "react-icons/tb";
import { GoMail } from "react-icons/go";

const GetInTouch = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate section title
          gsap.fromTo(
            ".title2",
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );

          // Animate paragraph
          gsap.fromTo(
            "p",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
          );

          // Animate contact info
          gsap.fromTo(
            ".contact-info",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              stagger: 0.3,
              delay: 1,
            }
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
      <div className="parent get-in-touch-section-parent">
        <div className="container get-in-touch-section-cont">
          <div className="left">
            <h3 className="title2" style={{ color: "white" }} ref={sectionRef}>
              Get in Touch
              <span className="underline"></span>
            </h3>
            <p style={{ color: "white" }}>
              Have a question, need assistance, or want to explore a potential
              partnership? We are here to help. Contact our dedicated team for
              expert guidance and support.
            </p>
          </div>
          <div className="right">
            <div className="contact-info">
              <div className="contact">
                <div className="icon-box">
                  <TbPhoneCall />
                </div>
                <div className="text-box">
                  <h3 style={{ color: "var(--accent2)" }}>Call us on</h3>
                  <p style={{ color: "white" }}>
                    <a
                      href="tel:222-121-4562"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      +971 50 806 0418
                    </a>
                  </p>
                </div>
              </div>

              <div className="email">
                <div className="icon-box">
                  <GoMail />
                </div>
                <div className="text-box">
                  <h3 style={{ color: "var(--accent2)" }}>Email us</h3>
                  <span style={{ color: "white" }}>
                    <a
                      href="mailto:onkarworld.com"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      info@onkarworld.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;

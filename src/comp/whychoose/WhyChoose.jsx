import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./WhyChoose.scss";
const WhyChoose = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate title
          gsap.fromTo(
            ".title2",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );

          // Animate paragraph
          gsap.fromTo(
            ".left p",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
          );

          // Animate counter boxes
          gsap.fromTo(
            ".counter-box .box",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              stagger: 0.3,
              delay: 1,
            }
          );

          // Animate cards
          gsap.fromTo(
            ".card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              stagger: 0.3,
              delay: 1.5,
            }
          );

          // const counters = gsap.utils.toArray(".number");
          const counters = gsap.utils.toArray(".number");
          counters.forEach((counter) => {
            const updateCounter = (value) => {
              // Update counter with the conditional "+" symbol
              if (
                parseInt(counter.dataset.value) === 10 ||
                parseInt(counter.dataset.value) === 500 ||
                parseInt(counter.dataset.value) === 1000
              ) {
                counter.innerHTML = value + " +";
              } else {
                counter.innerHTML = value;
              }
            };

            gsap.fromTo(
              counter,
              { innerHTML: 0 },
              {
                innerHTML: parseInt(counter.dataset.value),
                duration: 4,
                ease: "power1.out",
                onUpdate: function () {
                  let value = Math.floor(this.targets()[0].innerHTML);
                  updateCounter(value);
                },
                onComplete: function () {
                  // Ensure the final value is correctly set with or without "+"
                  if (
                    parseInt(counter.dataset.value) === 10 ||
                    parseInt(counter.dataset.value) === 500 ||
                    parseInt(counter.dataset.value) === 1000
                  ) {
                    counter.innerHTML = parseInt(counter.dataset.value) + " +";
                  } else {
                    counter.innerHTML = parseInt(counter.dataset.value);
                  }
                },
              }
            );
          });

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
      <div className="parent home-parent bg-cover" ref={sectionRef}>
        <div className="container home-cont">
          <div className="choose-us">
            <h2 className="title2">
              Why Choose <div className="gap"></div>
              <span> us?</span>
              <span className="underline"></span>
            </h2>
          </div>
          <div className="left-right-container">
            <div className="left">
              <p style={{ color: "var(--white)" }}>
                Global trade is a multifaceted landscape, filled with challenges
                and uncertainties that can overwhelm even the most seasoned
                businesses. Navigating regulations, managing logistics, and
                ensuring compliance across borders are just a few of the
                complexities that companies face. Onkar World Trading Company
                provides a comprehensive solution designed to simplify and
                streamline these intricate processes. By offering expert
                guidance, tailored strategies, and reliable support, Onkar World
                ensures that businesses can confidently expand their reach and
                succeed in the global marketplace.
              </p>
            </div>
            <div className="right">
              <div className="counter-box">
                <div className="box ">
                  <div className="icon1 g-icon bg-contain">
                    {/* <RxGlobe/>        */}
                  </div>
                  <div className="text">
                    <div
                      className="number"
                      style={{ color: "var(--accent2)" }}
                      data-value="10"
                    >
                      10
                    </div>
                    <div className="content cont1">Countries Served</div>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <div className="icon2 indusry-icon2 bg-contain"></div>
                  </div>
                  <div className="text">
                    <div
                      className="number"
                      style={{ color: "var(--accent2)" }}
                      data-value="500"
                    >
                      500
                    </div>
                    <div className="content">Successful Projects</div>
                  </div>
                </div>
                <div className="box">
                  <div className="icon smile">
                    <div className="icon1 indusry-icon3 bg-contain"></div>
                  </div>
                  <div className="text">
                    <div
                      className="number"
                      style={{ color: "var(--accent2)" }}
                      data-value="1000 "
                    >
                      1000
                    </div>
                    <div className="content">Satisfied Clients</div>
                  </div>
                </div>
                <div className="box">
                  <div className="icon1 indusry-icon4 bg-contain">
                    {/* <GoProjectRoadmap /> */}
                  </div>
                  <div className="text">
                    <div
                      className="number"
                      style={{ color: "var(--accent2)" }}
                      data-value="25"
                    >
                      25
                    </div>
                    <div className="content">Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parent cards-parent">
        <div className="container cards-cont">
          <div className="card1 card">
            <div className="icon-box">
              <span className="agriexpert bg-cover"></span>
            </div>
            <div className="text-box">
              <h3 className="title3">Decades of Agricultural Expertise</h3>
              <p>
                With deep roots in the agricultural industry, we bring decades
                of experience to every product.
              </p>
            </div>
          </div>
          <div className="card2 card">
            <div className="icon-box">
              <span className="quality bg-cover"></span>
            </div>
            <div className="text-box">
              <h3 className="title3">Quality with Quantity </h3>
              <p>
                We maintain the perfect balance of top-notch quality while
                meeting high volume demands.
              </p>
            </div>
          </div>
          <div className="card3 card cursor-dark">
            <div className="icon-box cursor-dark">
              <span className="cursor-dark self-producing bg-cover" />
            </div>
            <div className="text-box cursor-dark">
              <h3 className="title3 cursor-dark">Self-Producing and Trading</h3>
              <p className="cursor-dark">
                From production to trade, we handle every step ourselves,
                ensuring complete control over quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;

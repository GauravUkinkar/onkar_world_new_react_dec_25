import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./Services.scss";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate section title
          gsap.fromTo(
            ".section-title",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );

          // Animate description
          gsap.fromTo(
            ".desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
          );

          // Animate service cards
          gsap.fromTo(
            ".service-card",
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
      <div className="service-parent parent" id="services" ref={sectionRef}>
        <div className="service-container cont">
          <div className="service-headding-section">
            <h3 className="section-title title2">
              Onkar World <div className="gap"></div>
              <span>Services</span> <span className="underline"></span>
            </h3>
            <p className="service-p desc">
              Onkar World offers quality raw materials with the largest stock
              across Asia and Africa, ensuring reliable bulk procurement to meet
              your needs.
            </p>
          </div>
          <div className="service-card-box">
            {/* card 1 */}
            <div className="service-card">
              <div className="card-img card-img1 bg-cover"></div>
              <div className="card-bottom">
                <div className="card-overlay"></div>
                <div className="card-icon-box">
                  <div className="card-icon icon1"></div>
                </div>

                <div className="card-content">
                  <h3 className="card-headding title3">
                    Reliable Procurement of Quality Raw Materials
                  </h3>
                  <p className="card-p">
                    We source the finest raw materials from trusted suppliers.
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="service-card">
              <div className="card-img card-img2 bg-cover"></div>
              <div className="card-bottom">
                <div className="card-overlay"></div>
                <div className="card-icon-box">
                  <div className="card-icon icon2"></div>
                </div>

                <div className="card-content">
                  <h3 className="card-headding title3">
                    Bulk Availability and Consistent Supply
                  </h3>
                  <p className="card-p">
                    Reliable bulk stock and timely supply from India and Africa.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="service-card">
              <div className="card-img card-img3 bg-cover"></div>
              <div className="card-bottom">
                <div className="card-overlay"></div>
                <div className="card-icon-box">
                  <div className="card-icon icon3"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-headding title3">
                    Niche Products in Unmatched Quality
                  </h3>
                  <p className="card-p">
                    Specialising in fresh produce, spices, grains, and more.
                  </p>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

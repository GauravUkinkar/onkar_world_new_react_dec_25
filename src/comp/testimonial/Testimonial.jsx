import gsap from "gsap";
import { useEffect, useRef } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/testimonial/david.webp";
import img3 from "../../assets/testimonial/kenaji.webp";
import img2 from "../../assets/testimonial/maria.webp";
import "./testimonial.scss";

const Testimonial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate section title
          gsap.fromTo(
            ".section-title .title2",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );

          // Animate swiper slides
          gsap.fromTo(
            ".testi-swiper",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              stagger: 0.3,
              delay: 0.5,
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

  const data = [
    {
      review:
        "Onkar World has been an invaluable partner in expanding our high-quality products and managing logistics has exceeded our expectations.",
      user: "David Carter",
      post: "CEO",
      company: "Global Foods Corp.",
      img: img,
    },
    {
      review:
        "We've been working with Onkar World for several years and their commitment to customer satisfaction is unmatched. They consistently deliver on time and provide excellent support.",
      user: "Maria Hernandez",
      post: "Procurement Manager",
      company: "European Retail Giant",
      img: img2,
    },
    {
      review:
        "Onkar World's knowledge of the Indian market is unparalleled. Their ability to source unique products and negotiate competitive prices has given us a significant advantage.",
      user: "Kenji Tanaka",
      post: "Import Manager",
      company: "Japanese Trading Firm",
      img: img3,
    },
  ];
  return (
    <>
      <div className="parent testimonial-parent bg-cover">
        <div className="container testimonial-cont">
          <div className="section-title">
            <h2
              className="title2"
              ref={sectionRef}
              style={{ color: "var(--white)" }}
            >
              Hear from Our <div className="gap"></div>{" "}
              <span style={{ color: "var(--accent2)" }}>Clients</span>
              <span className="underline"></span>
            </h2>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            keyboard={{
              enabled: false,
            }}
            pagination={{
              clickable: false,
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper testi-parent"
          >
            {data &&
              data.map((data, index) => {
                return (
                  <SwiperSlide key={index} className="testi-swiper">
                    <div className="card-swiper swiper1 testi-swiper-edit">
                      <span className="quotes-icon1">
                        <RiDoubleQuotesL />
                      </span>
                      <p
                        style={{ color: "var(--white)" }}
                        className="review-text"
                      >
                        {data.review}
                      </p>
                      <span className="quotes-icon2">
                        <RiDoubleQuotesR />
                      </span>
                      <div className="client-info">
                        {/* <div className="img bg-cover">
                        <Image src={data.img} />
                      </div> */}
                        <div className="text-box">
                          <span style={{ color: "white" }} className="title3">
                            {data.user}
                          </span>
                          {/* <p style={{ color: "white" }}>{data.post}</p>
                        <p style={{ color: "white" }} className="desc2">
                          {data.company}
                        </p> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

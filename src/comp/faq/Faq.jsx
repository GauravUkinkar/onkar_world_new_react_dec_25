import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./faq.scss";
import Accordion from "../accordian/Accordian";
import toast, { Toaster } from "react-hot-toast";

const Faq = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate title
          gsap.fromTo(
            ".faq-heading-section .title2",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );

          // Animate paragraph
          gsap.fromTo(
            ".faq-heading-section p",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
          );

          // Animate accordion
          gsap.fromTo(
            ".acc-container",
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

          // Animate form content
          gsap.fromTo(
            ".form-content",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 1.5 }
          );

          // Animate form inputs
          gsap.fromTo(
            ".faq-form input, .faq-form textarea",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              stagger: 0.2,
              delay: 2,
            }
          );

          // Animate CTA button
          gsap.fromTo(
            ".cta-btn",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 2.5 }
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

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);
  const Submit = (e) => {
    setLoading(true);
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.Name);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("Phone", formData.Phone);
    formDataToSend.append("Message", formData.Message);

    fetch(
      "https://script.google.com/macros/s/AKfycbw5RbWIuw9P_BRCXbjaoHO0k6pFNugwKpEQtsGEE6cYnGnXZklXhPO0iW6mtfr0XSj7lw/exec",
      {
        method: "POST",
        body: formDataToSend,
      }
    )
      .then((res) => {
        res.json();
        toast.success("Thank You For Contacting Us !");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
        });
        setLoading(false);
      })
      .then((data) => {
        console.log(data);
        // Clear form data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="faq-parent parent" ref={sectionRef}>
        <div className="faq-container container">
          <div className="faq-left">
            <div className="faq-heading-section">
              <h3 className="title2">
                Learn more from <div className="gap"></div>
                <span>FAQs </span> <span className="underline"></span>
              </h3>
              <p>
                Have questions about our products, services, or how we operate?
                Find clear and concise answers to your most frequently asked
                questions here. From sourcing and procurement to shipping and
                delivery, we have got you covered.
              </p>
            </div>
            {/* Accordion */}
            <div className="acc-container">
              <Accordion />
            </div>
          </div>

          {/* Form container */}
          <div className="faq-right">
            <div className="faq-right-container">
              <div className="form-content">
                <h3 className="form-heading title2">
                  Request a <div className="gap"></div>
                  Quote
                </h3>
                <p>
                  Fill in the form below and get all your enquiries answered.
                </p>
              </div>
              {/* Form */}
              <div className="form-container">
                <form
                  action=""
                  className="faq-form"
                  onSubmit={(e) => Submit(e)}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.Name}
                    onChange={(e) =>
                      setFormData({ ...formData, Name: e.target.value })
                    }
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={(e) =>
                      setFormData({ ...formData, Email: e.target.value })
                    }
                    required
                  />
                  <input
                    type="number"
                    name="telephone"
                    placeholder="Phone"
                    value={formData.Phone}
                    onChange={(e) =>
                      setFormData({ ...formData, Phone: e.target.value })
                    }
                    required
                  />
                  <textarea
                    rows="5"
                    placeholder="Message"
                    value={formData.Message}
                    onChange={(e) =>
                      setFormData({ ...formData, Message: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className="cta-btn cta-btn-rev hand-dark"
                  >
                    <p className="hand-dark">
                      {loading ? "Submitting ..." : "ASK US"}
                    </p>
                  </button>
                </form>
              </div>
              {/* End of form */}
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Faq;

import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss"
import gsap from "gsap";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const heading = headingRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            heading,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );
          gsap.fromTo(
            ".contact-p",
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.3 }
          );
          gsap.fromTo(
            left,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.6 }
          );
          gsap.fromTo(
            right,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.9 }
          );

          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  //sheet code

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
       <div className="contact-parent parent" ref={sectionRef}>
        <div className="contact-container container">
          <div className="contact-heading-section" ref={headingRef}>
            <h3 className="title2">
              Get in <div className="gap"></div>
              <span>touch</span>
              <span className="underline"></span>
            </h3>
            <p className="contact-p">
              We are here to assist you with all your global trading needs.
              Whether you have a question, need more information, or want to
              explore potential partnerships, feel free to reach out to us.
            </p>
          </div>
          <div className="contact-box">
            <div className="contact-left" ref={leftRef}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.478064358441!2d55.091738575924914!3d24.98386654030732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f128008900c79%3A0x5205a4aab5afc3e1!2sRegus%20-%20Dubai%20BCW%20Jafza%20View%2018%20%26%2019!5e0!3m2!1sen!2sin!4v1725873311731!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="google-map"
              />
            </div>

            <div className="contact-right" ref={rightRef}>
              <h3 className="title2">Send Mail</h3>
              <form onSubmit={(e) => Submit(e)} className="contact-form">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={formData.Name}
                  onChange={(e) =>
                    setFormData({ ...formData, Name: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={(e) =>
                    setFormData({ ...formData, Email: e.target.value })
                  }
                  required
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone"
                  value={formData.Phone}
                  onChange={(e) =>
                    setFormData({ ...formData, Phone: e.target.value })
                  }
                  required
                />
                <textarea
                  rows="5"
                  name="Message"
                  placeholder="Message"
                  value={formData.Message}
                  onChange={(e) =>
                    setFormData({ ...formData, Message: e.target.value })
                  }
                ></textarea>
                <button
                  type="submit"
                  className="cta-btn hand-light contact-btn"
                >
                  <p className="hand-light">
                    {loading ? "Submitting ..." : "ASK US"}
                  </p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default Contact

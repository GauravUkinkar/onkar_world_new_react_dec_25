import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./comp/Header/Header";
import Home from "./page/Home/Home";
import Footer from "./comp/footer/Footer";
import GetInTouch from "./comp/getintouch/GetInTouch";
import About from "./page/about/About";
import AgroProducts from "./page/agroproducts/AgroProducts";
import GeneralTrading from "./page/generaltrading/GeneralTrading";
import Founder from "./page/founders/Founder";
import Contact from "./page/contact/Contact";
import NotFound from "./not-found/NotFound";
import PrivacyPolicy from "./page/privacypolicy/PrivacyPolicy";
import TermsConditions from "./page/termsconditions/TermsConditions";

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        left: e.clientX + 10,
        top: e.clientY + 10,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const target = e.target;
      gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });

      if (target.classList.contains("cursor-dark")) {
        cursorRef.current.style.backgroundImage =
          "url(/assets/Icon/Arrow_1.png)";
      } else if (target.classList.contains("hand-dark")) {
        cursorRef.current.style.backgroundImage =
          "url(/assets/Icon/Hand_1.png)";
      } else if (target.classList.contains("hand-light")) {
        cursorRef.current.style.backgroundImage =
          "url(/assets/Icon/Hand_2.png)";
      } else if (target.tagName === "A") {
        cursorRef.current.style.backgroundImage =
          "url(/assets/Icon/Hand_2.png)";
      } else {
        cursorRef.current.style.backgroundImage =
          "url(/assets/Icon/Arrow_2.png)";
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });
      cursorRef.current.style.backgroundImage = "url(/assets/Icon/Arrow_1.png)";
    };

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const location = useLocation();
  const noLayoutPaths = ["/404"];
  const shouldHideLayout =
    location.pathname && noLayoutPaths.includes(location.pathname);

  return (
    <>
      <div className="App">
        <div className="custom-cursor" ref={cursorRef}></div>
        {!shouldHideLayout && location.pathname !== "/" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agroproducts" element={<AgroProducts />} />
          <Route path="/generaltrading" element={<GeneralTrading />} />
          <Route path="/founders" element={<Founder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}

export default App;

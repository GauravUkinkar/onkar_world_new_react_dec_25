import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { MdArrowForward, MdKeyboardArrowUp } from "react-icons/md";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import TransitionLink from "../Translink/Translink";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Squash as Hamburger } from "hamburger-react";
import logo3 from "../../assets/logo/logo2.png";
const Header = () => {
  const [mobilesubmenu, setMobilesubmenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathname = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this runs on the client
      document.querySelector(".header-links").classList.add("fade-in");
      document.querySelector(".nav-link").classList.add("nav-link-animate");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold =
          window.innerHeight -
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--unit"
            )
          ) *
            3.5;
        setToggle(scrollPosition > threshold);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  useEffect(() => {
    if (toggle) {
      gsap.fromTo(
        ".logo",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power1.out" }
      );
    }
  }, [toggle]);

  console.log(toggle);

  return (
    <>
      <div className="home-header-parent parent">
        <div className="home-header container">
          {pathname.pathname !== "/" && (
            <Link
              className="logo2 hand-light responsive-logo logo-resize"
              href="/"
            >
              <img src={logo3} alt="Logo" className="hand-light" />
            </Link>
          )}
          {pathname.pathname === "/" && (
            <Link
              className="logo2 hand-light responsive-logo logo-resize"
              href="/"
            >
              <img src={logo3} alt="Logo" className="hand-light" />
            </Link>
          )}
          {toggle && pathname.pathname == "/" && (
            <Link
              className="logo hand-light animated-logo logo-resize"
              href="/"
            >
              <img src={logo3} alt="Logo" className="hand-light" />
            </Link>
          )}
          {pathname.pathname !== "/" && (
            <Link
              className="logo2 hand-light reponsive-logo2 logo-resize"
              href="/"
            >
              <img src={logo3} alt="Logo" className="hand-light" />
            </Link>
          )}
          <div className="header-links">
            <TransitionLink href="/">Home</TransitionLink>
            <TransitionLink href="/about">About</TransitionLink>
            <div className="products-dropdown hand-light nav-link">
              <p className="products-menu hand-light ">
                Products
                <span>
                  <MdKeyboardArrowDown />
                </span>{" "}
              </p>
              <div className="products-submenu hand-light">
                <div className="products-submenu-inner">
                  <TransitionLink
                    href="/agroproducts"
                    className="menu-item  hand-light not-select"
                  >
                    Agro Products
                  </TransitionLink>
                  <TransitionLink
                    href="/generaltrading"
                    className="menu-item  hand-light not-select"
                  >
                    General trading
                  </TransitionLink>
                </div>
              </div>
            </div>
            {/* <TransitionLink href="/products">Products</TransitionLink> */}
            <TransitionLink href="/founders">Founders</TransitionLink>
            <TransitionLink href="/contact">Contacts</TransitionLink>
          </div>
          <Link href="/contact" className="cta-btn header-btn">
            <p className="hand-light">
              Get a Quote
              <span>
                <MdArrowForward />
              </span>
            </p>
          </Link>

          <div className="burger-menu">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        {isOpen && (
          <div className="mobile-navigation bg-cover parent" ref={mobileNavRef}>
            <div className="exit-button">
              <ImCross onClick={() => setIsOpen(false)} />
            </div>
            <div className="mobile-navigation-container container">
              <div className="mobile-logo">
                <image
                  src={logo3}
                  className="mobile-navigation-logo"
                  alt="img"
                />
              </div>
              <div className="mobile-naviation-box">
                <TransitionLink href="/" onClick={() => setIsOpen(false)}>
                  Home
                </TransitionLink>
                <TransitionLink href="/about" onClick={() => setIsOpen(false)}>
                  About
                </TransitionLink>

                {/* mobile navigation */}
                <div
                  className="mobile-products"
                  onClick={() => setMobilesubmenu(!mobilesubmenu)}
                >
                  <p className="mobile-products-menu hand-light">
                    Products
                    <span>
                      {mobilesubmenu ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>{" "}
                  </p>
                  <div
                    className={
                      mobilesubmenu
                        ? "mobile-products-submenu-active hand-light"
                        : "mobile-products-submenu hand-light"
                    }
                  >
                    <TransitionLink
                      href="/agroproducts"
                      className="mobile-menu-item hand-light not-select"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                    >
                      Agro Products
                    </TransitionLink>
                    <TransitionLink
                      href="/generaltrading"
                      className="mobile-menu-item hand-light not-select"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                    >
                      General trading
                    </TransitionLink>
                  </div>
                </div>

                {/* <TransitionLink href="/products" onClick={() => setIsOpen(false)}>
                Products
              </TransitionLink> */}
                <TransitionLink
                  href="/founders"
                  onClick={() => setIsOpen(false)}
                >
                  Founders
                </TransitionLink>
                <TransitionLink
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contacts
                </TransitionLink>
              </div>
              <div className="mobile-navigation-footer">
                <div className="social-icons">
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <FaSquareInstagram />
                  </a>
                  <a href="">
                    <FaXTwitter />
                  </a>
                  <a href="">
                    <RiWhatsappFill />
                  </a>
                  <a href="">
                    <MdEmail />
                  </a>
                </div>
                <div className="copyright-section">
                  <span>© 2024 Onkar</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

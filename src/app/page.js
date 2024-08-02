"use client"; // Add this at the top of the file

import React, { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const expertDivs = [
    { text: "SCIENTIFIC ADVISOR & MEDICAL CONSULTANT", image: "/room.png" },
    { text: "CONTINUED MEDICAL EDUCATION SPECIALIST", image: "/education.jpg" },
    { text: "INDEPENDENT MEDICAL EXAMINER AND EXPERT WITNESS", image: "/examiner.png" },
    { text: "HOME HEALTHCARE CONSULTANT", image: "/xray.png" },
  ];

  const allExpertDivs = expertDivs.map((el, index) => (
    <div
      style={{ backgroundImage: `url(${el.image})` }}
      key={index}
      className="expert-divs"
    >
      <p>{el.text}</p>
    </div>
  ));

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="nav-section-container">
        <nav className="fixed top-0 w-full z-50">
          <div className="nav-container flex items-center justify-between max-w-6xl mx-auto p-4">
            <a href="#home" className="w-16 h-16 lg:w-20 lg:h-20">
              <img src="/AmirLogo.png" alt="Amir Logo" />
            </a>
            <button
              onClick={toggleMenu}
              className={`block lg:hidden focus:outline-none ml-auto mr-4 ${menuOpen ? 'text-white' : ''}`}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
            <ul className={`${menuOpen ? 'show' : 'hidden'} lg:flex lg:space-x-8`}>
              <li>
                <a href="#home" onClick={closeMenu} data-roman-numeral="I">HOME</a>
              </li>
              <li>
                <a href="#medicine" onClick={closeMenu} data-roman-numeral="II">MEDICINE</a>
              </li>
              <li>
                <a href="#expert" onClick={closeMenu} data-roman-numeral="III">EXPERT</a>
              </li>
              <li>
                <a href="#media" onClick={closeMenu} data-roman-numeral="IV">MEDIA</a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu} data-roman-numeral="V">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="home">
          <section className="section-one">
            <div>
              <p className="text-6xl">
                AMIR MAHAJER<span className="text-2xl"> DO, FAOCPMR, CAQSM</span>
              </p>
              <p className="text-1xl">DOCTOR OF OSTEOPATHIC MEDICINE</p>
              <div className="button-wrapper">
                <button>
                  <a href="#expert">LEARN MORE</a>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section id="medicine" className="section-two">
        <p className="text-6xl">MEDICINE</p>
      </section>
      <section id="expert" className="section-three">
        <p id="expert-title" className="text-6xl">
          EXPERT
        </p>
        <div className="expert-divs-container">
          {allExpertDivs}
          <button>
            <a href="#contact">CONTACT US</a>
          </button>
        </div>
      </section>
      <section id="media" className="section-four">
        <p id="media-title" className="text-6xl">
          MEDIA
        </p>
        <div className="logo-container">
          <div className="logo-row">
            <a
              id="youtube"
              href="https://www.youtube.com/watch?v=XXb_KHj4Lcg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/yt_logo_mono_dark.png" alt="YouTube Logo" />
            </a>
            <img
              src="/Top-Doctor-Magazine-New-Logo-300.png"
              className="each-logo"
              alt="Top Doctor Magazine Logo"
              id="top-doc"
            />
            <a
              href="https://www.vogue.com/article/better-posture-alexander-technique"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 id="vogue">VOGUE</h1>
            </a>
          </div>
          <div className="logo-row">
            <a
              id="aocpmr"
              href="https://aocpmr.org/about/aocpmr-leadership/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/aocpmri.png" className="second-logo" alt="AOCPMR Logo" />
            </a>
            <a
              id="pbs"
              href="https://allhealthtv.com/red-flags-of-low-back-pain-video"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/PBS_wblue_rgb.png" className="second-logo" alt="PBS Logo" />
            </a>
            <a
              id="mount-sinai"
              href="https://www.mountsinai.org/about/patient-stories/relieving-hip-pain-by-focusing-on-the-lower-back"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/mount-sinai.png" className="second-logo" alt="Mount Sinai Logo" />
            </a>
          </div>
        </div>
        <footer id="contact">
          <p>CONTACT</p>
          <div>
            <p>Mount Sinai Spine</p>
            <p>T: 212 523 6078</p>
            <p>F: 332 243 0588</p>
          </div>
          <p>Appointments</p>
          <div>
            <p>T: 877 774 6328</p>
            <p>E: AMIR.MAHAJER@MOUNTSINAI.ORG</p>
            <div className="p-and-media-logos">
              <p>
                787 11TH AVE, FLOOR 7<br />
                NEW YORK, NY 10019
              </p>
              <div className="footer-media-logos">
                <a href="https://x.com/drmahajer" target="_blank" rel="noopener noreferrer">
                  <img src="/2021 Twitter logo - blue.png" alt="Twitter Logo" />
                </a>
                <a href="https://www.linkedin.com/in/amirmahajer" target="_blank" rel="noopener noreferrer">
                  <img src="/In-White-28px-R.png" alt="LinkedIn Logo" />
                </a>
                <a href="https://www.instagram.com/amirmahajer/" target="_blank" rel="noopener noreferrer">
                  <img src="/Instagram_Glyph_White.png" alt="Instagram Logo" />
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

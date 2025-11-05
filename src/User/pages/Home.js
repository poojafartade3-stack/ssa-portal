import React, { useState, useEffect } from "react";
import Banner1 from "../assets/images/Banner.png";
import Banner2 from "../assets/images/Banner2.png";
import Banner3 from "../assets/images/Banner3.png";
import Banner4 from "../assets/images/Banner4.png";
import logo from "../assets/images/logo.png";
import ManeshBankar from "../assets/images/mahesh_bankar_sir.jpg";
import RenukaBhapkar from "../assets/images/renuka_bhapkar.jpg";
import SachinSolat from "../assets/images/sachin_solat_sir.jpg";
import SugitWagh from "../assets/images/sugit_wagh_sir.jpg";
import Trupti_Mam from "../assets/images/trupti_mam.jpg";
import Bhujbal_sir from "../assets/images/bhujbal_sir.jpg"
import { Link } from "react-router-dom";


import "./css/Home.css";
import "./css/Home_sec2.css"; // honeycomb
import "./css/Home_sec3.css"; // delivery section styles

function HomePage() {
  // ================= HERO SECTION =================
  const images = [Banner1, Banner2, Banner3, Banner4];
  const quotes = [
    "Believe in yourself and all that you are.",
    "The future belongs to those who prepare for it today.",
    "Education is most powerful weapon to change world.",
    "Dream big, work hard, and achieve greatness."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [animateQuote, setAnimateQuote] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setAnimateQuote(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setAnimateQuote(true);
      }, 50);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // ================= HONEYCOMB SECTION =================
  const hexPoints = (cx, cy, a) => {
    let pts = [];
    for (let i = 0; i < 6; i++) {
      let ang = (i * 60) * Math.PI / 180;
      pts.push(`${cx + a * Math.cos(ang)},${cy + a * Math.sin(ang)}`);
    }
    return pts.join(" ");
  };

  useEffect(() => {
    const drawHoneycomb = () => {
      const side = 110;
      const gap = 1.05;
      const cx = 375, cy = 325;
      const g = document.getElementById("hc");
      const defs = document.getElementById("defs");
      if (!g || !defs) return;
      g.innerHTML = "";
      defs.innerHTML = "";

      const imgs = [
        logo,
        SachinSolat,
        ManeshBankar,
        RenukaBhapkar,
        SugitWagh,
        Trupti_Mam,
        Bhujbal_sir
      ];

      const baseDist = side * Math.sqrt(3);
      const dist = baseDist * gap;

      const positions = [
        [cx, cy],
        [cx, cy - dist],
        [cx, cy + dist],
        [cx + 1.5 * side * gap, cy - baseDist / 2 * gap],
        [cx + 1.5 * side * gap, cy + baseDist / 2 * gap],
        [cx - 1.5 * side * gap, cy - baseDist / 2 * gap],
        [cx - 1.5 * side * gap, cy + baseDist / 2 * gap]
      ];

      positions.forEach((pos, i) => {
        const [nx, ny] = pos;
        const id = `hex${i}`;
        const pts = hexPoints(nx, ny, side);

        defs.innerHTML += `<clipPath id="${id}"><polygon points="${pts}" /></clipPath>`;
        g.innerHTML += `
        <image href="${imgs[i]}" x="${nx - side}" y="${ny - side}" 
               width="${side * 2}" height="${side * 2}" clip-path="url(#${id})" preserveAspectRatio="xMidYMid slice"/>
        <polygon points="${pts}" fill="none" stroke="#666" stroke-width="1.5" stroke-linejoin="round"/>
      `;
      });
    };

    drawHoneycomb();
  }, []);

  // ================= DELIVERY SECTION =================
  const deliveryItems = [
    {
      title: "11th & 12th Science",
      desc: `Expert Coaching in <b>Physics, Chemistry, Mathematics, and Biology</b> 
           with Integrated Preparation for <b>CET, NEET, and JEE</b>.<br/><br/>
           Our institute is dedicated to nurturing young minds with a strong academic foundation 
           and advanced problem-solving skills.<br/>
           Students receive: <br/>
           • <b>Comprehensive Study Material</b> – Simplified notes, theory modules, and practice sheets.<br/>
           • <b>Regular Tests & Mock Exams</b> – CET, NEET, and JEE pattern-based practice for real exam readiness.<br/>
           • <b>Personalized Mentoring</b> – One-on-one doubt solving and guidance.<br/>`
    },
    {
      title: "Test Series & Assessments",
      desc: `Our <b>Test Series & Assessments</b> are designed to help students develop exam temperament and time management skills. 
         We conduct <b>Regular Weekly Tests</b> and a <b>Monthly Mega Test</b> to simulate real exam conditions and build confidence.<br/><br/>
         Each test follows the <b>CET, NEET, and JEE</b> exam pattern, ensuring that students practice with the same level of difficulty and question styles 
         they will encounter in the actual exams.<br/><br/>
         After every test, students receive:<br/>
         • <b>Detailed Performance Analysis</b> – Section-wise reports to identify strengths and weaknesses.<br/>
         • <b>Ranking & Benchmarking</b> – Compare performance with peers to understand competitive standing.<br/>
         • <b>Personalized Feedback</b> – Faculty guidance on improving weak areas and refining problem-solving strategies.<br/>
         • <b>Time Management Training</b> – Tips and practice to attempt maximum questions accurately within the time limit.<br/><br/>
         This continuous cycle of testing and feedback helps students overcome exam fear, sharpen their concepts, and steadily improve their scores.`
    },
    {
      title: "Personalized Mentoring",
      desc: `We believe that every student learns differently, which is why our <b>Personalized Mentoring</b> program is designed to provide 
         individual attention and customized support for success.<br/><br/>
         Students receive:<br/>
         • <b>One-on-One Doubt-Solving Sessions</b> – Immediate clarification of concepts to avoid backlogs.<br/>
         • <b>Study Planning & Strategy</b> – Tailored timetables and preparation plans based on individual goals.<br/>
         • <b>Performance Tracking</b> – Regular progress reviews and corrective action to improve weak areas.<br/>
         • <b>Motivational Guidance</b> – Personal counseling to reduce exam stress and build confidence.<br/>
         • <b>Direct Mentor Support</b> – Continuous communication with faculty for guidance and feedback.<br/><br/>
         With focused mentoring, students stay on the right path, stay motivated, and steadily progress towards excelling in 
         <b>CET, NEET, and JEE</b>.`
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 left-content-animate">
              <h1 className="hero-title">
                Welcome to <br /> Success Science Academy
              </h1>
              <p className={`hero-subtext ${animateQuote ? "fade-quote" : ""}`}>
                {quotes[currentIndex]}
              </p>
              <button className="btn btn-warning btn-lg mt-3">Get Started</button>
            </div>
            <div className="col-md-6 text-center">
              <div className="hero-image-wrapper">
                {images.map((img, index) => {
                  let className = "hero-banner";
                  if (index === currentIndex) className += " active";
                  if (index === prevIndex) className += " previous";
                  return (
                    <img
                      key={index}
                      src={img}
                      alt={`Banner ${index}`}
                      className={className}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HONEYCOMB SECTION */}
      <section className="honeycomb-section">
        <div className="honeycomb-container">
          <svg viewBox="0 0 750 650">
            <defs id="defs"></defs>
            <g id="hc"></g>
          </svg>
        </div>
        <div className="info-container">
          <h2>Our Faculty</h2>
          <p className="faculty-text">
            At Success Science Academy, we take pride in having a highly qualified and dedicated team of educators. Our faculty includes experienced engineers, doctors, and professionals from diverse fields who bring real-world knowledge into the classroom.
          </p>
          <p className="faculty-text">
            They not only focus on academic excellence but also provide personalized career guidance, mentoring students to achieve their goals and prepare for a successful future. With their expertise, passion for teaching, and commitment to student growth, our faculty ensures that every learner receives the best education and support.
          </p>
          <Link to="/about" className="btn btn-primary faculty-btn">
            Know More
          </Link>
        </div>
      </section>

      {/* ================= DELIVERY SECTION ================= */}
      <section className="delivery-section">
        <div className="delivery-heading">
          <h2>How we deliver your success</h2>
        </div>

        <div className="dropdown-container">
          {deliveryItems.map((item, i) => (
            <div key={i} className="custom-dropdown">
              <div className="dropdown-title" onClick={() => toggleDropdown(i)}>
                {item.title}
                <span className={`arrow ${openIndex === i ? "open" : ""}`}>&#94;</span>
              </div>
              <div
                className={`dropdown-content ${openIndex === i ? "open" : ""}`}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

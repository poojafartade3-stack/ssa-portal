import React from "react";
import logo from "../assets/images/logo.png";
import sachinImg from "../assets/images/sachin_solat_sir.jpg";
import sugitImg from "../assets/images/sugit_wagh_sir.jpg";
import maheshImg from "../assets/images/mahesh_bankar_sir.jpg";
import renukaImg from "../assets/images/renuka_bhapkar.jpg";
import truptiImg from "../assets/images/trupti_mam.jpg";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dr. Sachin Solat",
      role: "Biology",
      desc: "MBBS, MD — 16+ Years Experience",
      img: sachinImg,
    },
    {
      name: "Eng Sugit Wagh",
      role: "Physics",
      desc: "GATE Qualified — 13+ Years Experience",
      img: sugitImg,
    },
    {
      name: "Eng Mahesh Bankar",
      role: "Mathematics",
      desc: "University Gold Medalist — 13+ Years Experience",
      img: maheshImg,
    },
    {
      name: "Renuka Bhopkar",
      role: "Chemistry",
      desc: "M.Sc. (Chemistry)",
      img: renukaImg,
    },
    {
      name: "Trupti Katariya",
      role: "Chemistry",
      desc: "M.Sc. (Chemistry), D Pharma — 12+ Years Experience",
      img: truptiImg,
    },
  ];

  return (
    <div className="container my-5">
      {/* Header with Logo */}
      <div className="text-center mb-4">
        <img src={logo} alt="Academy Logo" width="120" className="mb-3" />
        <h2 className="fw-bold" style={{ color: "#0b325eff" }}>
          About Us
        </h2>
      </div>

      {/* Academy Intro */}
      <div className="text-center mb-5 about-text">
        <p className="lead">
          <strong>Success Science Academy</strong> — where education meets
          innovation. We are dedicated to nurturing young minds and empowering
          them to achieve academic excellence through science and creativity.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0 slide-text">
          <h4 className="fw-semibold" style={{ color: "#0b325eff" }}>
            Our Mission
          </h4>
          <p>
            Our mission is to provide high-quality education that fosters
            scientific curiosity, critical thinking, and lifelong learning. We
            aim to create a learning environment where every student can reach
            their fullest potential.
          </p>
        </div>
        <div className="col-md-6 slide-text">
          <h4 className="fw-semibold" style={{ color: "#0b325eff" }}>
            Our Vision
          </h4>
          <p>
            To be a leading educational institution that inspires innovation and
            excellence in science education, shaping the leaders and innovators
            of tomorrow.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-5">
        <h4 className="fw-semibold mb-4" style={{ color: "#0b325eff" }}>
          Meet Our Team
        </h4>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-sm-6 col-md-4 mb-4 fade-in">
              <div className="card shadow-sm border-0 h-100 team-card">
                <div className="card-body text-center">
                  <div className="team-img-wrapper mb-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-circle object-fit-cover team-img"
                      width="120"
                      height="120"
                    />
                  </div>
                  <h5 className="card-title mb-1">{member.name}</h5>
                  <p className="text-muted small mb-1">{member.role}</p>
                  <p className="text-muted small">{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Note */}
      <div className="text-center about-text">
        <p className="text-secondary">
          At Success Science Academy, we believe that learning is a lifelong
          journey. Join us as we continue to inspire, educate, and empower the
          next generation of thinkers.
        </p>
      </div>

      {/* CSS Animations & Styling */}
      <style>{`
        /* Smooth Text Slide Animation */
        .slide-text {
          animation: slideFromLeft 1s ease forwards;
        }

        @keyframes slideFromLeft {
          0% { transform: translateX(-40px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        /* Team Card Effects */
        .team-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        /* Team Image Zoom with Circle Retained */
        .team-img-wrapper {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 50%;
        }
        .team-img {
          transition: transform 0.3s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .team-card:hover .team-img {
          transform: scale(1.1);
        }

        /* Fade-In Animation */
        .fade-in {
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* About Text Animation */
        .about-text {
          animation: slideFromLeft 1s ease forwards;
        }
      `}</style>
    </div>
  );
}

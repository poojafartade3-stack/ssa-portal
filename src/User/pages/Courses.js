import React from "react";

export default function Courses() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Our Programs</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">NEET Preparation</h5>
              <p className="card-text">Comprehensive coaching for medical entrance exams.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">JEE Preparation</h5>
              <p className="card-text">Expert guidance for engineering entrance exams.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Foundation Courses</h5>
              <p className="card-text">Building strong fundamentals for students from Grade 8 onwards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

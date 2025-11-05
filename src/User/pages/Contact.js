import React from "react";

export default function Contact() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#0b325eff" }}>
        Contact Us
      </h2>

      <div className="row justify-content-center">
        {/* Left Info Section */}
        <div className="col-md-5 mb-4">
          <div className="p-4 shadow-sm rounded contact-info h-100">
            <h5 className="fw-semibold mb-3">Get in Touch</h5>
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>
              <strong>Address:</strong> Success Science Academy, Ahmednagar, Maharashtra, India
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mb-3">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              <strong>Email:</strong> info@successscienceacademy.com
            </p>

            {/* Updated Location Map */}
            <iframe
              title="Success Science Academy Ahmednagar"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30162.033437575512!2d74.69420971954723!3d19.096502005161472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssuccess%20science%20academy%20ahmednagar!5e0!3m2!1sen!2sin!4v1762253578936!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded contact-form">
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Styling */}
      <style>{`
        .contact-info, .contact-form {
          background-color: #ffffff;
        }

        .form-control {
          border: 1px solid #ccc;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-control:focus {
          border-color: #0b325eff;
          box-shadow: 0 0 8px rgba(11, 50, 94, 0.2);
        }

        .btn-primary {
          background-color: #0b325eff;
          border: none;
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #06254a;
        }

        .contact-info i {
          color: #0b325eff;
        }

        /* Smooth text entry */
        h2, .contact-info, .contact-form {
          animation: slideFromLeft 1s ease forwards;
        }

        @keyframes slideFromLeft {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

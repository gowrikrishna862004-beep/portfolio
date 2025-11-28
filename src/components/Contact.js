import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-content">

        {/* LEFT SIDE – CONTACT INFO */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            I'm always open to discussing web projects, improving your website,
            or helping with frontend development.
          </p>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>+91 9961708610</span>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>gowriportfolio@gmail.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Nagerkovil, India</span>
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <textarea rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;



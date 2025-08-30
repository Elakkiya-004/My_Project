import React from "react";
import './Contact.css';
// import '../../styles/responsive.css'

import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaRegStickyNote,FaPaperPlane,FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <p className="contact-label">Contact</p>
        <div className="contact-title">Get in Touch</div>
      </div>

      <div className="section">
        <div className="left_section">
            <div className="contact-box">
        {/* LEFT PANEL */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-block">
            <FaEnvelope className="icon" />
            <div>
              <p className="info-title">Email</p>
              <p>ud4yg@yandex.com</p>
            </div>
          </div>
          <div className="info-block">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p className="info-title">Location</p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>

          <div className="social">
            <p>Social Media</p>
            <div className="social-icons">
              <FaGithub />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>

          <div className="response-time">
            <p className="response-label">Response Time</p>
            <p>I typically reply within 24 hours during business days.</p>
          </div>
          </div>
         </div>
        </div>

        <div className="right_section">
          <form>
            <div className="row">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <div className="input-icon">
                  <FaUser />
                  <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <div className="input-icon">
                  <FaEnvelope />
                  <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="subject">Subject</label>
 <div className="input-icon">
                      <FaRegStickyNote />
                <input type="text" id="subject" name="subject" placeholder="Subject" />

                </div>              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="message">Message</label>
                <div className="input-icon textarea-icon">
                  <FaComment />
                  <textarea id="message" name="message" placeholder="Write your message"></textarea>
                </div>
              </div>
            </div>

<button type="submit" className="submit-btn">
  <FaPaperPlane style={{ marginRight: "8px" }} /> Send Message
</button>
          </form>
        </div>
      </div>
    </section>
  );
}

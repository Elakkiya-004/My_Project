import React, { useRef, useState } from "react";
import "./Contact.css";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaRegStickyNote,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();
  const [status, setStatus] = useState("");
    const sendEmail = (e) => {
    e.preventDefault();

    // Get the user's email domain
    const userEmail = formRef.current.from_email.value;
    const emailDomain = userEmail.split("@")[1].toLowerCase();

    // Decide which service ID to use based on domain (optional)
    let serviceId = "service_47jopws"; // default Gmail service
    if (emailDomain.includes("outlook.com") || emailDomain.includes("hotmail.com")) {
      serviceId = "service_ewmcwbk";
    } else if (emailDomain.includes("yahoo.com")) {
      serviceId = "service_yahoo";
    } else if (emailDomain.includes("zoho.com")) {
      serviceId = "service_zoho";
    }
console.log(formRef.current)
    emailjs
      .sendForm(
        serviceId,               // Service ID (dynamic)
        "template_9fcmtpa",    // Template ID from EmailJS
        formRef.current,
        "ojvk7IXYRi7W5-kME"        // Public Key from EmailJS
      )
      .then(
        (result) => {
          
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };
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
                  <p>elakkiya.officials@gmail.com</p>
                </div>
              </div>
              <div className="info-block">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <p className="info-title">Location</p>
                  <p>Chennai, Tamil nadu, India</p>
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
            </div>
          </div>
        </div>

        <div className="right_section">
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="top-row">
              <div className="field-wrap">
                <label htmlFor="name">Your Name</label>
                <div className="input-icon">
                  <FaUser />
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="field-wrap">
                <label htmlFor="email">Email</label>
                <div className="input-icon">
                  <FaEnvelope />
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <div className="input-icon">
                  <FaRegStickyNote />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>{" "}
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="message">Message</label>
                <div className="input-icon textarea-icon">
                  <FaComment />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message"
                  ></textarea>
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

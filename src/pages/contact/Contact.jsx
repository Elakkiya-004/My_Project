import React from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaComment, FaMailBulk, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
     <div className="contact-header">
      <p className="contact-label">
        Contact
      </p>
      <div className="contact-title">Get in Touch</div>
     </div>
    </section>
  );
}

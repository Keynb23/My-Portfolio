import React from 'react';
import './styles/Contact.css';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <ul className="contact-list">
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-facebook"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-twitter"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-instagram"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-linkedin"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;

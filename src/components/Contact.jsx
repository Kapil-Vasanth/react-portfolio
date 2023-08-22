import React, { useState } from 'react';
import './css/Contact.css';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the form submission here
    const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
  };

  return (
    <section className="contact" id='contact'>
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Have a project in mind or want to get in touch? Fill out the form below and I'll get back to you as soon as
          possible:
        </p>
        <form onSubmit={handleSubmit} method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="contact-input"
              value={contactData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="contact-input"
              value={contactData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="contact-input"
              value={contactData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              className="contact-input"
              rows="5"
              value={contactData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

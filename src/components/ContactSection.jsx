import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactSection.css";
import Button from './Button.jsx'

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.botField.value !== "") {
      toast.warning("Spam detected!");
      return;
    }

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvanrle", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-intro">
        <h3>
          CONTACT <br /> <span className="underline"></span>
        </h3>
        <p className="contact-text">
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="botField" className="honeypot" />
        
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Enter Your Message"
          required
          className="form-textarea"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="form-button"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactSection;


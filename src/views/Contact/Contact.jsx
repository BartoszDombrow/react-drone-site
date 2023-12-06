import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact_wrapper">
      <div className="contact_form_wrapper">
        <div className="contact_form_title">
          <h1>Skontaktuj się z nami!</h1>
        </div>
        <form className="contact_form">
          <input
            className="input_form"
            type="text"
            placeholder="Imię"
            id="name"
            name="name"
            required
          />

          <input
            className="input_form"
            type="email"
            placeholder="e-mail"
            id="email"
            name="email"
            required
          />

          <textarea
            id="message"
            placeholder="Twoja wiadomość"
            name="message"
            rows="4"
            required
          ></textarea>

          <input type="checkbox" id="subscribe" name="subscribe" />

          <button type="submit">Wyślij</button>
        </form>
      </div>
      <div className="contact_social_wrapper"></div>
    </div>
  );
}

export default Contact;

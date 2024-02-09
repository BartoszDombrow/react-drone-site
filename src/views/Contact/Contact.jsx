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
                    <div>
                        <button type="submit">Wyślij</button>
                    </div>
                    <p className="polityka">
                        Przesyłając wiadomość e-mail za pomocą tego formularza,
                        zgadzasz się na przetwarzanie swoich danych osobowych w
                        celu udzielenia odpowiedzi na Twoje zapytanie. Twoje
                        dane osobowe będą traktowane zgodnie z naszą Polityką
                        Prywatności i nie będą udostępniane osobom trzecim bez
                        Twojej zgody.
                    </p>
                </form>
            </div>
            <div className="contact_social_wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.1628471004174!2d18.949355499999996!3d51.6019047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a5b70d8934cf3%3A0x3876bf71077540b1!2sEuro-Cert%20Kancelaria%20Prawna%20%26%20Biuro%20Detektywistyczne!5e0!3m2!1spl!2spl!4v1707486363600!5m2!1spl!2spl"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="mapa"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;

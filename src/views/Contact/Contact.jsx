import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();

    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(`${serviceId}`, `${templateId}`, form.current, {
                publicKey: `${publicKey}`,
            })
            .then(
                () => {
                    e.target.reset();
                    console.log(process.env.REACT_APP_SERVICE_ID);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="contact_wrapper">
            <div className="contact_form_wrapper">
                <div className="contact_form_title">
                    <h1>{t("contact.contactWithUs")}</h1>
                </div>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <label className="label">{t("contact.name")}</label>
                    <input
                        required={true}
                        type="text"
                        name="user_name"
                        className="input_form"
                    />
                    <label className="label">{t("contact.email")}</label>
                    <input
                        required={true}
                        type="email"
                        name="user_email"
                        className="input_form"
                    />
                    <label className="label">{t("contact.message")}</label>
                    <textarea
                        name="message"
                        className="textarea"
                        required={true}
                    />
                    <input
                        type="submit"
                        value={t("contact.send")}
                        className="form_button"
                    />
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

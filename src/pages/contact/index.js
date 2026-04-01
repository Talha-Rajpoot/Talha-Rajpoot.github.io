import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";
import { motion } from "framer-motion";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      title: formData.message,
      email: formData.email,
    };

    setFormdata({ ...formData, loading: true });

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            loading: false,
            alertmessage: "Message sent successfully! Thank you for reaching out.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata({
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <div className="contact-3d">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="contact-3d__container">
          <motion.h1
            className="contact-3d__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </motion.h1>

          {formData.show && (
            <motion.div
              className={`contact-3d__alert contact-3d__alert--${formData.variant}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setFormdata({ ...formData, show: false })}
            >
              {formData.alertmessage}
            </motion.div>
          )}

          <div className="contact-3d__grid">
            <motion.div
              className="contact-3d__info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3>Get in touch</h3>
              <div className="contact-3d__detail">
                <span className="contact-3d__detail-label">Email</span>
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
              </div>
              {contactConfig.YOUR_FONE && (
                <div className="contact-3d__detail">
                  <span className="contact-3d__detail-label">Phone</span>
                  <p>{contactConfig.YOUR_FONE}</p>
                </div>
              )}
              <p className="contact-3d__desc">{contactConfig.description}</p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="contact-3d__form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="contact-3d__form-row">
                <input
                  className="contact-3d__input"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name || ""}
                  type="text"
                  required
                  onChange={handleChange}
                />
                <input
                  className="contact-3d__input"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  value={formData.email || ""}
                  required
                  onChange={handleChange}
                />
              </div>
              <textarea
                className="contact-3d__input contact-3d__textarea"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button className="contact-3d__submit" type="submit">
                {formData.loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      {formData.loading && <div className="contact-3d__loading" />}
    </HelmetProvider>
  );
};

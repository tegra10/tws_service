import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    // Initialisation d'EmailJS
    emailjs.init("XKnNxAilPe2G4Ja80");
  }, []);

  const socialLinks = [
    {
      name: "Email",
      icon: FaEnvelope,
      link: "mailto:tegkit30@gmail.com",
      color: "#EA4335",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      link: "https://wa.me/+243812512180",
      color: "#25D366",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/tegra.kitenge",
      color: "#E4405F",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/tegra-kitenge-897142257",
      color: "#0A66C2",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        "service_wrsbnfj",
        "template_l82vxou",
        form.current,
        "XKnNxAilPe2G4Ja80"
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message:
            "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
        });
        form.current.reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <Header />
      <main className="contact-page">
        <div className="contact-content">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/path/to/your/photo.jpg" alt="Mon profil" />
            </div>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ "--hover-color": social.color }}
                >
                  <social.icon />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-info">
            <h1>Contactez-moi</h1>
            <p>
              N'hésitez pas à me contacter pour toute question ou proposition de
              collaboration. Je vous répondrai dans les plus brefs délais.
            </p>
          </div>

          {submitStatus.message && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Votre nom"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Votre email"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

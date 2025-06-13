import React from "react";
import "./Contact.css";

function Contact() {
  const contactMethods = [
    {
      platform: "YouTube (Beats)",
      url: "https://www.youtube.com/@jhosueploo-k7j",
      icon: "🎧",
      description: "Canal principal de beats y producciones"
    },
    {
      platform: "YouTube (Música)",
      url: "https://www.youtube.com/@jhosueploo",
      icon: "🎵",
      description: "Canal de mis canciones originales"
    },
    {
      platform: "Spotify",
      url: "https://open.spotify.com/artist/jhosueploo",
      icon: "🎶",
      description: "Escucha mi música en Spotify"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/jhosueploo",
      icon: "📸",
      description: "Sígueme para contenido exclusivo"
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/1234567890",
      icon: "💬",
      description: "Contacto directo para colaboraciones"
    },
    {
      platform: "Email",
      url: "mailto:jhosueploo@gmail.com",
      icon: "📧",
      description: "Para propuestas profesionales"
    }
  ];

  const services = [
    {
      title: "Distribución Musical",
      description: "Te ayudo a subir tus canciones a todas las plataformas digitales",
      commission: "Solo 15% de comisión"
    },
    {
      title: "Producción de Beats",
      description: "Beats únicos y personalizados para tu estilo",
      commission: "Precios competitivos"
    },
    {
      title: "Colaboraciones",
      description: "Trabajemos juntos en tu próximo hit",
      commission: "Abierto a propuestas"
    }
  ];

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-hero">
          <h1>Contacto</h1>
          <p>¡Trabajemos juntos en tu próximo proyecto musical!</p>
        </div>
      </header>

      <main className="contact-content">
        {/* Servicios */}
        <section className="services-section">
          <h2>Mis Servicios</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="commission">{service.commission}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Información importante */}
        <section className="info-section">
          <div className="info-card">
            <h3>🎵 Distribución Musical</h3>
            <p>Te ayudo a subir tus canciones a <strong>todas las plataformas</strong> digitales: Spotify, Apple Music, YouTube Music, Deezer, Amazon Music y más.</p>
            <p className="highlight">Solo cobro el <strong>15% de tus ganancias</strong></p>
          </div>
          
          <div className="info-card">
            <h3>🤝 Colaboraciones</h3>
            <p>Estoy abierto a colaboraciones musicales. Si tienes una idea o proyecto, ¡contáctame!</p>
          </div>
        </section>

        {/* Contactos */}
        <section className="contacts-section">
          <h2>Todas mis Redes</h2>
          <div className="contacts-grid">
            {contactMethods.map((contact, index) => (
              <a 
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">{contact.icon}</div>
                <div className="contact-info">
                  <h3>{contact.platform}</h3>
                  <p>{contact.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Botón de regreso */}
        <div className="back-button-container">
          <button 
            className="back-button"
            onClick={() => window.history.back()}
          >
            ← Volver al Inicio
          </button>
        </div>
      </main>
    </div>
  );
}

export default Contact;

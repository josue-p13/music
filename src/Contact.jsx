import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  
  const handleNavClick = (section) => {
    if (section === 'home') {
      navigate('/');
    } else if (section === 'beats') {
      window.open('https://www.youtube.com/@jhosueploo-k7j', '_blank');
    } else if (section === 'about') {
      navigate('/about');
    } else if (section === 'contact') {
      navigate('/contact');
    }
  };

  return (
    <div className="contact-page">
      {/* Header con navegación */}
      <header className="header">
        <nav className="top-nav">
          <div className="nav-brand">
            <img src="logo.png" alt="JhosuePloo Logo" />
          </div>
          <div className="nav-links">
            <a href="/" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
            <a href="#beats" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('beats'); }}>Beats</a>
            <a href="/about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
            <a href="/contact" className="nav-link active" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="contact-hero">
          <h1>📞 Contacto</h1>
          <p>¡Trabajemos juntos en tu próximo proyecto musical!</p>
        </div>

        <div className="highlight">
          <h3>🎵 Distribución Musical</h3>
          <p>Te ayudo a subir tus canciones a <strong>todas las plataformas</strong> digitales: Spotify, Apple Music, YouTube Music, Deezer, Amazon Music y más.</p>
          <p><strong>Solo cobro el 15% de tus ganancias</strong> • <strong>Colaboraciones abiertas</strong></p>
        </div>

        <h2 className="services-title">Mis Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🎧 Producción de Beats</h3>
            <p>Beats únicos y personalizados para tu estilo musical. Desde trap hasta reggaeton, pop y más géneros.</p>
            <p><strong>⚠️ Nota:</strong> Por cuestiones de tiempo no tengo todos mis beats en YouTube, pero si quieres escucharlos <strong>contáctame directamente</strong>.</p>
          </div>
          <div className="service-card">
            <h3>📀 Distribución Digital</h3>
            <p>Te ayudo a subir tus canciones a todas las plataformas digitales. Solo cobro el 15% de tus ganancias.</p>
          </div>
          <div className="service-card">
            <h3>🤝 Colaboraciones</h3>
            <p>Trabajemos juntos en tu próximo hit. Estoy abierto a propuestas y proyectos musicales.</p>
          </div>
        </div>        <h2 className="contacts-title">📱 Contáctame</h2>
        <div className="contacts-grid">
          <a href="https://wa.me/593998908695" target="_blank" rel="noopener noreferrer" className="contact-card priority">
            <div className="contact-icon">💬</div>
            <div className="contact-info">
              <h3>WhatsApp (Recomendado)</h3>
              <p>La forma más rápida - +593 998 908 695</p>
            </div>
          </a>

          <a href="mailto:jhosuepin@hotmail.com" className="contact-card priority">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>Para propuestas detalladas - jhosuepin@hotmail.com</p>
            </div>
          </a>

          <a href="https://instagram.com/jhosueploo" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">�</div>
            <div className="contact-info">
              <h3>Instagram</h3>
              <p>Sígueme y manda DM - @jhosueploo</p>
            </div>
          </a>
          
          <a href="https://www.youtube.com/@jhosueploo-k7j" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">🎧</div>
            <div className="contact-info">
              <h3>YouTube (Beats)</h3>
              <p>Algunos de mis beats (no están todos por tiempo)</p>
            </div>
          </a>
          
          <a href="https://www.youtube.com/@jhosueploo" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">🎵</div>
            <div className="contact-info">
              <h3>YouTube (Música)</h3>
              <p>Canal de mis canciones originales</p>
            </div>
          </a>
          
          <a href="https://open.spotify.com/search/jhosueploo" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">🎶</div>
            <div className="contact-info">
              <h3>Spotify</h3>
              <p>Escucha mi música - @jhosueploo</p>
            </div>
          </a>
        </div>

        <div className="center">
          <a href="/" className="back-button" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>← Volver al Inicio</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

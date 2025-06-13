import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);

  // Animación de las notas musicales
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBeat((prev) => (prev + 1) % 3);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleButtonClick = (type) => {
    if (type === 'beats') {
      window.open('https://www.youtube.com/@jhosueploo-k7j', '_blank');
    } else if (type === 'contact') {
      navigate('/contact');
    } else if (type === 'music') {
      window.open('https://www.youtube.com/@jhosueploo', '_blank');
    }
  };

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

  const navItems = [
    { href: "#create", text: "CREATE A LOGO", icon: "🎨" },
    { href: "#producer", text: "JHOSUEPLOOO", icon: "🎧" },
    { href: "#beats", text: "Beats", icon: "🔥" },
    { href: "#studio", text: "STUDIO", icon: "🎬" }
  ];

  return (
    <div className="app">
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
            <a href="/contact" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="content">
        {/* Logotipo y título */}
        <div className={`logo-container ${isAnimating ? 'animate' : ''}`} onClick={handleLogoClick}>
          <div className="music-notes">
            {[0, 1, 2].map((index) => (
              <span 
                key={index}
                className={`note ${currentBeat === index ? 'active' : ''}`}
              >
                🎵
              </span>
            ))}
          </div>
          <h1 className="logo-text">
            JHOSUEPLOO
            <span className="arrow">▶</span>
          </h1>
          <p className="subtitle">PRODUCER • BEATS • STUDIO</p>
        </div>

        {/* Descripción mejorada */}
        <div className="description">
          <p className="main-text">
            Antes era un productor que solo creaba beats para mis propias canciones, 
            pero ahora me dedico a ayudar a otros artistas a crear música extraordinaria.
          </p>
          <p className="sub-text">
            Te ayudo a subir tus canciones a <strong>todas las plataformas digitales</strong> 
            (Spotify, Apple Music, YouTube Music y más). Solo cobro el <strong>15% de tus ganancias</strong>.
            ¡Colaboraciones abiertas!
          </p>
          <div className="music-info">
            <p>🎵 Encuéntrame como <strong>@jhosueploo</strong> en Spotify</p>
            <p>⚠️ Por cuestiones de tiempo no tengo todos mis beats en YouTube, pero si quieres escucharlos <strong>contáctame directamente</strong></p>
          </div>
          <div className="cta-buttons">
            <button 
              className="cta-button primary"
              onClick={() => handleButtonClick('beats')}
            >
              Escuchar Beats
            </button>
            <button 
              className="cta-button music"
              onClick={() => handleButtonClick('music')}
            >
              Mi Música Original
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => handleButtonClick('contact')}
            >
              Contactar
            </button>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">300+</span>
            <span className="stat-label">Beats Creados</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Artista Independiente</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Años</span>
          </div>
        </div>
      </main>

      {/* Pie de página simple */}
      <footer className="footer">
        <div className="footer-bottom">
          <p>&copy; 2025 JhosuePloo Productions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
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
    <div className="about-page">
      {/* Header con navegación */}
      <header className="header">
        <nav className="top-nav">
          <div className="nav-brand">
            <img src="logo.png" alt="JhosuePloo Logo" />
          </div>
          <div className="nav-links">
            <a href="/" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a>
            <a href="#beats" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('beats'); }}>Beats</a>
            <a href="/about" className="nav-link active" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a>
            <a href="/contact" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="about-hero">
          <h1>Sobre Mí</h1>
          <p>La historia detrás de la música, la pasión y la tecnología</p>
        </div>

        <div className="profile-section">
          <div className="profile-image">
            <img src="me.jpg" alt="JhosuePloo - Productor Musical" />
          </div>
          
          <div className="profile-content">
            <h2>¡Hola! Soy <span className="highlight-text">JhosuePloo</span></h2>
            <p>
              Hace <strong>3 años</strong> me adentré en el fascinante mundo de la producción musical, 
              y desde entonces no he parado de crear. Lo que comenzó como un hobby se ha convertido 
              en mi verdadera pasión, llegando a producir más de <strong className="highlight-text">300 beats únicos</strong> 
              principalmente para mis propias canciones y algunas colaboraciones con un amigo.
            </p>
            <p>
              Mi fuerte está en <strong className="highlight-text">Ableton Live 12</strong>, donde paso horas creando 
              sonidos únicos y experimentando con nuevas texturas desde mi <strong>estudio casero</strong>. 
              Cuento con herramientas profesionales como toda la suite de <strong>Arturia</strong>, 
              <strong>Kontakt</strong>, la suite completa de <strong>Waves</strong>, y muchas más herramientas 
              que me permiten crear producciones de calidad desde casa.
            </p>
            <p>
              Actualmente estoy en <strong>sexto semestre de 8</strong> estudiando 
              <strong className="highlight-text">Ingeniería en Ciencias de la Computación</strong> en la 
              <strong>Universidad Politécnica Salesiana</strong>. Curiosamente, esta misma página web la desarrollé 
              yo usando <strong>React</strong>, combinando mis dos pasiones: la tecnología y la música.
            </p>
            <p>
              Aunque mi carrera universitaria me fascina, la producción musical sigue siendo mi hobby favorito. 
              He completado varios cursos especializados en <strong>Udemy</strong> para perfeccionar mis técnicas 
              y mantenerme al día con las últimas tendencias en producción musical desde mi setup casero.
            </p>
            <p>
              <strong>Nota importante:</strong> Por cuestiones de tiempo no tengo todos mis beats subidos en YouTube, 
              pero si estás interesado en escuchar mi trabajo completo, <strong className="highlight-text">contáctame directamente</strong> 
              y te comparto mi catálogo completo de producciones.
            </p>
          </div>
        </div>

        {/* Nueva sección del estudio */}
        <div className="studio-section">
          <div className="studio-grid">
            <div>
              <h3>🎛️ Mi Estudio Casero</h3>
              <p>
                Trabajo desde mi <strong>estudio casero</strong>, un espacio que he ido armando con el tiempo 
                para tener todo lo necesario para crear música de calidad. Aunque no es un estudio enorme, 
                tengo todo lo esencial: mi setup con <strong>Ableton Live 12</strong>, mis monitores, 
                interfaz de audio, y todas las herramientas de software que necesito.
              </p>
              <p>
                Es aquí donde he creado todos mis beats, donde experimento con nuevos sonidos y donde 
                paso horas perfeccionando cada producción. Un espacio íntimo pero profesional donde 
                la creatividad fluye sin límites.
              </p>
            </div>
            <div className="studio-image">
              <img src="estudio.jpg" alt="Estudio Casero de JhosuePloo" />
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>🛠️ Mi Setup Casero y Herramientas</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>🎛️ Software Principal</h4>
              <ul>
                <li>Ableton Live 12 (Mi especialidad)</li>
                <li>FL Studio (ocasional)</li>
                <li>Plugins VST y AU</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <h4>🎹 Plugins y Suites</h4>
              <ul>
                <li>Suite completa de Arturia</li>
                <li>Native Instruments Kontakt</li>
                <li>Suite completa de Waves</li>
                <li>Serum, Massive, Sylenth1</li>
                <li>FabFilter Bundle</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <h4>🎵 Mi Estilo Musical</h4>
              <ul>
                <li>Beats para mis canciones</li>
                <li>Colaboraciones con amigos</li>
                <li>Trap & Hip Hop</li>
                <li>Reggaeton y Pop</li>
                <li>Experimentación sonora</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <h4>💻 Desarrollo Web</h4>
              <ul>
                <li>React & JavaScript</li>
                <li>HTML5 & CSS3</li>
                <li>Estudiante de Ing. Computación</li>
                <li>Esta página desarrollada por mí</li>
                <li>Combinando música y tecnología</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <h3>📞 Información de Contacto</h3>
          <p>¿Listo para trabajar juntos? ¡Contáctame por cualquiera de estos medios!</p>
          
          <div className="contact-grid">
            <div className="contact-item">
              <span>📱</span>
              <a href="tel:+593998908695">+593 998 908 695</a>
            </div>
            
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:jhosuepin@hotmail.com">jhosuepin@hotmail.com</a>
            </div>
            
            <div className="contact-item">
              <span>📸</span>
              <a href="https://instagram.com/jhosueploo" target="_blank" rel="noopener noreferrer">@jhosueploo</a>
            </div>
            
            <div className="contact-item">
              <span>🎵</span>
              <a href="https://open.spotify.com/search/jhosueploo" target="_blank" rel="noopener noreferrer">@jhosueploo en Spotify</a>
            </div>
          </div>
        </div>

        <div className="center">
          <a href="/" className="back-button" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>← Volver al Inicio</a>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import '../assets/css/Home.css';
import heroImg from '../assets/img/hero-bg.jpg'
import compImg from '../assets/img/john-doe-about.jpg'

const Home = () => {
  return (
    <>
      {/* Section Hero */}
      <section className="hero">
        <div className="hero-content text-center text-white">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary mt-4">
            En savoir plus
          </a>
        </div>
      </section>

      {/* Section À propos et Compétences */}
<section id="about" className="about-section py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6 about-box">
        <h2 className="section-title">À propos</h2>
        <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<b>intégrateur-développeur web</b> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans
        le domaine du  <b>dévellppement web</b>.</p>
        <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <b>développeur web full stack</b>.</p>
        <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
      </div>

      <div className="col-md-6 skills-box">
        <h2 className="section-title">Mes compétences</h2>
        <img src={compImg} alt="Compétences" className="competences-image mb-3" />
        <small>HTML5 90%</small>
        <div className="progress mb-3">
          <div className="progress-bar-html" style={{ width: '90%' }}></div>
        </div>
        <small>CSS 80%</small>
        <div className="progress mb-3">
          <div className="progress-bar-css" style={{ width: '80%' }}></div>
        </div>
        <small>JAVASCRIPT 70%</small>
        <div className="progress mb-3">
          <div className="progress-bar-js" style={{ width: '70%' }}></div>
        </div>
        <small>PHP 60%</small>
        <div className="progress mb-3">
          <div className="progress-bar-php" style={{ width: '60%' }}></div>
        </div>
        <small>REACT 50%</small>
        <div className="progress mb-3">
          <div className="progress-bar-react" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;

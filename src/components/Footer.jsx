import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import gitHub from '../assets/img/github.png';
import twitterImg from '../assets/img/twitter.png';
import linkedIn from '../assets/img/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="container">
        <div className="row">
          {/* Colonne 1 */}
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>40 Rue Laure Diebold<br />69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <div>
              <a href="https://api.github.com/users/github-john-doe/repos" target="_blank" rel="noopener noreferrer">
                <img src={gitHub} height='24px' /><i className="fab fa-github fa-2x text-light mr-3"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterImg} height='24px' /><i className="fab fa-twitter fa-2x text-light mr-3"></i>
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} height='24px' /><i className="fab fa-linkedin fa-2x text-light"></i>
              </a>
            </div>
          </div>
          {/* Colonne 2 */}
          <div className="col-md-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/about">À propos</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/legal-notices">Mentions légales</Link>
              </li>
            </ul>
          </div>
          {/* Colonne 3 */}
          <div className="col-md-3">
            <h5>Réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/projects#project1">Fresh food</Link>
              </li>
              <li>
                <Link to="/projects#project2">Restaurant Akira</Link>
              </li>
              <li>
                <Link to="/projects#project3">Espace bien-être</Link>
              </li>
            </ul>
          </div>
          {/* Colonne 4 */}
          <div className="col-md-3">
            <h5>Blog</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/blog#article1">Coder son site en HTML/CSS</Link>
              </li>
              <li>
                <Link to="/blog#article2">Vendre ses produits sur le web</Link>
              </li>
              <li>
                <Link to="/blog#article3">Se positionner sur Google</Link>
              </li>
            </ul>
          </div>
        </div>
        
            <div className="footer-bottum text-center py-3">
            <p>© 2023 John Doe. Tous droits réservés.</p>
            </div>
        
      </div>
    </footer>
  );
};

export default Footer;
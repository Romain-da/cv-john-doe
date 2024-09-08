import React, { useState } from 'react';
import '../assets/css/LegalNotices.css'; // Importer le fichier CSS

const LegalNotices = () => {
  const [isHostVisible, setHostVisible] = useState(false);
  const [isCreditsVisible, setCreditsVisible] = useState(false);

  return (
    <div className="legal-notices">
      <h1>Mentions Légales</h1>

      {/* Section Editeur du site */}
      <div className="section editor">
        <h2>Éditeur du site</h2>
        <div className="editor-info">
          <p><strong>John Doe</strong></p>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>
          <p>Email : <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
        </div>
      </div>

      {/* Section Hébergeur - Cliquable */}
      <div className="section">
        <div className="collapsible-header" onClick={() => setHostVisible(!isHostVisible)}>
          <h2>Hébergeur</h2>
          <span>{isHostVisible ? '−' : '+'}</span>
        </div>
        {/* Affiche le contenu seulement si l'état est à true */}
        {isHostVisible && (
          <div className="host-info">
            <p><strong>Always Data</strong></p>
            <p>91 rue du Faubourg Saint Honoré</p>
            <p>75008 Paris</p>
            <p><a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
          </div>
        )}
      </div>

      {/* Section Crédits - Cliquable */}
      <div className="section">
        <div className="collapsible-header" onClick={() => setCreditsVisible(!isCreditsVisible)}>
          <h2>Crédits</h2>
          <span>{isCreditsVisible ? '−' : '+'}</span>
        </div>
        {/* Affiche le contenu seulement si l'état est à true */}
        {isCreditsVisible && (
          <div className="credits-info">
            <p>Site développé par John Doe, étudiant du CEF.</p>
            <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default LegalNotices;

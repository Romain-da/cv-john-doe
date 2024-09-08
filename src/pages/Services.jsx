import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/css/Services.css';
import bannerImg from '../assets/img/banner.jpg';

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* Bannière */}
      <div
        className="banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      ></div>

      <Container className="text-center py-5">
        {/* Titre de la section */}
        <h1 className="mb-4">MON OFFRE DE SERVICES</h1>
        <p className="lead mb-4">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <hr className="divider my-4" />

        {/* Section Services */}
        <Row className="g-4">
          {/* Carte 1 - UX Design */}
          <Col xs={12} md={4}>
            <Card className="service-card text-center h-100">
              <Card.Body>
                <i className="fas fa-desktop fa-3x service-icon mb-3"></i>
                <Card.Title className="service-title">UX Design</Card.Title>
                <Card.Text className="service-text">
                  <strong>L'UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Carte 2 - Développement Web */}
          <Col xs={12} md={4}>
            <Card className="service-card text-center h-100">
              <Card.Body>
                <i className="fas fa-code fa-3x service-icon mb-3"></i>
                <Card.Title className="service-title">Développement Web</Card.Title>
                <Card.Text className="service-text">
                  <strong>Le développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Carte 3 - Référencement */}
          <Col xs={12} md={4}>
            <Card className="service-card text-center h-100">
              <Card.Body>
                <i className="fas fa-search fa-3x service-icon mb-3"></i>
                <Card.Title className="service-title">Référencement</Card.Title>
                <Card.Text className="service-text">
                  <strong>Le référencement naturel</strong> d'un site, aussi appelé SEO, consiste à améliorer sa position dans les résultats des moteurs de recherche.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

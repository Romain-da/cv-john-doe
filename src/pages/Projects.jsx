import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Projects.css';
import bannerImg from '../assets/img/banner.jpg';
import '../assets/img/banner.jpg';
import freshFood from '../assets/img/portfolio/fresh-food.jpg';
import restJap from '../assets/img/portfolio/restaurant-japonais.jpg';
import espaceBien from '../assets/img/portfolio/espace-bien-etre.jpg';
const Projects = () => {
  return (
    <>
    <header className="banner">
        <img src={bannerImg} alt="Banner" className="banner-img" />
     </header>
   
    <Container className="py-5">
      <h1 className="text-center mb-5">Mes Réalisations</h1>
      <Row>
        {/* Projet 1 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={freshFood} alt="fresh-food" className="Fresh food" />
            <Card.Body>
              <Card.Title>Fresh food</Card.Title>
              <Card.Text>
                Réalisation d'un site avec commande en ligne.
              </Card.Text>
              <Button variant="primary">Voir</Button>
              <Card.Footer>
                <small className="text-muted">Réalisé avec PHP er MySQL</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        {/* Projet 2 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={restJap} alt="restaurant-japonais" className="Restaurant japonnais" />
            <Card.Body>
              <Card.Title>Restaurant Akira</Card.Title>
              <Card.Text>
                Réalisation d'un vitrine.
              </Card.Text>
              <Button variant="primary">Voir</Button>
              <Card.Footer>
                <small className="text-muted">Réalisé avec WordPress</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        {/* Projet 3 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={espaceBien} alt="espace-bien-etre" className="Espace bien-être" />
            <Card.Body>
              <Card.Title>Espace bien-être</Card.Title>
              <Card.Text>
                Réalisation d'un site pour un patricien de bien-être.
              </Card.Text>
              <Button variant="primary">Voir</Button>
              <Card.Footer>
                <small className="text-muted">Réalisé en HTML/CSS</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Projects;

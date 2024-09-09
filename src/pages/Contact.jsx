import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/css/Contact.css';  
import contactBg from '../assets/img/contact-bg.jpg';  

const Contact = () => {
  return (
    <div className="contact-page">
      <Container className="py-5 contact-container">
        <h1 className="text-center mb-4">Me Contacter</h1>
        <p className="text-center mb-5">
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <Row>
          <Col md={6}>
            <h3 className="mb-4">Formulaire de contact</h3>
            <Form>
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Votre nom" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Votre adresse email" required />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Control type="tel" placeholder="Votre numéro de téléphone" required />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Control type="text" placeholder="Sujet" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={5} placeholder="Votre message" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 w-100">
                Envoyer
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h3 className="mb-4">Mes coordonnées</h3>
            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p>06 20 30 40 50</p>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

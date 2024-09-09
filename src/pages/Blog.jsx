import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import bannerImg from '../assets/img/banner.jpg';
import codeHTML from '../assets/img/blog/coder.jpg';
import venteInternet from '../assets/img/blog/croissance.jpg';
import imgGoogle from '../assets/img/blog/google.jpg';
import imgScreens from '../assets/img/blog/screens.jpg';
import imgSeo from '../assets/img/blog/seo.jpg';
import imgTechnos from '../assets/img/blog/technos.png';
const Blog = () => {
  return (
    <>
    <header className="banner">
        <img src={bannerImg} alt="Banner" className="banner-img" />
     </header>
    <Container className="py-5">
      <h1 className="text-center mb-5">Mon Blog</h1>
      <Row>
        {/* Article 1 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={codeHTML} alt="coder en HMLT/CSS" />
            <Card.Body>
              <Card.Title>Coder son site en HTML/CSS</Card.Title>
              <Card.Text>
                Some quick example test to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Lire la suite</Button>
            </Card.Body>
            <Card.Footer>
              <smmall>Publié le 22 août 2022</smmall>
            </Card.Footer>
          </Card>
        </Col>
        {/* Article 2 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={venteInternet} alt="vendre dsur internet" />
            <Card.Body>
              <Card.Title>Vendre ses produits sur internet</Card.Title>
              <Card.Text>
              Some quick example test to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Lire la suite</Button>
            </Card.Body>
            <Card.Footer>
              <smmall>Publié le 20 août 2022</smmall>
            </Card.Footer>
          </Card>
        </Col>
        {/* Article 3 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={imgGoogle} alt="possitionner google" />
            <Card.Body>
              <Card.Title>Se positionner sur Google</Card.Title>
              <Card.Text>
              Some quick example test to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Lire la suite</Button>
            </Card.Body>
            <Card.Footer>
              <smmall>Publié le 01 août 2022</smmall>
            </Card.Footer>
          </Card>
        </Col>
        {/* Article 4 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={imgScreens} />
            <Card.Body>
              <Card.Title>Coder en responsive design</Card.Title>
              <Card.Text>
              Some quick example test to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Lire la suite</Button>
            </Card.Body>
            <Card.Footer>
              <smmall>Publié le 31 juillet 2022</smmall>
            </Card.Footer>
          </Card>
        </Col>
        {/* Article 5 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={imgSeo} />
            <Card.Body>
              <Card.Title>Techniques de référencement</Card.Title>
              <Card.Text>
              Some quick example test to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Lire la suite</Button>
            </Card.Body>
            <Card.Footer>
              <smmall>Publié le 30 juillet 2022</smmall>
            </Card.Footer>
          </Card>
        </Col>
        {/* Article 6 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={imgTechnos} />
            <Card.Body>
              <Card.Title>Apprendre à coder</Card.Title>
              <Card.Text>
              Some quick example test to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Lire la suite</Button>
            </Card.Body>
            <Card.Footer>
              <smmall>Publié le 12 juillet 2022</smmall>
            </Card.Footer>
          </Card>
        </Col>
        {/* Répéter pour les autres articles */}
        {/* ... */}
      </Row>
    </Container>
    </>
  );
};

export default Blog;

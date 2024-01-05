import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <h2 className="text-center mt-4 mb-5">Welcome to Our Luxurious Sea View Infinity Pool Hotel</h2>

      <Row className="mb-4">
        <Col>
          <Card bg="info" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Our Rich History</Card.Title>
              <Card.Text>
                Established in <strong>2010</strong>, Sea View Hotel and Resort has a rich history of providing unparalleled hospitality. Our journey began with a vision to create a haven of luxury by the sea, and over the years, we have become a symbol of elegance and refinement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card bg="primary" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Location</Card.Title>
              <Card.Text>
                Nestled along the pristine shores of <strong>[Location]</strong>, our hotel offers breathtaking views of the sea and provides easy access to [Landmarks/Attractions]. Whether you seek a romantic getaway or a place to host memorable events, our location sets the stage for an unforgettable experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card bg="success" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Unwind in Style</Card.Title>
              <Card.Text>
                Immerse yourself in the lap of luxury as you unwind by our breathtaking sea view infinity pool. Let the tranquil sounds of the waves and the panoramic views transport you to a world of serenity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card bg="warning" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Indulge Your Senses</Card.Title>
              <Card.Text>
                Our opulent accommodations, adorned with modern amenities and elegant decor, promise a stay that goes beyond expectations. Enjoy the perfect blend of comfort and sophistication.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card bg="danger" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Exquisite Dining</Card.Title>
              <Card.Text>
                Savor culinary delights crafted by our world-class chefs. From delectable seafood to international cuisine, our restaurants offer a gastronomic journey that caters to every palate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card bg="primary" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Personalized Service</Card.Title>
              <Card.Text>
                Our dedicated staff is committed to providing personalized service, ensuring that your every need is met with warmth and efficiency. Experience hospitality at its finest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card bg="info" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Events and Celebrations</Card.Title>
              <Card.Text>
                Host your special events and celebrations against the backdrop of the sea. Our event spaces are designed to create memorable experiences for weddings, conferences, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card bg="success" text="white" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center">Wellness and Relaxation</Card.Title>
              <Card.Text>
                Rejuvenate your body and mind at our spa and wellness center. Indulge in a range of treatments and therapies that promote relaxation and well-being.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <p className="text-center mt-4">Discover a world where luxury meets the sea. Book your stay at Sea View Hotel and Resort for an unforgettable experience.</p>
    </Container>
  );
};

export default About;

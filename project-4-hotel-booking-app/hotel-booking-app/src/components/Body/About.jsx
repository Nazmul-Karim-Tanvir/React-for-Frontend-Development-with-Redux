import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container style={{ marginBottom: '100px' }}>
      <h2 className="display-4 text-success text-center mt-4 mb-5">Discover a world where luxury meets the Sea</h2>

      <Row className="mb-4">
        <Col>
          <Card  text="dark" className="mb-3 " style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2" >Our Rich History</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#FDEBD0'}}>
                Established in <strong>2010</strong>, Sea View Hotel and Resort has a rich history of providing unparalleled hospitality. Our journey began with a vision to create a haven of luxury by the sea, and over the years, we have become a symbol of elegance and refinement.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card text="dark" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2">Location</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#CFFCDC'}}>
                Nestled along the pristine shores of <strong>[Location]</strong>, our hotel offers breathtaking views of the sea and provides easy access to [Landmarks/Attractions]. Whether you seek a romantic getaway or a place to host memorable events, our location sets the stage for an unforgettable experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card text="dark" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2">Unwind in Style</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#CFEFFC'}}>
                Immerse yourself in the lap of luxury as you unwind by our breathtaking sea view infinity pool. Let the tranquil sounds of the waves and the panoramic views transport you to a world of serenity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card text="dark" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2">Indulge Your Senses</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#DCCFFC'}}>
                Our opulent accommodations, adorned with modern amenities and elegant decor, promise a stay that goes beyond expectations. Enjoy the perfect blend of comfort and sophistication.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card text="dark" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2">Exquisite Dining</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#F1ABDB'}}>
                Savor culinary delights crafted by our world-class chefs. From delectable seafood to international cuisine, our restaurants offer a gastronomic journey that caters to every palate.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card text="dark" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2">Personalized Service</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#F1D0AB'}}>
                Our dedicated staff is committed to providing personalized service, ensuring that your every need is met with warmth and efficiency. Experience hospitality at its finest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card  text="dark" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2">Events and Celebrations</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#ABF1D0'}}>
                Host your special events and celebrations against the backdrop of the sea. Our event spaces are designed to create memorable experiences for weddings, conferences, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card  text="dark" className="mb-3" style={{ border: 'none', borderRadius: '15px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title className="text-center p-2">Wellness and Relaxation</Card.Title>
              <Card.Text className=' rounded p-4' style={{backgroundColor: '#EFF1AB'}}>
                Rejuvenate your body and mind at our spa and wellness center. Indulge in a range of treatments and therapies that promote relaxation and well-being.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   
    <p className="display-4 text-center text-success mt-4 ">Book your stay at Sea View Hotel and Resort for an unforgettable experience.</p>
    
      
    </Container>
  );
};

export default About;

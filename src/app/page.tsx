import { Col, Container, Row } from 'react-bootstrap';
import { PeopleFill, FileEarmarkTextFill, Calendar2CheckFill } from 'react-bootstrap-icons';

const Home = () => (
  <Container className="py-3">
    <Row>
      <Col xs={4} className="text-center">
        <div className="text-center mb-3">
          <PeopleFill size={100} />
        </div>
        <div className="text-center">
          <h1>Multiple Users</h1>
          <h5>
            This address book enables any number of users to register and save their business contacts. 
            You can only see the contacts you have created.
          </h5>
        </div>
      </Col>

      <Col xs={4} className="text-center">
        <div className="text-center mb-3">
          <FileEarmarkTextFill size={100} />
        </div>
        <div className="text-center">
          <h1>Contact Details</h1>
          <h5>
            For each contact, you can save their name, address, and phone number.
          </h5>
        </div>
      </Col>

      <Col xs={4} className="text-center">
        <div className="text-center mb-3">
          <Calendar2CheckFill size={100} />
        </div>
        <div className="text-center">
          <h1>Timestamped Notes</h1>
          <h5>
            Each time you make contact with a contact, you can write a note that summarizes the conversation. 
            This note is saved along with a timestamp with the contact.
          </h5>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Home;

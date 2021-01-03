import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../styles/MoodSubmit.module.sass';

const Moods: React.FC = () => {
  return (
    <>
    <Container>

      <header>
        <img className={styles.logo} src="https://raw.githubusercontent.com/syntacticsugar/moodphile-react/master/images/moodphile-logo-med.png" />
      </header>

    </Container>

    <Form>
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <Form.Group>
              <Form.Control placeholder="...like reading in bed" />
              <Form.Label>WHAT ARE YOU DOING?</Form.Label>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={4}>
            <Form.Group>
              <Form.Control placeholder="bedroom, ex gf's house, etc" />
              <Form.Label>LOCATION</Form.Label>
            </Form.Group>
          </Col>
          <Col sm={6} md={4}>
              <Form.Group>
              <Form.Control placeholder="Brooklyn, New York" />
              <Form.Label>CITY/STATE</Form.Label>
            </Form.Group>
          </Col>
        </Row>
        <Row className={styles.moodButtons}>
          <Col>
            <Button className={styles.moodButton} variant="outline-primary">0</Button>
            <Button className={styles.moodButton} variant="outline-primary">1</Button>
            <Button className={styles.moodButton} variant="outline-primary">2</Button>
            <Button className={styles.moodButton} variant="outline-primary">3</Button>
            </Col>
        </Row>
        <Row>
          <Col>
            <Button className={styles.moodSubmitButton} variant="primary" size="lg">
              GO
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion style={{ 'backgroundColor': '#f0dce0' }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                ALSO...
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div>
                  <Row>
                    <Col xs={12} sm={1}>
                      <Form.Group>
                        <Form.Control placeholder="hrs" />
                        <Form.Label>SLEEP</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={4}>
                      <Form.Group>
                        <Form.Control placeholder="separated by commas" />
                        <Form.Label>VITAMINS, MEDICATIONS, ETC</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={2}>
                      <Form.Group>
                        <Form.Control placeholder="minutes" />
                        <Form.Label>SUNLIGHT</Form.Label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={7}>
                      <Form.Group>
                        <Form.Control placeholder="Just got news that..." />
                        <Form.Label>SPECIFIC EVENT</Form.Label>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Form>
    </>
  );
};

export default Moods;

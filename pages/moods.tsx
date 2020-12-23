import Form from 'react-bootstrap/Form';

const Moods: React.FC = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control size="sm" type="text" placeholder="...like reading in bed" />
        <Form.Label>WHAT ARE YOU DOING?</Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Control size="sm" type="text" placeholder="bedroom, ex gf's house, etc" />
        <Form.Label>LOCATION</Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Control size="sm" type="text" placeholder="Brooklyn, New York" />
        <Form.Label>CITY/STATE</Form.Label>
      </Form.Group>
    </Form>
  );
};

export default Moods;

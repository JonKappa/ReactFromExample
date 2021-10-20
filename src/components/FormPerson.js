import {useState} from 'react';
import { Button, Card, Form } from 'react-bootstrap';

export default function FormPerson({ addName }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    if (!firstName || !lastName) return;
    addName(`${firstName} ${lastName}`)
    setFirstName("");
    setLastName("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>First Name</b></Form.Label>
      <Form.Control type="text" className="input" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
      <Form.Label><b>Last Name</b></Form.Label>
      <Form.Control type="text" className="input" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />

    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}
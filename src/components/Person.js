import { Button, Card, Form } from 'react-bootstrap';
import "./Person.css";

export default function Person({ name, index, removePerson }) {
    return (
      <div
        className="person"
        
      >
        <span>{name}</span>
        <div>
          <Button variant="outline-danger" onClick={() =>removePerson(index)}>✕</Button>
        </div>
      </div>
    );
  }
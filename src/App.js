
import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from "./components/Person";
import FormPerson from "./components/FormPerson";

function App() {
  const [names, setNames] = React.useState([
    "WuTang"
  ]);

  const addName = text => {
    const newNames = [...names, text];
    setNames(newNames)
  };

  const removePerson = index =>{
    const newNames = [...names];
    newNames.splice(index,1);
    setNames(newNames)
  }  


  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Name List</h1>
        <FormPerson addName={addName} />
        <div>
        {names.map((name, index) => (
            <Card
            key={index}
              index={index}>
              <Card.Body
              >
              <Person
                key={index}
                index={index}
                name={name}
                removePerson={removePerson}
                />
                
              </Card.Body>

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
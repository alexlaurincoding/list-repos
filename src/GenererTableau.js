import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";



function GenererTableau({nom, setNom}){
  
  const handleChange = (event) => {
    setNom(event.target.value);
    
  }

  return (  
    <>  
    <InputGroup className="mb-3">
          <FormControl
            placeholder="GitHub username"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type = "text"
            value={nom}
            onChange={handleChange}
          />
      </InputGroup>

    </>
);
}


export default GenererTableau
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";


function TrouverUtilisateur({nom, setNom, setData, handleClick}){
  
  const handleChange = (event) => {
    setNom(event.target.value);   
  }

  const fetch = async () => {
    
    try {
      const res = await axios.get('https://api.github.com/users/'+nom+'/repos');
      console.log(res.data);
        
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleSubmit = (event) => {
    fetch();
    console.log("ici il y a du texte");
 
    event.preventDefault();
}

  return (  
    <>  
     <Form onSubmit={handleSubmit}>
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
          <Button variant="primary" type="submit" onClick={handleClick} className="mt-3 mb-3">
            Submit
          </Button>
         
      </Form>
    </>
);
}


export default TrouverUtilisateur
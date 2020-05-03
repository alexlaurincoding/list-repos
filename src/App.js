import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import GenererTableau from './GenererTableau';
import AfficherResultat from './AfficherResultat';



function App() {
  
  

  const [nom, setNom] = useState("");
  const [data, setData] = useState('Nothing yet');

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
    <div className="App">
      <header className="App-header">
      <Form onSubmit={handleSubmit}>
        <GenererTableau nom={nom} setNom={setNom}/>

          <Button variant="primary" type="submit" className="mt-3 mb-3">
            Submit
          </Button>
      </Form>
      </header>
      <main className="App-main">
      <AfficherResultat data = {data}/>
     
      </main>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Jumbotron from "react-bootstrap/Jumbotron";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
//import InputGroup from "react-bootstrap/InputGroup";
//import GenererTableau from './GenererTableau';
import AfficherResultat from './AfficherResultat';
import TrouverUtilisateur from './TrouverUtilisateur';



function App() {
  
  

  const [nom, setNom] = useState("");
  const [data, setData] = useState([]);
  const [showAffichage, setShowAffichage] = useState(false);

  const handleClick = () => {
    setShowAffichage(true);
  }




  return (
    <div className="App">
      <header className="App-header">
      <TrouverUtilisateur nom={nom} setNom={setNom} setData = {setData} handleClick = {handleClick} />
      </header>
      <main className="App-main">
      {showAffichage ?
      <AfficherResultat data = {data} />
      : null} 
      </main>
    </div>
  );
}

export default App;

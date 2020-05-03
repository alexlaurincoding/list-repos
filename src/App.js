import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AfficherResultat from './AfficherResultat';
import TrouverUtilisateur from './TrouverUtilisateur';



function App() {
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <TrouverUtilisateur setData = {setData} setShowResults = {setShowResults}/>
      </header>
      <main className="App-main">
      {showResults ?
      <AfficherResultat data = {data} />
      : null}
      </main>
    </div>
  );
}

export default App;

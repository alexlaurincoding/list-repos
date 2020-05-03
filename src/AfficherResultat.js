import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

function AfficherResultat({data}){

/*    const [liste, setListe] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  console.log(data.length)
  const createList = (event) =>{ 
    
    
    setListe([...liste, {
      id: setName(event.name),
      value:setUrl(event.html_url)
    }]);
  }

 for(let i = 0; i<data.length; i++){
   createList(data[i]);
 }  */


 
/* 
 for(let i = 0; i<liste.length; i++){
  console.log(liste[i]);
 }
  let liste = {
  id: "",
  data: ""
}
const List = () => {
  const [list, setList] = React.useState(data);
 */
  return (
 
      <>
     <Jumbotron>
 {/*     {liste.map(liste => (
        <li key={liste.id}>
          <div>{liste.id}</div>
          <div>{liste.data}</div>
        </li>
      ))} */}
      <label>
      <ul>
      <li>{data[0].name}{' '}<Button href={data[0].html_url}>Repo</Button></li>
      <li>{data[1].name}{' '}<Button href={data[1].html_url}>Repo</Button></li>
      <li>{data[2].name}{' '}<Button href={data[2].html_url}>Repo</Button></li>
      </ul>
    </label>
    </Jumbotron>
    </>
  )
    }
export default AfficherResultat;
 
 /* 
  
  return(
    <>
   <Jumbotron>
   {liste.map(liste => (
      <li key={liste.id}>
        <div>{liste.id}</div>
        <div>{liste.data}</div>
      </li>
    ))}
    <label>
    <ul>
    <li>{data[0].name}{' '}<Button href={data[0].html_url}>Repo</Button></li>
    <li>{data[1].name}{' '}<Button href={data[1].html_url}>Repo</Button></li>
    <li>{data[2].name}{' '}<Button href={data[2].html_url}>Repo</Button></li>
    </ul>
  </label>
  </Jumbotron>
  </>
  
     <Jumbotron>
   
    
    ) 
  }*/
 
  









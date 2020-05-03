import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function AfficherResultat({data}){
  
   
    if (data.length === 0) {
    return (     
          <Card body>Utilisateur inexistant</Card>
    )
      ;} 

  return (
 
      <>    
       <ul>
      {data.map(data => (
        <li key={data.name}>
          <Card body>
          <Container>
          <Row>
         <Col>{data.name}</Col>
         <Col xs lg={2}><Button href={data.html_url}>Repo</Button></Col>
         </Row>
         </Container>
         </Card>
        </li>
      ))} 
      </ul>
    </>
  )
    }
export default AfficherResultat;
 
 
  









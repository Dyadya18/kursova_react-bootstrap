import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (

      <Container className={"justify-content-center"}>
          <Header></Header>
          <Footer></Footer>
      </Container>


  );
}

export default App;

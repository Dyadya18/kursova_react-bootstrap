import React, {Component} from 'react';
import {Navbar,Row,Col , Nav, Form, FormControl, Button, Container} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Contacts from "../Pages/Contacts";
import History from "../Pages/History";


class Header extends Component {
    render() {
        return (
            <>
              <Container>
                  <Row>
                      <Col>
                        <Navbar.Brand href="/">
                            <img
                                  src={"http://www.gvkg.kiev.ua/images/slogan1.jpg"}
                                  height="100%"
                                  width="100%"
                                  className="d-inline-block align-top"
                                  alt="Logo"
                            />

                        </Navbar.Brand>
                      </Col>
                  </Row>
                  <Navbar className={"justify-content-md-center"} collapseOnSelect expend="md"  bg="white" variant="light">
                  <Row >
                      <Col>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                  <Nav className="mr-auto" style={{
                                      textTransform:" uppercase",
                                      fontSize: "1.3em",
                                      letterSpacing: "0.015em",
                                      lineHeight: "1.2em"
                                  }}>
                                      <Nav.Link href ="/" style={{color:"black", fontFamily:"Times"}}>Головна сторінка</Nav.Link>
                                      <Nav.Link href ="/news" style={{color:"green", fontFamily:"Times"}}>Новини центру</Nav.Link>
                                      <Nav.Link href ="/history" style={{color:"black", fontFamily:"Times"}}>Історія центру</Nav.Link>
                                      <Nav.Link href ="/contacts" style={{color:"green", fontFamily:"Times"}}>Контакти</Nav.Link>
                                    </Nav>
                            </Navbar.Collapse>
                      </Col>
                  </Row>
                  </Navbar>
              </Container>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/news" component={News}/>
                        <Route exact path="/history" component={History}/>
                        <Route exact path="/contacts" component={Contacts}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;
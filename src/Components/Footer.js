import React, {Component} from 'react';
import {Container, Col, Image, Row, ListGroup, NavLink} from "react-bootstrap";
import facebook from "C:/Users/vladOS/kyrsach/src/assets/logo-facebook.png"
import youtube from "C:/Users/vladOS/kyrsach/src/assets/youtube_PNG21.png"
import logo from "C:/Users/vladOS/kyrsach/src/assets/small-im.png"
function mapStateToProps(state) {
    return {};
}

class Footer extends Component {
    render() {
        return (
            <div style={{background:"#3b414a"}}>
                <Container>
                    <Row>
                        <Col className="mt-auto text-center">
                            <h6 style={{color:"white"}}>Підпишіться на новини</h6>
                            <ListGroup variant="flush" >
                                <ListGroup.Item style={{background:"#3b414a"}}>
                                    <NavLink href="https://www.facebook.com/GVKG.KYIV">
                                        <Row>
                                            <img
                                                src={facebook}
                                                width="30"
                                                height="30"
                                            />
                                            <h6 style={{color:"white"}} className="p-1">Facebook</h6>
                                        </Row>
                                    </NavLink>
                                </ListGroup.Item>
                                <ListGroup.Item style={{background:"#3b414a"}}>
                                    <NavLink href="https://www.youtube.com/channel/UCXn1X6KVJ4AkoNzrOpVbRYQ/featured">
                                        <Row>
                                            <img
                                                src={youtube}
                                                width="30"
                                                height="30"
                                            />
                                            <h6 style={{color:"white"}} className="p-1">Ми на You Tube</h6>
                                        </Row>
                                    </NavLink>
                                </ListGroup.Item>
                            </ListGroup>

                        </Col>
                        <Col className="text-center">
                            <Image src={logo} style={{weight:"200px", height:"200px", marginLeft:"auto", marginRight:"auto"}}/>
                        </Col>
                        <Col className="mt-auto text-right" >
                            <p style={{color:"white" }}><dfn style={{fontSize:"20px"}}>®</dfn>Всім 4 тобі 5</p>
                            <p style={{color:"white" }}>© ВСІ ПРАВА ЗАХИЩЕННІ</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Footer;
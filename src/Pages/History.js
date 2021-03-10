import React, {Component} from 'react';
import {Col, Container, Nav, NavItem, Row, ResponsiveEmbed, Image, NavLink} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import history from "C:/Users/vladOS/kyrsach/src/history/History National Military Medical Clinical Center.pdf"
import logo from "C:/Users/vladOS/kyrsach/src/history/images.png";

class History extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={4}>
                            <Row>
                            <Nav variant ="pills" className="flex-column mt-2">
                                <NavItem>
                                    <Nav.Link eventKey="first">Книга: "Історія Національного військово-медичного клінічного центру "ГВКГ"</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link eventKey="second">Відео про історію</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link eventKey="third">Відео: "Військовому госпіталю 265 років"</Nav.Link>
                                </NavItem>
                            </Nav>
                            </Row>
                            <Row className="mt-sm-5">
                                <NavLink href="https://covid19.gov.ua/">
                                    <Image src={logo} style={{weight:"150px", height:"150px"}} />
                                    <h5 className="text-center">Обережно: COVID-19</h5>
                                </NavLink>
                            </Row>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                        <ResponsiveEmbed>
                                            <embed style={{width:"100%", height:"100%"}} type="application/pdf" src={history} />
                                        </ResponsiveEmbed>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h3>Національний військово-медичний клінічний центр "Головний військовий клінічний госпіталь"</h3>
                                    <iframe src="https://www.youtube.com/embed/1QMnmlS3zT8" width="680" height="480" allowFullScreen></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h3>Головний військовий клінічний госпіталь 265 років досвіду</h3>
                                    <iframe src="https://www.youtube.com/embed/MtQ9M65g9mU" width="680" height="480" allowFullScreen></iframe>
                                    <p style={{fontFamily:"Times", fontSize:"20px"}}>Організатор: Міністерство оборони України.<br/>Спікер: полковник Геннадій Пєров - заступник начальника Національного військово-медичного центру з морально-психологічного забезпечення.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default History;
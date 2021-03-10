import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import Carousel from "react-bootstrap/Carousel";
import {Container, Col, Row, CardDeck, Card, Button, NavLink, Image, Accordion} from "react-bootstrap";
import logo from "C:/Users/vladOS/kyrsach/src/history/images.png";
import Tab from "react-bootstrap/Tab";
class Home extends Component {
    render() {
        return (
               <Container>
                   <Row>
                       <Col><CarouselBox/></Col>
                   </Row>
                   <Row className="mt-sm-5">
                       <Accordion className="mr-auto ml-auto">
                           <Card>
                               <Card.Header style={{backgroundColor:"#d10d0d"}}>
                                   <Accordion.Toggle  as={Button} variant="link" eventKey="0">
                                       <Row>
                                           <Col>
                                               <h3 style={{color:"white"}}>Коронавірус або COVID-19</h3>
                                           </Col>
                                       </Row>
                                   </Accordion.Toggle>
                               </Card.Header>
                               <Accordion.Collapse eventKey="0">
                                   <Card.Body>
                                       <Row className="mr-auto ml-auto">
                                       <Col>
                                           <iframe src="https://www.youtube.com/embed/7sB1spBBngw" width="680" height="480" allowFullScreen></iframe>
                                       </Col>
                                       <NavLink className="mt-auto mb-auto ml-auto mr-auto" href="https://covid19.gov.ua/">
                                           <Image src={logo} style={{weight:"150px", height:"150px"}} />
                                           <h5 className="text-center">Обережно: COVID-19</h5>
                                       </NavLink>
                                       </Row>
                                   </Card.Body>
                               </Accordion.Collapse>
                           </Card>
                       </Accordion>
                   </Row>
                   <Row>
                   <Col>
                   <h2 className="text-center m-4">Керівний склад</h2>
                   <CardDeck className="m-4">
                       <Card bg="dark">
                           <Card.Img
                               variant="top"
                               src = "http://www.gvkg.kiev.ua/images/stories/administratuvnuy/0843.jpg"
                           />
                           <Card.Body style={{color:"white"}}>
                               <Card.Title>Казмірчук Анатолій Петрович</Card.Title>
                               <Card.Text>
                                   Начальник Національного військово-медичного клінічного центру „Головний військовий клінічний госпіталь” генерал-майор медичної служби.
                               </Card.Text>
                               <Button variant="primary">Дізнатися більше</Button>
                           </Card.Body>
                       </Card>
                       <Card bg="dark">
                           <Card.Img
                               variant="top"
                               src = "http://gvkg.kiev.ua/images/stories/administratuvnuy/lashin.png"
                               style={{width:312, height:310}}
                           />
                           <Card.Body style={{color:"white"}}>
                               <Card.Title>Лашин Олександр Іванович</Card.Title>
                               <Card.Text>
                                   Заступник начальника Національного військово-медичного клінічного центру „Головний військовий клінічний госпіталь”, полковник медичної служби.
                               </Card.Text>
                               <Button variant="primary">Дізнатися більше</Button>
                           </Card.Body>
                       </Card>
                       <Card bg="dark">
                           <Card.Img
                               variant="top"
                               style={{width:312, height:310}}
                               src = "http://gvkg.kiev.ua/images/stories/administratuvnuy/sis_f.jpg"
                           />
                           <Card.Body style={{color:"white"}}>
                               <Card.Title>Циц Олександр Віталійович</Card.Title>
                               <Card.Text>
                                   Заступник начальника Національного військового-медичного клінічного центру ''Головний військовий клінічний госпіталь''– з медичної частини - начальник медичної частини, полковник медичної служби.
                               </Card.Text>
                               <Button variant="primary">Дізнатися більше</Button>
                           </Card.Body>
                       </Card>
                   </CardDeck>
                    </Col>
                   </Row>
                   <Row>
                       <Col>
                           <CardDeck className="m-4">
                               <Card bg="dark">
                                   <Card.Img
                                       variant="top"
                                       src = "http://gvkg.kiev.ua/images/stories/administratuvnuy/perov.png"
                                       style={{width:312, height:310}}
                                   />
                                   <Card.Body style={{color:"white"}}>
                                       <Card.Title>Пєров Геннадій Борисович</Card.Title>
                                       <Card.Text>
                                           Заступник начальника Національного військово-медичного клінічного центру „Головний військовий клінічний госпіталь” з морально-психологічного забезпечення - начальник відділення морально-психологічного забезпечення, полковник.
                                       </Card.Text>
                                       <Button variant="primary">Дізнатися більше</Button>
                                   </Card.Body>
                               </Card>
                               <Card bg="dark">
                                   <Card.Img
                                       variant="top"
                                       src = "http://gvkg.kiev.ua/images/stories/xirurgish/abdominalna/KAX/Gibalo.png"
                                       style={{width:312, height:310}}
                                   />
                                   <Card.Body style={{color:"white"}}>
                                       <Card.Title>Гибало Ростислав Віталійович</Card.Title>
                                       <Card.Text>
                                           Провідний хірург Національного військово-медичного клінічного центру „Головний військовий клінічний госпіталь”,полковник медичної служби .
                                       </Card.Text>
                                       <Button variant="primary" className="mt-auto">Дізнатися більше</Button>
                                   </Card.Body>
                               </Card>
                               <Card bg="dark">
                                   <Card.Img
                                       variant="top"
                                       style={{width:312, height:310}}
                                       src = "http://gvkg.kiev.ua/images/stories/administratuvnuy/masnikov.jpg"
                                   />
                                   <Card.Body style={{color:"white"}}>
                                       <Card.Title>Мясников Георгій Вікторович</Card.Title>
                                       <Card.Text>
                                           Заступник начальника Національного військового-медичного клінічного центру ''Головний військовий клінічний госпіталь'' – Головноий терапевт МО України, полковник медичної служби. Народився 19 січня 1962 року в м. Києві.
                                       </Card.Text>
                                       <Button variant="primary">Дізнатися більше</Button>
                                   </Card.Body>
                               </Card>
                           </CardDeck>
                       </Col>
                   </Row>
               </Container>

        );
    }
}

export default Home;
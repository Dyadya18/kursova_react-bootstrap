import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {Button, Col, Row, Card, ListGroup} from "react-bootstrap";


class Contacts extends Component {
    render() {
        return (
           <Container>
               <Row className="m-4">
                   <Col>
                       <h1>Контакти</h1>
                   </Col>
               </Row>
               <Row className="m-4">
                   <Col className="mt-auto mb-auto">
                       <Card style={{ width: '18rem' }} className="m-4">
                           <Card.Header>Адреса</Card.Header>
                           <ListGroup variant="flush">
                               <ListGroup.Item>Київ, вул. Госпітальна, 18</ListGroup.Item>
                           </ListGroup>
                       </Card>
                       <Card style={{ width: '18rem' }} className="m-4">
                           <Card.Header>Черговий "ГВКГ"</Card.Header>
                           <ListGroup variant="flush">
                               <ListGroup.Item>(044) 529 45 54</ListGroup.Item>
                           </ListGroup>
                       </Card>
                       <Card style={{ width: '18rem' }} className="m-4">
                           <Card.Header>Приймальня</Card.Header>
                           <ListGroup variant="flush">
                               <ListGroup.Item>+380(44)521-83-26</ListGroup.Item>
                               <ListGroup.Item>+380(44)529-70-95</ListGroup.Item>
                               <ListGroup.Item>(067) 548-16-06</ListGroup.Item>
                               <ListGroup.Item>(095) 821-24-91</ListGroup.Item>
                           </ListGroup>
                       </Card>
                       <Card style={{ width: '18rem' }} className="m-4">
                           <Card.Header>E-mail</Card.Header>
                           <ListGroup variant="flush">
                               <ListGroup.Item>gospital@gvkg.kiev.ua</ListGroup.Item>
                           </ListGroup>
                       </Card>
                   </Col>
                   <Col className="mt-auto mb-auto">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20333.18076420741!2d30.52539426716532!3d50.42903715678738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf046e35193b%3A0x3f27e2433d51bd9b!2z0JPQu9Cw0LLQvdGL0Lkg0LLQvtC10L3QvdGL0Lkg0LrQu9C40L3QuNGH0LXRgdC60LjQuSDQs9C-0YHQv9C40YLQsNC70Ywg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINC-0LHQvtGA0L7QvdGLINCj0LrRgNCw0LjQvdGL!5e0!3m2!1sru!2sua!4v1605783704748!5m2!1sru!2sua"
                               width="600" height="450">
                       </iframe>
                   </Col>
               </Row>
               <h1 className="text-center">Зв'яжіться з нами</h1>
               <Row className="m-4">
                       <Col className="mt-auto mb-auto">
                           <Form>
                               <Row>
                                   <Col className="mt-auto mb-auto">
                                       <h6>Напишіть свій номер телефону і ми з вами зв'яжимось</h6>
                                       <Form.Control placeholder="Номер телефону" />
                                       <Button className="mt-2" variant="primary" type="submit">Надіслати</Button>
                                   </Col>
                               </Row>
                           </Form>
                       </Col>
                       <Col style={{backgroundColor:"#d1d1d1"}}>
                           <h4 className="text-center mt-2">Напишіть нам своє звернення</h4>
                       <Form>
                           <Form.Group controlId="formBasicEmail">
                               <Form.Label>E-mail адрес</Form.Label>
                               <Form.Control type="email" placeholder="Enter email"/>
                               <Form.Text>
                                   We will never share your email with anyone else
                               </Form.Text>
                           </Form.Group>
                           <Form.Group controlId="formBasicPassword">
                               <Form.Label>Ваше звернення</Form.Label>
                               <Form.Control as="textarea" rows=""></Form.Control>
                           </Form.Group>
                           <Form.Group controlId="formBasicCheckBox">
                               <Form.Check type="checkbox" label ="Check me out"></Form.Check>
                           </Form.Group>
                           <Button className="mb-2" variant="primary" type="submit">Надіслати</Button>
                       </Form>
                       </Col>  

               </Row>
           </Container>
        );
    }
}

export default Contacts;
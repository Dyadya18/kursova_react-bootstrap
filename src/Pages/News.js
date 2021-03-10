import React, {Component} from 'react';
import {Image, NavLink, Tab} from "react-bootstrap";
import {Container, Row,Col,Media, ListGroup, Card} from "react-bootstrap";
import logo from "C:/Users/vladOS/kyrsach/src/history/images.png";


class News extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="8">
                        <Media className="m-4">
                            <img
                            width={250}
                            height={180}
                            сlassName = "mr-3"
                            src="http://www.gvkg.kiev.ua/images/stories/novunu-centry/25.08.2020/11.jpg"
                            ></img>
                            <Media.Body className="ml-2">
                                <h5>Володимир та Олена Зеленські відвідали військовий клінічний госпіталь

                                    і поспілкувалися з пораненими захисниками України</h5>
                                <p>У День Незалежності України Президент Володимир Зеленський з дружиною Оленою відвідали Національний військово-медичний клінічний центр «Головний військовий клінічний госпіталь» і поспілкувалися з пораненими захисниками та їхніми близькими.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-4">
                            <img
                                width={250}
                                height={180}
                                сlassName = "mr-3"
                                src="http://www.gvkg.kiev.ua/images/stories/novunu-centry/16.06.2020/11.jpg"
                            ></img>
                            <Media.Body className="ml-2">
                                <h5>Київському військовому госпіталю 265 років</h5>
                                <p>«…у Києві, яко місті знатному і багатолюдному шпиталь заснувати хоча б на 50 чоловік хворих і до оного визначити комісара, а для хворих доктора, якому гарнізонних полків хворих у нагляд доручити, лікаря одного й аптекаря одного»

                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-4">
                            <img
                                width={250}
                                height={180}
                                сlassName = "mr-3"
                                src="http://www.gvkg.kiev.ua/images/stories/novunu-centry/14.06.2020/11.jpg"
                            ></img>
                            <Media.Body className="ml-2">
                                <h5>Військові льотчики вперше перевезли хворого на COVID-19</h5>
                                <p>Спеціальний військово-транспортний літак Повітряних Сил ЗС України Ан-26 Vita вперше здійснив переліт із хворим на Covid-19. Хворого військовослужбовця у важкому стані доправили до столиці для подальшого лікування. Аби інфекція не поширилась на членів екіпажу, пілоти виконували рейс у захисних медичних костюмах поверх льотних комбінезонів, окулярах та масках. Хворий військовослужбовець був поміщений у спеціальну капсулу.

                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col sm="3" className="m-4">
                        <h5 className="text-center">Новини основних відомств України</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item><NavLink href="https://www.mil.gov.ua/news/">Новини Міністерство оборони</NavLink></ListGroup.Item>
                                <ListGroup.Item><NavLink href="https://moz.gov.ua/novini">Новини Міністерство охорони здоров'я</NavLink></ListGroup.Item>
                                <ListGroup.Item><NavLink href="https://www.rada.gov.ua/news/Top-novyna/">Новини Верховної ради України</NavLink></ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Row className="mt-sm-5">
                            <NavLink href="https://covid19.gov.ua/">
                                <Image src={logo} style={{weight:"150px", height:"150px"}} />
                                <h5 className="text-center">Обережно: COVID-19</h5>
                            </NavLink>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default News;
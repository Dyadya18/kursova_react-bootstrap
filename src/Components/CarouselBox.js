import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import hospital from "../assets/gl_str3.png";
import  winter1 from "../assets/maxre.jpg"
import  winter from "../assets/2.jpg"
import carousel from "./zastavka.jpg"

class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="m-auto h-auto"
            >
                <Carousel.Item>
                    <img
                        className="d-block  m-auto w-100"
                        src={hospital}
                    />
                    <Carousel.Caption>
                        <h3>Київському військовому госпіталю 265 років</h3>
                        <p>Центральні ворота госпіталю</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block m-auto w-100"
                        src={winter}
                    />
                    <Carousel.Caption>
                        <div style={{background:"white", opacity:"0.7"}}>
                            <h3 style={{color:"black"}}>Володимир та Олена Зеленські відвідали військовий клінічний госпіталь</h3>
                            <p style={{color:"black"}}>і поспілкувалися з пораненими захисниками України</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block m-auto w-100"
                        src={winter1}
                    />
                    <Carousel.Caption>
                        <h3>Національний військово-медичний клінічний центр "ГВКГ"</h3>
                        <p>Фото з повітря 19 червня 2020 рік</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default CarouselBox;
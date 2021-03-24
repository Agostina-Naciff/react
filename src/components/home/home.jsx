import { Carousel } from "react-bootstrap"
import './home.css'

const HomeComponent = () => {

    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 carousel" alt="No image" src="./assets/ecommerce-banner.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel" alt="No image" src="./assets/unnamed.jpg"/>
            <Carousel.Caption>
                <h2 className="text">Hacemos reparaciones</h2>
                <p className="text">Reparaciones de calidad con garantia</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )

}

export default HomeComponent;
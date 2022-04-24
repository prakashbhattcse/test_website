import React,{ useState } from 'react';
import './Navbar.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const redbike = require('../assets/bike-red.png');
const bluebike = require('../assets/bike-blue.png');
const black = require('../assets/scooter-black.png');
const red = require('../assets/scooter-red.png');
const bike = { redbike, bluebike };
const scooter = { red, black };


const Navbar = () => {

    const [selected, setSelected] = useState(scooter.red);
    const [ bikeselected, bikesetSelected] = useState(bike.bluebike);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid mx-3">
                    <img src='./logo.png' alt='' className='img-fluid logo'></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <button type="button" className="btn btn-dark rounded-pill">Contact Us</button>


                        </ul>

                    </div>
                </div>
            </nav>

    

            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block scooter-img mx-auto "
                            src={selected}
                            alt="First slide"
                        />
                        <Carousel.Caption className='d-flex justify-content-between flex-row scooter-caption'>
                      
                            <h1>SPARROW</h1>
                            <div className='d-flex align-items-center' >
                                <button onClick={() => setSelected(scooter.black)} className="color bg-dark active-color"></button>
                                <button onClick={() => setSelected(scooter.red)} className="color bg-danger"></button>

                            </div>
                            <h1>STANDARD</h1>
                            <Button
                              className='button-bg'  
                            >
                                Know More
                            </Button>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block scooter-img mx-auto"
                            src={bikeselected}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='d-flex justify-content-between flex-row scooter-caption'>
                        
                            <h1>CUB</h1>
                            <div className='d-flex align-items-center'>
                                <button onClick={() => bikesetSelected(bike.bluebike)} className="color bg-primary active-color"></button>
                                <button onClick={() => bikesetSelected(bike.redbike)} className="color bg-danger"></button>

                            </div>
                            <h1>STANDARD</h1>
                            <Button
                              className='button-bg'  
                            >
                                Know More
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block scooter-img mx-auto"
                            src="https://tedi-ev.s3.us-west-1.amazonaws.com/IMAGES/pug/compressed/Red+white.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='d-flex justify-content-between flex-row scooter-caption'>
                            <h1>PUG</h1>
                            <h1>STANDARD</h1>
                            <Button
                              className='button-bg'  
                            >
                                Know More
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block scooter-img mx-auto"
                            src="https://tedi-ev.s3.us-west-1.amazonaws.com/IMAGES/sparrowPlus/compressed/Black.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='d-flex justify-content-between flex-row scooter-caption'>

                            <h1>SPARROW</h1>
                            <h1>ACCESSORIES KIT</h1>
                            <Button
                              className='button-bg'  
                            >
                                Know More
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block scooter-img mx-auto"
                            src="https://tedi-ev.s3.us-west-1.amazonaws.com/IMAGES/cubPlus/compressed/Red.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='d-flex justify-content-between flex-row scooter-caption'>
                            <h1>CUB</h1>
                            <h1>ACCESSORIES KIT</h1>
                            <Button
                              className='button-bg'  
                            >
                                Know More
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}

export default Navbar
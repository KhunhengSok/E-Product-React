import React from 'react';

import './homepage.styles.scss';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Slider from "../../../components/slider/slider.component";
import ProductSmartphone from "./ProductSmartphone";
import ProductCamera from "./ProductCamera";
import ProductLaptop from "./ProductLaptop";

class HomePage extends React.Component {
    render() {
        return (

            <div className='homepage'>
                <div className='set-size-carousel'>
                    <Slider/>
                </div>
                <div className='banner-container'>
                    <Row className='banner-row'>
                        <div className='banner-block'>
                            <div className='banner-inner'>
                                <div className='banner-wrap'>
                                    <Link className='banner-link' to='/LapTop'>
                                        <div className='banner-img'>
                                            <img src={require('../../../assets/img/product01.png')} alt='I am Asus'/>
                                        </div>
                                        <div className='banner-text'>
                                            <div className='text-inner'>
                                                <div className='p-t-10 p-b-10'>Laptop</div>
                                                <div className='p-t-10 p-b-10'>Collection</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='banner-block'>
                            <div className='banner-inner'>
                                <div className='banner-wrap'>
                                    <Link className='banner-link' to='/LapTop'>
                                        <div className='banner-img'>
                                            <img src={require('../../../assets/img/product02.png')} alt='I am Asus'/>
                                        </div>
                                        <div className='banner-text'>
                                            <div className='text-inner'>
                                                <div className='p-t-10 p-b-10'>Laptop</div>
                                                <div className='p-t-10 p-b-10'>Collection</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='banner-block'>
                            <div className='banner-inner'>
                                <div className='banner-wrap'>
                                    <Link className='banner-link' to='/LapTop'>
                                        <div className='banner-img'>
                                            <img src={require('../../../assets/img/product02.png')} alt='I am Asus'/>
                                        </div>
                                        <div className='banner-text'>
                                            <div className='text-inner'>
                                                <div className='p-t-10 p-b-10'>Laptop</div>
                                                <div className='p-t-10 p-b-10'>Collection</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
                <ProductCamera/>
                <ProductSmartphone/>
                <ProductLaptop/>
            </div>
        );
    }
}

export  default HomePage;
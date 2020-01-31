import React from "react";
import { Link } from "react-router-dom";

import '../footer/footer.styles.scss';
import { Container, Col, Row} from 'reactstrap';

const Footer = () => (

    <footer >
       <div id='footer-container'>
           <div className='family-footer'>
               <Container>
                   <Row>
                       {/*ABout Us Section*/}
                       <Col md='3' xs='6' className='center-col-item'>
                           <div className='footer-item'>
                               <h3 className='footer-title'>About Us</h3>
                               <ul className='footer-links'>
                                   <li><Link to='/'><i className="fa fa-globe"/>Location</Link></li>
                                   <li><Link to='/'><i className="fa fa-map-marker"/>1734 Stonecoal Road</Link></li>
                                   <li><Link to='/'><i className="fa fa-phone"/>+021-95-51-84</Link></li>
                                   <li><Link to='/'><i className="fa fa-envelope-o"/>email@email.com</Link></li>
                                   <li><Link to='/'><i className="fa fa-facebook-official"/>FaceBook</Link></li>
                               </ul>
                           </div>
                       </Col>

                       {/*Categories Section*/}
                       <Col md='3' xs='6' className='center-col-item'>
                           <div className='footer-item'>
                               <h3 className='footer-title'>Categories</h3>
                               <ul className="footer-links">
                                   <li><Link to='/'>Hot deals</Link></li>
                                   <li><Link to='/'>Laptops</Link></li>
                                   <li><Link to='/'>Smartphones</Link></li>
                                   <li><Link to='/'>Cameras</Link></li>
                                   <li><Link to='/'>Accessories</Link></li>
                               </ul>
                           </div>
                       </Col>

                       <div className="clearfix visible-xs"/>

                       {/*Information Section*/}
                       <Col md='3' xs='6' className='center-col-item'>
                           <div className='footer-item'>
                               <h3 className='footer-title'>Information</h3>
                               <ul className="footer-links">
                                   <li><Link to='/'>About Us</Link></li>
                                   <li><Link to='/'>Contact Us</Link></li>
                                   <li><Link to='/'>Privacy Policy</Link></li>
                                   <li><Link to='/'>Orders and Returns</Link></li>
                                   <li><Link to='/'>Terms & Conditions</Link></li>
                               </ul>
                           </div>
                       </Col>

                       {/*Service Section*/}
                       <Col md='3' xs='6' className='center-col-item'>
                           <div className='footer-item'>
                               <h3 className='footer-title'>Service</h3>
                               <ul className="footer-links">
                                   <li><Link to='/'>My Account</Link></li>
                                   <li><Link to='/'>View Cart</Link></li>
                                   <li><Link to='/'>Wishlist</Link></li>
                                   <li><Link to='/'>Track My Order</Link></li>
                                   <li><Link to='/'>Help</Link></li>
                               </ul>
                           </div>
                       </Col>
                   </Row>
               </Container>
           </div>
           <div id='bottom-footer' className='family-footer'>
                <Container>
                    <Row>
                        <Col md='12' className='text-center'>
                            <ul className="footer-payments">
                                <li><Link to="#"><i className="fa fa-cc-visa"/></Link></li>
                                <li><Link to="#"><i className="fa fa-credit-card"/></Link></li>
                                <li><Link to="#"><i className="fa fa-cc-paypal"/></Link></li>
                                <li><Link to="#"><i className="fa fa-cc-mastercard"/></Link></li>
                                <li><Link to="#"><i className="fa fa-cc-discover"/></Link></li>
                                <li><Link to="#"><i className="fa fa-cc-amex"/></Link></li>
                            </ul>
                            <span className='copyright'>
                                Copyright &copy; 2011-2019 Inc. All rights reserved. User Agreement & Respect Privacy and Policy
                            </span>
                        </Col>
                    </Row>
                </Container>
           </div>
       </div>
    </footer>

);

export default Footer;
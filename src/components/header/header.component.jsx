import React from "react";
import SideBar from '../sidebar/sideBar.component';

import { Row } from 'reactstrap';
import './header.styles.scss';
import "../../assets/scss/defaultStyle/util.scss";
import '../sidebar/sideBar.styles.scss';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/eco-e - official.svg';
import { ReactComponent as Image } from '../../assets/shopping-everywhere-right-sidelogo.svg';
import SearchBar from "../searchbar/SearchBar.component";



const Header = () => (

    <header>
        <div id='header'>
            <div className='nav-top flex-sb-m'>
                <div className='nav-left'>
                    <Row>
                        <SideBar/>
                        <Logo className='svg-logo'/>
                    </Row>
                </div>
                <div className='nav-middle'>
                   <SearchBar/>
                </div>
                <div className='nav-right'>
                    <div className='nav-list'>
                        <i className='fa fa-language'/>
                        <div>Eng</div>
                    </div>

                    <div className='nav-list'>
                        <i className='fa fa-user-plus'/>
                        <div> Account</div>
                    </div>

                    <div className='nav-list'>
                        {/*<i className='fa fa-user-plus'/>*/}
                        <div> Order</div>
                    </div>
                    <div className='nav-list'>
                        <i className='fa fa-shopping-cart'/>
                        <div> MyCart</div>
                    </div>
                </div>
            </div>
            <div className='nav-bottom'>
                <div className='left-main-nav-bar m-t-5 m-b-5'>
                    <nav>
                        <div>
                           <Link to='/' className='link-url'>Home</Link>
                           <Link to='/' className='link-url'>Hot Deals</Link>
                           <Link to='/' className='link-url'>Laptop</Link>
                           <Link to='/' className='link-url'>Smartphone</Link>
                           <Link to='/' className='link-url'>Camera</Link>
                           <Link to='/' className='link-url'>Headphone</Link>
                        </div>
                    </nav>
                </div>
                <div className='main-nav-bar m-l-50 m-r-10'>
                    <Image className='img-svg'/>
                </div>
            </div>


        </div>
    </header>

);

export default Header;
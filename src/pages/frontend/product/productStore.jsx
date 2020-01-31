import React from "react";
import { Link }  from "react-router-dom";

import "./productStore.scss";

const ProductStore = () => {

    return(
        <div>
            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Store</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div id="aside" className="col-md-3">

                            <div className="aside">
                                <h3 className="aside-title">Categories</h3>
                                <div className="checkbox-filter">
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-1"/>
                                            <label htmlFor="category-1">
                                                <span/>
                                                Laptops
                                                <small>(120)</small>
                                            </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-2"/>
                                            <label htmlFor="category-2">
                                                <span/>
                                                Smartphones
                                                <small>(740)</small>
                                            </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-3"/>
                                            <label htmlFor="category-3">
                                                <span/>
                                                Cameras
                                                <small>(1450)</small>
                                            </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-4"/>
                                            <label htmlFor="category-4">
                                                <span/>
                                                Accessories
                                                <small>(578)</small>
                                            </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-5"/>
                                            <label htmlFor="category-5">
                                                <span/>
                                                Laptops
                                                <small>(120)</small>
                                            </label>
                                    </div>

                                    <div className="input-checkbox">
                                        <input type="checkbox" id="category-6"/>
                                            <label htmlFor="category-6">
                                                <span/>
                                                Smartphones
                                                <small>(740)</small>
                                            </label>
                                    </div>
                                </div>
                            </div>

                            <div className="aside">
                                <h3 className="aside-title">Price</h3>
                                <div className="price-filter">
                                    <div id="price-slider"/>
                                    <div className="input-number price-min">
                                        <input id="price-min" type="number"/>
                                            <span className="qty-up">+</span>
                                            <span className="qty-down">-</span>
                                    </div>
                                    <span>-</span>
                                    <div className="input-number price-max">
                                        <input id="price-max" type="number"/>
                                            <span className="qty-up">+</span>
                                            <span className="qty-down">-</span>
                                    </div>
                                </div>
                            </div>

                            <div className="aside">
                                <h3 className="aside-title">Brand</h3>
                                <div className="checkbox-filter">
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-1"/>
                                            <label htmlFor="brand-1">
                                                <span/>
                                                SAMSUNG
                                                <small>(578)</small>
                                            </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-2"/>
                                            <label htmlFor="brand-2">
                                                <span/>
                                                LG
                                                <small>(125)</small>
                                            </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-3"/>
                                            <label htmlFor="brand-3">
                                                <span/>
                                                SONY
                                                <small>(755)</small>
                                            </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-4"/>
                                            <label htmlFor="brand-4">
                                                <span/>
                                                SAMSUNG
                                                <small>(578)</small>
                                            </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-5"/>
                                            <label htmlFor="brand-5">
                                                <span/>
                                                LG
                                                <small>(125)</small>
                                            </label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="brand-6"/>
                                            <label htmlFor="brand-6">
                                                <span/>
                                                SONY
                                                <small>(755)</small>
                                            </label>
                                    </div>
                                </div>
                            </div>

                            <div className="aside">
                                <h3 className="aside-title">Top selling</h3>
                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src={require("../../../assets/img/product01.png")} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del
                                            className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>

                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src={require("../../../assets/img/product02.png")} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del
                                            className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>

                                <div className="product-widget">
                                    <div className="product-img">
                                        <img src={require("../../../assets/img/product07.png")} alt=""/>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><Link to="#">product name goes here</Link></h3>
                                        <h4 className="product-price">$980.00 <del
                                            className="product-old-price">$990.00</del></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="store" className="col-md-9">
                            <div className="store-filter clearfix">
                                <div className="store-sort">
                                    <label>
                                        Sort By:
                                        <select className="input-select">
                                            <option value="0">Popular</option>
                                            <option value="1">Position</option>
                                        </select>
                                    </label>

                                    <label>
                                        Show:
                                        <select className="input-select">
                                            <option value="0">20</option>
                                            <option value="1">50</option>
                                        </select>
                                    </label>
                                </div>
                                <ul className="store-grid">
                                    <li className="active"><i className="fa fa-th"/></li>
                                    <li><Link to="#"><i className="fa fa-th-list"/></Link></li>
                                </ul>
                            </div>

                            <div className="row">
                                <deiv className="product">
                                    <div className="product-img">
                                        <img src={require("../../../assets/img/product01.png")} alt=""/>
                                        <div className="product-label">
                                            <span className="sale">-30%</span>
                                            <span className="new">NEW</span>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name">
                                            <Link to="#">product name goes here</Link>
                                        </h3>
                                        <h4 className="product-price">$980.00 <del
                                            className="product-old-price">$990.00</del></h4>
                                        <div className="product-rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/>
                                        </div>
                                        <div className="product-btns">
                                            <button className="add-to-wishlist">
                                                <i className="fa fa-heart-o"/><span className="tooltipp">add to wishlist</span>
                                            </button>
                                            <button className="add-to-compare">
                                                <i className="fa fa-exchange"/><span className="tooltipp">add to compare</span></button>
                                            <button className="quick-view">
                                                <i className="fa fa-eye"/><span className="tooltipp">quick view</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <button className="add-to-cart-btn">
                                            <i className="fa fa-shopping-cart"/> add to cart
                                        </button>
                                    </div>
                                </deiv>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStore;
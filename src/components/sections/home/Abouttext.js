import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Abouttext extends Component {
    render() {
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sigma_about mb-5 mb-lg-0">
                                <div className="sigma_about-title">
                                    <h6 className="sub-heading">About Us</h6>
                                    <h3>We make shipping big stuff easy</h3>
                                </div>
                                <div className="sigma_about-content">
                                    <p className="m-0">Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain</p>
                                    <div className="sigma_general-list style-2">
                                        <ul>
                                            <li>
                                                <i className="fa fa-check" />
                                                <span>Furniture, Appliances</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <span>Farm, Construction</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                <span>Cars, Motorcycles, Trailers, Parts</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="important-text">As one of the world’s leading non-asset-based supply chain management companies, we design and implement industry-leading solutions</p>
                                    <Link to="/about" className="btn">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sigma_about">
                                <div className="sigma_about-image-1">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/about/1.jpg"} alt="img" />
                                </div>
                                <div className="sigma_about-image-2 d-none d-sm-block">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/about/2.jpg"} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abouttext;
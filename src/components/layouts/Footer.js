import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="sigma_footer style-2 section-padding pb-0">
                <div className="container">
                    <div className="sigma_footer-top">
                        <div className="sigma_footer-logo">
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
                        </div>
                        <div className="footer-item">
                            <ul className="sigma_footer-links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/faqs">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="follow_us m-0">
                            <ul>
                                <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                                <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                                <li><Link to="#"><i className="fa fa-behance" /></Link></li>
                                <li><Link to="#"><i className="fa fa-internet-explorer" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sigma_footer-bottom">
                        <div className="sigma_footer-copyright">
                            <p className="mb-0"> Copyright ©
                                <Link to="/contact"> ScrepsLLc.com 2023</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;
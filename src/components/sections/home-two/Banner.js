import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div id="intro">
                <div className="container">
                    <div className="intro_text">
                        <h5>Expert Screen repair services</h5>
                        <h1>ScRepS</h1>
                        <Link to="/services" className="btn">Location</Link>
                        <Link to="/contact" className="btn light-bg">Call us</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
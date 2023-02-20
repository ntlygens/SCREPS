import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from '../../../data/services.json';

class Services extends Component {
    render() {
        return (
            <div className="section-padding pt-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Our Transpotations</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>The Best Logistic Transpotation Provider</h2>
                    </div>
                    <div className="row">
                        {serviceblock.slice(0, 4).map((item, i) => (
                            <div className="col-md-6" key={i}>
                                <div className="service_box">
                                    <div className="icon_wp">
                                        <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} />
                                    </div>
                                    <h3><Link to="/service-details">{item.title}</Link></h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
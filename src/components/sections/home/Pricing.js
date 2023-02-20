import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pricing from '../../../data/pricing.json';

class Pricing extends Component {
    render() {
        return (
            <div className="section-padding-2">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Our Pricing Plan</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Trucking and Freight Transport</h2>
                    </div>
                    <div className="row">
                        {pricing.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className={"sigma_pricing" + (item.id === 2 ? ' primary-bg' : '')}>
                                    <div className="sigma_pricing-top">
                                        <span className="sigma_pricing-icon">
                                            <i className={item.icon} />
                                        </span>
                                        <span className="sigma_pricing-title">{item.planname}</span>
                                        <span className="sigma_pricing-rate">${item.price}</span>
                                        <p className="m-0">{item.period}</p>
                                    </div>
                                    <div className="sigma_general-list style-3">
                                        <ul>
                                            {item.includes.map((list, i) => (
                                                <li key={i}>
                                                    <i className="fa fa-check" />
                                                    <span>{list}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link to="/contact" className={"btn" + (item.id === 2 ? ' light-bg' : '')}>Submit Request</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
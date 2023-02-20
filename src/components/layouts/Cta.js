import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <div className="quick_start section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Buy Today And Get 20% Off</h2>
                            <p>We have the great collection of distinct and powerful sliders in Grayson to showcase your top products and highlight your</p>
                            <Link to="/shop" className="btn">Shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cta;
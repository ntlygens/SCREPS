import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Infotext extends Component {
    render() {
        return (
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img dots_bg">
                                <img src={process.env.PUBLIC_URL + "/assets/images/540x530.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_company">
                                <h6 className="sub-heading">THEY ARE ALL PROFESSIONALS</h6>
                                <h3>We are suitable for better tomorrow</h3>
                                <p>We are a multicultural and customer centric trip support company that is always striving for excellence in the services we provide. Our testament that we will never tire in serving our clients around the clock is our team's creed and is instilled in our core values.</p>
                                <p>We are one of the few companies that can truly offer worldwide trip support services with the highest service standards, is ISO certified and cost efficient, and will effectively allow you to save valuable time and resources.</p>
                                <Link to="/about" className="btn">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Infotext;
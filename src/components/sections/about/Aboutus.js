import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Counter from "./Counter";

class Aboutus extends Component {
    render() {
        return (
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-12">
                            <div className="about_img">
                                <img src={process.env.PUBLIC_URL + "/assets/images/560x530.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_company">
                                <h6 className="sub-heading">All About Customization</h6>
                                <h3>Your Device <font style={{color: "#ee5433"}}> Working </font><br/> The Way You Want It</h3>
                                <p>Our customization services, which involves customizing not only the appearance but also the functionality of most devices, can include changing the color, adding custom features or making the device more secure.</p>
                                <p> The customization service is designed to make the device more personalized and tailored to the user's needs, resulting in an elegant and concise experience.</p>
                                <Link to="/about" className="btn">Read more</Link>
                            </div>
                        </div>
                    </div>
                    {/*<div className="space-60" />*/}
                    <Counter />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_img">
                                <img src={process.env.PUBLIC_URL + "/assets/images/560x530-2.jpg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_company">
                                <h6 className="sub-heading">Creative &amp; innovative</h6>
                                <h3>Together We Expanded Vision, Create And Make It</h3>
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

export default Aboutus;
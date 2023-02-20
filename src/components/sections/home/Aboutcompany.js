import React from 'react';
import { Link } from 'react-router-dom';
import aboutcompany from '../../../data/aboutcompany.json';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


function Aboutcompany(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="web_intro">
                            <div className="text-right btn_wp">
                                <Link to="/about" className="btn-link">More About Us <i className="fa fa-long-arrow-right" /></Link>
                            </div>
                            <div className="img_wp">
                                <div className="blue_box">
                                    <h6>Here we are</h6>
                                    <h4>What started as a tiny team mostly dedicated to design has grown.</h4>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/assets/images/540x600.jpg"} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_company p-0">
                            <h3>Together We Expanded Vision, Create And Make It</h3>
                            <div className="sigma_progress-wrapper mt-5 mb-5">
                                {aboutcompany.map((item, i) => (
                                    <div className="sigma_progress" key={i}>
                                        <h6>{item.title}</h6>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: item.value + "%" }}>
                                                <span />
                                            </div>
                                        </div>
                                        <div className="sigma_progress-count" style={{ left: item.value + "%" }}>
                                            <CountUp start={focus ? 0 : null} end={item.value} duration={5} redraw={true}>
                                                {({ countUpRef }) => (
                                                    <VisibilitySensor
                                                        onChange={isVisible => {
                                                            if (isVisible) {
                                                                setFocus(true);
                                                            }
                                                        }}
                                                    >
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/assets/images/540x350.jpg"} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutcompany;
import React from 'react';
import { Link } from 'react-router-dom';
import aboutcompany from '../../../data/aboutcompany.json';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Abouttext(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-md-12">
                        <div className="about_img">
                            <img style={{padding: 3 + "%"}} src={process.env.PUBLIC_URL + "/assets/images/homePg-aboutPnl-img.jpg"} alt="img" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_company">
                            <h6 className="sub-heading">Trust the experts at SCREPS</h6>
                            <h3>Enjoy peace of mind with SCREPS Screen Repair</h3>
                            <p>The premier source for all your mobile and device repair needs. Our experienced technicians use only the latest tools and genuine Apple parts to ensure your device is repaired to the highest standards. </p>
                            <p>We offer competitive pricing and fast turnaround times, so you can get your device up and running in no time. Contact us today to learn more about our services and get started on your repair.</p>
                            <Link to="/about" className="btn">Read more</Link>
                        </div>
                    </div>
                </div>
                <div className="space-60" />
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_img">
                            <img style={{padding: 3 + "%"}} src={process.env.PUBLIC_URL + "/assets/images/data-recovery-1.jpg"} alt="img" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_company">
                            <h6 className="sub-heading">Data Recovery &amp; Verification</h6>
                            <h3>Specialized Software and Hardware Recovery Toolset</h3>
                            <div className="sigma_progress-wrapper mt-5 mb-5">
                                <p>specialized and sophisticated procedure that can help you recover vital, lost data from damaged, corrupted, or otherwise inaccessible devices. </p>
                                <p>the use of specialized software and hardware tools to help you recover data from hard drives, flash drives, and other digital storage media. The process can be complex and time-consuming, but the experts at a screen repair service company are experienced and knowledgeable in data recovery and can help you get your lost data back quickly and efficiently.</p>
                            </div>
                            <Link to="/about" className="btn">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Abouttext;
import React from 'react';
import { Link } from 'react-router-dom';
import aboutinfo from '../../../data/aboutinfo.json';
import Popuphelper from '../../../helper/popuphelper';

class Abouttext extends Popuphelper {
    render() {
        return (
            <div className="section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sigma_about style-4">
                                <div className="sigma_about-image-1">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/about/4.jpg"} alt="img" />
                                </div>
                                <a className="popup-youtube sigma_video-btn" rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"}><i className="fa fa-play" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sigma_about style-4 pl-lg-4 mt-5 mt-lg-0">
                                <h6 className="sub-heading">Who We Are</h6>
                                <h3>10Yr+ Providing Quality Device Repair and Maintenance </h3>
                                <div className="sigma_about-content">
                                    <p className="m-0">With experienced technicians utilizing the latest tools and technologies to ensure that your devices are repaired quickly and efficiently, while providing exemplary customer service. Whether minor repair or complete replacements, you can rest assured that your devices will be in good hands. With our commitment to excellence, you can trust us to get the job done right the first time.</p>
                                    <ul className="sigma_about-list">
                                        {aboutinfo.map((item, i) => (
                                            <li key={i}>
                                                <span>{item.title}: </span>
                                                <p className="mb-0">{item.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/about" className="btn">Learn more</Link>
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
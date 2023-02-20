import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Video(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="intro_video-2 section-padding bg-cover bg-center bg-overlay" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/images/video.jpg)" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="section-header m-0 pb-0">
                            <h2 className="text-white">Let’s Protect Your business, life and much more.</h2>
                            <a className="popup-youtube sigma_video-btn" rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"}><i className="fa fa-play" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="info_box mt-5 mt-lg-0">
                            <div className="icon">
                                <img src={process.env.PUBLIC_URL + "/assets/images/icon-1.png"} alt="img" />
                            </div>
                            <span>
                                <CountUp start={focus ? 0 : null} end={25} duration={5} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={isVisible => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <b className="counter" ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span className="plus">+</span>
                            </span>
                            <p>Years Of Working<br />
            Experience in<br />
            This Field</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
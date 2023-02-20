import React from 'react';
import abouttext from '../../../data/abouttext.json';
import { Tab, Nav } from 'react-bootstrap';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Whyus(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="section-padding-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="sigma_tab-image mb-5 mb-md-0">
                            <img src={process.env.PUBLIC_URL + "/assets/images/about/3.jpg"} className="w-100" alt="img" />
                        </div>
                    </div>
                    <Tab.Container defaultActiveKey="tab10">
                        <div className="col-lg-2 col-md-6">
                            <div className="sigma_tab-item style-12 mb-5 mb-md-0">
                                <Nav variant="tabs" className="justify-content-center">
                                    {abouttext.map((item, i) => (
                                        <Nav.Item key={i}>
                                            <Nav.Link eventKey={"tab" + 1 + i}>
                                                <i className={item.icon} />
                                                {item.title}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Tab.Content>
                                {abouttext.map((item, i) => (
                                    <Tab.Pane key={i} eventKey={"tab" + 1 + i}>
                                        {item.info.map((info, i) => (
                                            <div key={i} className="sigma_about">
                                                <h6 className="sub-heading">{info.subtitle}</h6>
                                                <h3>{info.title}</h3>
                                                <div className="sigma_about-content">
                                                    <div dangerouslySetInnerHTML={{ __html: info.desc }} />
                                                    <div className="row">
                                                        {info.counter.map((counter, i) => (
                                                            <div key={i} className="col-md-4 col-sm-6">
                                                                <div className="sigma_counter">
                                                                    <span>
                                                                        <CountUp start={focus ? 0 : null} end={counter.value} duration={5} redraw={true}>
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
                                                                    <p>{counter.title}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        </div>
    );
}

export default Whyus;
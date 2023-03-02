import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Contactform from '../../../helper/contactform';
import { Alert } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Tabsquote extends Contactform {
    render() {
        return (
            <div className="section-padding pt-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>What are you Repairing</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Mobile or Portable Device</h2>
                    </div>
                    <div className="row">
                        <Tab.Container defaultActiveKey="tab1">
                            <div className="col-12">
                                <div className="sigma_tab-item style-13">
                                    <Nav variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab1">
                                                <i className="flaticon-shipped" />Recovery
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab2">
                                                <i className="flaticon-cargo-ship" />Repair
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab3">
                                                <i className="flaticon-box" />Diagnostics
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab4">
                                                <i className="flaticon-plane" />Calibration
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab5">
                                                <i className="flaticon-cargo" />Customization
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab6">
                                                <i className="flaticon-shipped" />Maintenance
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content className="col-12">
                                <Tab.Pane eventKey="tab1">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Get back Online with SCREPS</h3>
                                                <p className="mb-0"><strong>We employ complex procedures that can help you recover vital, lost data from damaged, corrupted, or otherwise inaccessible devices. Utilizing specialized techniques, our data recovery services provide users a way to recover lost data and help ensure that valuable information is not lost forever</strong></p>
                                                <div className="connect-us">
                                                    <i className="fa fa-phone" />
                                                    <div>
                                                        <b>Facing any Problem To Get A Quote!</b>
                                                        <span>444 567 980</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="home_company">
                                                <h6 className="sub-heading">All Screens Are Not! Created Equal</h6>
                                                <h3>Genuine OEM Parts </h3>
                                                <div className="sigma_progress-wrapper mt-1 mb-5">
                                                    <p>...are device components that have been specifically designed and
                                                        manufactured by the original equipment manufacturer (OEM) for
                                                        the device being repaired. This ensures that the parts used are
                                                        of the highest quality and will be compatible with the device,
                                                        providing the best repair possible.
                                                    </p>
                                                </div>
                                                <Link to="/about" className="btn">Read more</Link>
                                            </div>
                                            {/*<form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                                <div className="form-group">
                                                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required className="form-control" placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required className="form-control" placeholder="Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required className="form-control" placeholder="Phone Number" />
                                                </div>
                                                <button type="submit" className="btn">Get a Quote now</button>
                                                 Form Messages
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                 Form Messages
                                            </form>*/}
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Get Screen Repairs Confidently</h3>
                                                <p className="mb-0"><strong>We provide a professional and efficient service to help restore the look and function of your screens. Whether repairing or replacing existing frames and screens or installing new ones, skilled technician assess damage, determine the best course of action and carry out repairs quickly and efficiently.</strong></p>
                                                <div className="connect-us">
                                                    <i className="fa fa-phone" />
                                                    <div>
                                                        <b>Facing any Problem To Get A Quote!</b>
                                                        <span>444 567 980</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="home_company">
                                                <h6 className="sub-heading">All Screens Are Not! Created Equal</h6>
                                                <h3>Genuine OEM Parts </h3>
                                                <div className="sigma_progress-wrapper mt-1 mb-5">
                                                    <p>...are device components that have been specifically designed and
                                                        manufactured by the original equipment manufacturer (OEM) for
                                                        the device being repaired. This ensures that the parts used are
                                                        of the highest quality and will be compatible with the device,
                                                        providing the best repair possible.
                                                    </p>
                                                </div>
                                                <Link to="/about" className="btn">Read more</Link>
                                            </div>
                                            {/*<form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                                <div className="form-group">
                                                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required className="form-control" placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required className="form-control" placeholder="Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required className="form-control" placeholder="Phone Number" />
                                                </div>
                                                <button type="submit" className="btn">Get a Quote now</button>
                                                 Form Messages
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                 Form Messages
                                            </form>*/}
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Timely and Efficient Diagnostics</h3>
                                                <p className="mb-0"><strong>SCREPS uses the latest diagnostic tools to quickly identify any issues with your device and provide expert advice on how to fix them. Our services are designed to be as convenient as possible, allowing you to get your device back up and running in no time.</strong></p>
                                                <div className="connect-us">
                                                    <i className="fa fa-phone" />
                                                    <div>
                                                        <b>Facing any Problem To Get A Quote!</b>
                                                        <span>444 567 980</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="home_company">
                                                <h6 className="sub-heading">All Screens Are Not! Created Equal</h6>
                                                <h3>Genuine OEM Parts </h3>
                                                <div className="sigma_progress-wrapper mt-1 mb-5">
                                                    <p>...are device components that have been specifically designed and
                                                        manufactured by the original equipment manufacturer (OEM) for
                                                        the device being repaired. This ensures that the parts used are
                                                        of the highest quality and will be compatible with the device,
                                                        providing the best repair possible.
                                                    </p>
                                                </div>
                                                <Link to="/about" className="btn">Read more</Link>
                                            </div>
                                            {/*<form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                                <div className="form-group">
                                                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required className="form-control" placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required className="form-control" placeholder="Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required className="form-control" placeholder="Phone Number" />
                                                </div>
                                                <button type="submit" className="btn">Get a Quote now</button>
                                                 Form Messages
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                 Form Messages
                                            </form>*/}
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Ensure Display Adjustments </h3>
                                                <p className="mb-0"><strong>We help ensure that your screen is displaying colors accurately. Calibration services can help to reduce eye strain and make the device easier to use. Additionally, creating a more uniform and elegant look to the device as colors and brightness levels appear more natural and consistent.</strong></p>
                                                <div className="connect-us">
                                                    <i className="fa fa-phone" />
                                                    <div>
                                                        <b>Facing any Problem To Get A Quote!</b>
                                                        <span>444 567 980</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="home_company">
                                                <h6 className="sub-heading">All Screens Are Not! Created Equal</h6>
                                                <h3>Genuine OEM Parts </h3>
                                                <div className="sigma_progress-wrapper mt-1 mb-5">
                                                    <p>...are device components that have been specifically designed and
                                                        manufactured by the original equipment manufacturer (OEM) for
                                                        the device being repaired. This ensures that the parts used are
                                                        of the highest quality and will be compatible with the device,
                                                        providing the best repair possible.
                                                    </p>
                                                </div>
                                                <Link to="/about" className="btn">Read more</Link>
                                            </div>
                                            {/*<form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                                <div className="form-group">
                                                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required className="form-control" placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required className="form-control" placeholder="Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required className="form-control" placeholder="Phone Number" />
                                                </div>
                                                <button type="submit" className="btn">Get a Quote now</button>
                                                 Form Messages
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                 Form Messages
                                            </form>*/}
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab5">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Works The Way You Want It To</h3>
                                                <p className="mb-0"><strong>Mobile Device Customization ensures your device looks and works exactly the way you want it to. From tailored home screens and unique designs, to custom cases and covers, you can create a unique look for your device that reflects your personality and style. Make your device as attractive and functional as possible.</strong></p>
                                                <div className="connect-us">
                                                    <i className="fa fa-phone" />
                                                    <div>
                                                        <b>Facing any Problem To Get A Quote!</b>
                                                        <span>444 567 980</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="home_company">
                                                <h6 className="sub-heading">All Screens Are Not! Created Equal</h6>
                                                <h3>Genuine OEM Parts </h3>
                                                <div className="sigma_progress-wrapper mt-1 mb-5">
                                                    <p>...are device components that have been specifically designed and
                                                        manufactured by the original equipment manufacturer (OEM) for
                                                        the device being repaired. This ensures that the parts used are
                                                        of the highest quality and will be compatible with the device,
                                                        providing the best repair possible.
                                                    </p>
                                                </div>
                                                <Link to="/about" className="btn">Read more</Link>
                                            </div>
                                            {/*<form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                                <div className="form-group">
                                                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required className="form-control" placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required className="form-control" placeholder="Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required className="form-control" placeholder="Phone Number" />
                                                </div>
                                                <button type="submit" className="btn">Get a Quote now</button>
                                                 Form Messages
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                 Form Messages
                                            </form>*/}
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab6">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Devices In Optimal Condition</h3>
                                                <p className="mb-0"><strong>Device maintenance keeps your device in optimal condition. Whether cleaning, polishing the screen or replacing any damaged parts. SCREPS provides technical support and advice on how to use your device correctly, as well as any software updates or upgrades that may be necessary.</strong></p>
                                                <div className="connect-us">
                                                    <i className="fa fa-phone" />
                                                    <div>
                                                        <b>Facing any Problem To Get A Quote!</b>
                                                        <span>444 567 980</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="home_company">
                                                <h6 className="sub-heading">All Screens Are Not! Created Equal</h6>
                                                <h3>Genuine OEM Parts</h3>
                                                <div className="sigma_progress-wrapper mt-1 mb-5">
                                                    <p>...are device components that have been specifically designed and
                                                        manufactured by the original equipment manufacturer (OEM) for
                                                        the device being repaired. This ensures that the parts used are
                                                        of the highest quality and will be compatible with the device,
                                                        providing the best repair possible.
                                                    </p>
                                                </div>
                                                <Link to="/about" className="btn">Read more</Link>
                                            </div>
                                            {/*<form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                                <div className="form-group">
                                                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required className="form-control" placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required className="form-control" placeholder="Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required className="form-control" placeholder="Phone Number" />
                                                </div>
                                                <button type="submit" className="btn">Get a Quote now</button>
                                                 Form Messages
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                 Form Messages
                                            </form>*/}
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabsquote;
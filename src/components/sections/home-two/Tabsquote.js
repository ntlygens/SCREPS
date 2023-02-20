import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Contactform from '../../../helper/contactform';
import { Alert } from 'react-bootstrap';

class Tabsquote extends Contactform {
    render() {
        return (
            <div className="section-padding pt-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>What are you shipping</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Trucking and Freight Transport</h2>
                    </div>
                    <div className="row">
                        <Tab.Container defaultActiveKey="tab1">
                            <div className="col-12">
                                <div className="sigma_tab-item style-13">
                                    <Nav variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab1">
                                                <i className="flaticon-shipped" /> Trucking
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab2">
                                                <i className="flaticon-cargo-ship" />Shipping
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab3">
                                                <i className="flaticon-box" />Items
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab4">
                                                <i className="flaticon-plane" />Courier
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab5">
                                                <i className="flaticon-cargo" />Loading
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab6">
                                                <i className="flaticon-shipped" />Transpotation
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
                                                <h3>Get a Quote from us</h3>
                                                <p className="mb-0"><strong>Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain when looking at its layout.Well established resources in many countries will be distracted</strong></p>
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
                                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                                                {/* Form Messages */}
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                {/* Form Messages */}
                                            </form>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab2">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Get a Quote from us</h3>
                                                <p className="mb-0"><strong>Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain when looking at its layout.Well established resources in many countries will be distracted</strong></p>
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
                                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                                                {/* Form Messages */}
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                {/* Form Messages */}
                                            </form>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Get a Quote from us</h3>
                                                <p className="mb-0"><strong>Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain when looking at its layout.Well established resources in many countries will be distracted</strong></p>
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
                                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                                                {/* Form Messages */}
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                {/* Form Messages */}
                                            </form>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Get a Quote from us</h3>
                                                <p className="mb-0"><strong>Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain when looking at its layout.Well established resources in many countries will be distracted</strong></p>
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
                                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                                                {/* Form Messages */}
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                {/* Form Messages */}
                                            </form>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab5">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Get a Quote from us</h3>
                                                <p className="mb-0"><strong>Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain when looking at its layout.Well established resources in many countries will be distracted</strong></p>
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
                                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                                                {/* Form Messages */}
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                {/* Form Messages */}
                                            </form>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab6">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="sigma_tab-content mb-5 mb-lg-0">
                                                <h3>Get a Quote from us</h3>
                                                <p className="mb-0"><strong>Transcargo makes business flow. As one of the world’s leading non-asset-based supply chain when looking at its layout.Well established resources in many countries will be distracted</strong></p>
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
                                            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
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
                                                {/* Form Messages */}
                                                <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                    <strong>Success!</strong> Contact form has been successfully submitted.
                                                </Alert>
                                                <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                    <strong>Oops!</strong> Something bad happened. Please try again later.
                                                </Alert>
                                                {/* Form Messages */}
                                            </form>
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
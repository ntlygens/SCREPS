import React, { Component } from 'react';
import teamblock from '../../../data/author.json';
import { Tab, Nav } from 'react-bootstrap';

class Singleteam extends Component {
    render() {
        return (
            <div className="angels">
                <div className="container-fluid p-0">
                    <Tab.Container defaultActiveKey={1}>
                        <div className="row no-gutters">
                            <div className="col-md-6 order-md-12 secondary-bg">
                                <div className="angels_list">
                                    <h5 className="sub-heading">Our Angels</h5>
                                    <h2>We're A Small Team That Will Work Closely With You. No Intermediaries</h2>
                                    <Nav variant="tabs">
                                        {teamblock.map((item, i) => (
                                            <Nav.Item key={i}>
                                                <Nav.Link eventKey={1 + i}>
                                                    <p>{item.name}</p> <span>{item.designation}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="angel_img">
                                    <Tab.Content>
                                        {teamblock.map((item, i) => (
                                            <Tab.Pane key={i} eventKey={1 + i}>
                                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} className="w-100" />
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </div>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </div>
        );
    }
}

export default Singleteam;
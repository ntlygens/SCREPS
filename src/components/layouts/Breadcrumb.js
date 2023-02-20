import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <div id="inner_header" data-parallax="scroll" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/images/1920x580.jpg)" }}>
                <div className="container">
                    <div className="inner_intro">
                        <nav className="breadcrumb">
                            <ul>
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">{this.props.breadcrumb.pagename}</li>
                            </ul>
                        </nav>
                        <h1>{this.props.breadcrumb.pagename} - Expotia</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
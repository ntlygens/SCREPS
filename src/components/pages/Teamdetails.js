import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/team-details/Content';

const pagelocation = "Team Details";

class Teamdetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>ScRepS LLc - Screen Repair Service | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
                <Content teamId={this.props.match.params.id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Teamdetails;
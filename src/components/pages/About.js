import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumb from '../layouts/Breadcrumb';
import Content from '../sections/about/Content';

const pagelocation = "About Us";

class About extends Component {
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
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;
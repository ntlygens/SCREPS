import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home-two/Content';

const pagelocation = "Homepage";

class Hometwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>ScRepS LLc - Screen Repair Service | {pagelocation}</title>
                    <meta
                        name="description"
                        content="Screps, screen repair, mobile repair, mobile screen repair, laptop repair"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Hometwo;
import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Sponsors from '../../layouts/Sponsors';
import Ctatwo from '../../layouts/Ctatwo';
import Abouttext from './Abouttext';
import Tabsquote from './Tabsquote';
import Video from './Video';
import Infobox from './Infobox';
import Singleteam from '../home/Singleteam';
import Portfolio from '../home/Portfolio';
import Blogpost from '../home/Blogpost';
import Contactblock from '../home/Contactblock';
import Pointmap from './Pointmap';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouttext/>
                <Tabsquote/>
                <Ctatwo/>
                <Video/>
                <Infobox/>
                <Singleteam/>
                <div className="section-padding pb-0"/>
                <Portfolio/>
                <Pointmap/>
                <Sponsors />
                <Blogpost/>
                <Contactblock/>
            </Fragment>
        );
    }
}

export default Content;
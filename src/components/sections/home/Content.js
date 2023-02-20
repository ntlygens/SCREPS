import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Whyus from './Whyus';
import Services from './Services';
import Ctatwo from '../../layouts/Ctatwo';
import Sponsors from '../../layouts/Sponsors';
import Aboutcompany from './Aboutcompany';
import Portfolio from './Portfolio';
import Singleteam from './Singleteam';
import Pricing from './Pricing';
import Blogpost from './Blogpost';
import Contactblock from './Contactblock';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouttext/>
                <Whyus/>
                <Services/>
                <Ctatwo/>
                <Aboutcompany/>
                <Portfolio/>
                <Singleteam/>
                <Pricing/>
                <Sponsors/>
                <Blogpost/>
                <Contactblock/>
            </Fragment>
        );
    }
}

export default Content;
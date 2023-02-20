import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';


class Portfolio extends Component {
    render() {
        const settings = {
            loop: true,
            margin: 30,
            nav: true,
            navText: ["Prev", "Next"],
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 1, nav: false },
                1000: { items: 1 }
            }
        };
        return (
            <div className="portfolio section-padding pt-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>case study</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Trucking and Freight Transport</h2>
                    </div>
                </div>
                <div className="portfolio_img" id="portfolio">
                    <OwlCarousel className='owl-theme' {...settings}>
                        <div className="item">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/535x600.jpg"} alt="img" />
                                </div>
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/540x285.jpg"} alt="img" />
                                    <img src={process.env.PUBLIC_URL + "/assets/images/540x285.jpg"} alt="img" />
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/350x855.jpg"} alt="img" />
                                        </div>
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/345x750.jpg"} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/535x600.jpg"} alt="img" />
                                </div>
                                <div className="col-md-4">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/540x285.jpg"} alt="img" />
                                    <img src={process.env.PUBLIC_URL + "/assets/images/540x285.jpg"} alt="img" />
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/350x855.jpg"} alt="img" />
                                        </div>
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/345x750.jpg"} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default Portfolio;
import React, { Component } from 'react';
import testimonials from '../../../data/testimonial.json';
import author from '../../../data/author.json';
import { Rating } from '../../../helper/helper';
import OwlCarousel from 'react-owl-carousel';

const settings = {
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: { items: 1 },
        600: { items: 1, nav: false },
        1000: { items: 1 }
    }
}
function getAuthor(items) {
    var elems = author.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
class Testimonials extends Component {
    render() {
        return (
            <div className="section-padding gray_bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="about_company p-0">
                                <h6 className="sub-heading">Happy Clients</h6>
                                <h3>Client Say's About Our Product</h3>
                                <p>Reliable Logistic & Transport Solutions Saves Your Time.Our global logistics expertise Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <OwlCarousel {...settings} className="sigma_testimonial-slider">
                                {testimonials.map((item, i) => (
                                    <div key={i}>
                                        <div className="item">
                                            <div className="testimonial_box">
                                                <div className="stars">
                                                    {Rating(item.rating)}
                                                </div>
                                                <p>{item.comment} </p>
                                                {getAuthor(item.user).map((author, i) => (
                                                    <div className="testimonial_author" key={i}>
                                                        <img src={process.env.PUBLIC_URL + "/" + author.image} alt={author.name} />
                                                        <h5>{author.name}</h5>
                                                        <p>{author.designation}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;
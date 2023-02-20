import React, { Component } from 'react';
import pointers from '../../../data/mappointers.json';

class Pointmap extends Component {
    render() {
        return (
            <div className="section-padding d-none d-lg-block p-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h5>Find Us in Map</h5>
                        <div className="heading_arrow">
                            <span className="dots_div" />
                            <span className="s" />
                            <span className="dots_div" />
                        </div>
                        <h2>Exportia's Working Everywhere</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 position-relative">
                            <img src={process.env.PUBLIC_URL + "/assets/images/textures/map.png"} alt="map" />
                            <div className="map-markers">
                                {pointers.map((item, i) => (
                                    <div className={item.isHover === true ? 'map-marker ' + item.position + ' active' : 'map-marker ' + item.position} key={i}>
                                        <span />
                                        <div className="map-marker-content">
                                            <p>{item.text}</p>
                                            <span> <b className="text-white">{item.name}</b> / <b className="custom-primary">{item.companyname}</b> </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pointmap;
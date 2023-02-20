import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/navhelper';
import navigationmenu from '../../data/navigation.json';
import Mobilemenu from './Mobilemenu';
import Searchform from './Searchform';
import classNames from 'classnames';

class Header extends HeaderComponent {
    render() {
        return (
            <Fragment>
                {/* Mobile Aside */}
                <aside className={classNames("sigma_aside", { "aside-open": this.state.navmethod })}>
                    <div className="sigma_close aside-trigger" onClick={this.toggleNav}>
                        <span />
                        <span />
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="sigma_aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Main Header */}
                <header className="sigma_header style-3 can-sticky">
                    <div className="sigma_header-middle">
                        <div className="container">
                            <div className="navbar">
                                <div className="d-flex align-items-center">
                                    <div className="sigma_logo-wrapper">
                                        <Link className="sigma_logo" to="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
                                        </Link>
                                    </div>
                                    <ul className="navbar-nav">
                                        {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                                {item.child ?
                                                    <ul className="sub-menu" role="menu">
                                                        {item.submenu.map((sub_item, i) => (
                                                            <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                {sub_item.submenu ?
                                                                    <ul className="sub-menu">
                                                                        {sub_item.submenu.map((third_item, i) => (
                                                                            <li className="menu-item" key={i}><Link
                                                                                to={third_item.link}>{third_item.linkText}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul> : null}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : null
                                                }
                                            </li>
                                        )) : null}
                                    </ul>
                                </div>
                                <div className="sigma_header-controls">
                                    <ul className="sigma_header-controls-inner">
                                        <li className="search-trigger header-controls-item d-none d-sm-block">
                                            <Link to="#" onClick={this.searchToggle}>
                                                <i className="fa fa-search" />
                                            </Link>
                                        </li>
                                        <li className="d-none d-xl-block">
                                            <Link to="#" className="btn btn-sm">Login</Link>
                                        </li>
                                        <li className="aside-toggle aside-trigger" onClick={this.toggleNav}>
                                            <span />
                                            <span />
                                            <span />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Search Form Start*/}
                    <div className={classNames("search-form-wrapper", { "open": this.state.searchmethod })}>
                        <div className="search-trigger sigma_close" onClick={this.searchToggle}>
                            <span />
                            <span />
                        </div>
                        <Searchform />
                    </div>
                    {/* Search Form End*/}
                </header>
            </Fragment>
        );
    }
}

export default Header;
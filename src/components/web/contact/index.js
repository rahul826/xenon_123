import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div>
                {/*banner*/}
                <div className="banner-top">
                    <div className="container">
                        <h3>Contact</h3>
                        <h4><Link to="/">Home</Link><label>/</label>Contact</h4>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                {/* contact */}
                <div className="contact">
                    <div className="container">
                        <div className="spec ">
                            <h3>Contact</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" contact-w3">
                            <div className="col-md-5 contact-right">
                                <img src="images/cac.jpeg" className="img-responsive" alt="" />
                            </div>
                            <div className="col-md-7 contact-left">
                                <h4>Contact Information</h4>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <ul className="contact-list">
                                    <li> <i className="fa fa-map-marker" aria-hidden="true" /> xyz,XYZ</li>
                                    <li><i className="fa fa-envelope" aria-hidden="true" /><Link to="/gmail.com">abcd@gmail.com</Link></li>
                                    <li> <i className="fa fa-phone" aria-hidden="true" />+91 888888888</li>
                                </ul>
                                <div id="container">
                                    {/*Horizontal Tab*/}
                                    <div id="parentHorizontalTab">
                                        <ul className="resp-tabs-list hor_1">
                                            <li><i className="fa fa-envelope" aria-hidden="true" /></li>
                                            <li> <i className="fa fa-map-marker" aria-hidden="true" /> </li>
                                            <li> <i className="fa fa-phone" aria-hidden="true" /></li>
                                        </ul>
                                        <div className="resp-tabs-container hor_1">
                                            <div>
                                                <form action="#" method="post">
                                                    <input type="text" defaultValue="Name" name="Name" required />
                                                    <input type="email" defaultValue="Email" name="Email" required />
                                                    <textarea name="Message..."  required/>
                                                    <input type="submit" defaultValue="Submit" />
                                                </form>
                                            </div>
                                            <div>
                                                <div className="map-grid">
                                                    <h5>Our Branches</h5>
                                                    <ul>
                                                        <li><i className="fa fa-arrow-right" aria-hidden="true" />xyz , XYZ</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="map-grid">
                                                    <h5>Contact Me Through</h5>
                                                    <ul>
                                                        <li>Mobile No : +91 8888888888</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div></div></div></div>

        )
    }
}

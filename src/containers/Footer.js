import React from 'react';
import '../styles/Footer.css';
import { Col, Row, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>BTC</h4>
                        <h3 className="list-unstyled">
                        <li>New York, NY</li>
                        </h3>
                    </div>
                    <div className="col">
                        <ui className="list-unstyled">
                        <li>Mining</li>
                        <li>Wallets</li>
                        <li>Courses</li>
                        <li>Books</li>
                        </ui>
                    </div>
                    <div className="col">
                        <ui className="list-unstyled">
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy; 2020 BTC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
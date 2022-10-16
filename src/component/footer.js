import React from 'react';
import './style/footer.scss';
import { CardTitle, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <Row className={`footer`}>
            <Col xs={12} md="4" className={`item_footer`}>
                <CardTitle className="h3">CUSTORMER SERVICES</CardTitle>

                <CardTitle>Help & Contact Us</CardTitle>
                <CardTitle>Return & Refunds</CardTitle>
                <CardTitle>Online Stores</CardTitle>
                <CardTitle>Terms & Conditions</CardTitle>

            </Col>
            <Col xs={12} md="4" className={`item_footer`}>
                <CardTitle className="h3">COMPANY</CardTitle>
                <CardTitle>What We Do</CardTitle>
                <CardTitle>Available Services</CardTitle>
                <CardTitle>Latest Posts</CardTitle>
                <CardTitle>FAQs</CardTitle>

            </Col>
            <Col xs={12} md="4" className={`item_footer`}>
                <CardTitle className="h3">SOCIAL MEDIA</CardTitle>
                <CardTitle>Twitter</CardTitle>
                <CardTitle>Instagram</CardTitle>
                <CardTitle>Facebook</CardTitle>
                <CardTitle>Pinterest</CardTitle>

            </Col>
        </Row>
    );
}

export default Footer;

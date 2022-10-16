import React from 'react';
import './style/bannerPage.scss';
import { CardTitle, Row, Col } from 'reactstrap';

const BannerPage = props => {
    return (
        <Row className={`banner_home`}>
            <Col xs="6">
                <CardTitle className={`h1 title`}>{props.title}</CardTitle>
            </Col>
            <Col xs="6">
                <CardTitle className={`h6 text`}>{props.url == '' ? props.title : props.url}</CardTitle>
            </Col>
        </Row>
    );
}

export default BannerPage;

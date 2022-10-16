import React from 'react';
import './style/cardPopup.scss';
import { CardImg, Row, Col, CardTitle, CardText, Button, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'

const CardPopup = props => {
    return (
        props.active == true ? (
            <CardBody className={`wrapper_popup card-popup`}>
                <Row className={`inner_cardPopup`} >
                    <Col xs="6" className={`wrapper_img`}>
                        <CardImg src={props.img} />
                    </Col>
                    <Col xs="6">
                        <CardTitle className={`h2 title`}>
                            <strong>
                                {props.title}
                            </strong>
                        </CardTitle>
                        <CardText className={`short_desc`}>{props.short_des}</CardText>
                        <Link to={`/detail?id=${props.id}&category=${props.category}`} className={`link_popup`}>
                            <Button className={`btn_view_detail`}>
                                <i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;
                                <span>View Detail</span>
                            </Button>
                        </Link>
                    </Col>
                </Row >
            </CardBody >
        ) : null
    );
}

export default CardPopup;

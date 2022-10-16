import React from 'react';
import './style/category.scss';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


// Card Item of section category
const CardCategories = props => {
    return (
        <Link to={props.url}>
            <Card className='home_card_categories'>
                <CardImg src={props.src_image} />
                <CardImgOverlay className='card_overlay' >
                    <CardTitle className='h1 name_categories'>
                        <i className={`fa-brands fa-apple`}></i>&nbsp;
                        <strong>{props.name}</strong>
                    </CardTitle>
                </CardImgOverlay>

            </Card >
        </Link>
    )
}
// end

const Category = () => {
    return (
        <CardBody className='category_wrapper'>
            <Row>
                <Col xs="12" className='my-5'>
                    <CardTitle className={`h4 text-center`}>CAREFULLY CREATED COLECTIONS</CardTitle>
                    <CardTitle className={`h1 text-center font-weight-bold`}>
                        <strong>BROWSE OUR CATEGORIES</strong>
                    </CardTitle>
                </Col>
                <Col xs="12" sm={6} className='mb-4'>
                    <CardCategories name='iPhone' src_image='./assets/images/iphone.jpg' url="" />
                </Col>
                <Col xs="12" sm={6} className='mb-4'>
                    <CardCategories name='Max' src_image='./assets/images/max.webp' url="" />
                </Col>
                <Col xs="12" sm={6} lg="4" className='mb-5'>
                    <CardCategories name='iPad' src_image='./assets/images/ipad.webp' url="" />
                </Col>
                <Col xs="12" sm={6} lg="4" className='mb-5'>
                    <CardCategories name='WATCH' src_image='./assets/images/watch.png' url="" />
                </Col>
                <Col xs="12" sm={6} lg="4" className='mb-5'>
                    <CardCategories name='AirPods' src_image='./assets/images/airpods.png' url="" />
                </Col>
            </Row >
        </CardBody >
    );
}

export default Category;

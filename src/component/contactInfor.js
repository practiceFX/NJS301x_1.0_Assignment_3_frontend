import React from 'react';
import { Row, Col, CardTitle, Input, Button } from 'reactstrap'
import './style/contactInfor.scss';

const ContactInfor = () => {
    return (
        <React.Fragment>
            <Row className={`card_home_infor`}>
                <Col md="4" className='mb-5 mt-5'>
                    <CardTitle className={`h3 text-center`}><strong>FREE SHIPPING</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Free shipping worldwide</CardTitle>
                </Col>
                <Col md="4" className='mb-5 mt-5'>
                    <CardTitle className={`h3 text-center`}><strong>24 X 7 SERVICE</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Free shipping worldwide</CardTitle>
                </Col>
                <Col md="4" className='mb-5 mt-5'>
                    <CardTitle className={`h3 text-center`}><strong>FESTIVAL OFFER</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Free shipping worldwide</CardTitle>
                </Col>

            </Row>
            <Row className={`card_home_search_box`}>
                <Col xs={12} md="6">
                    <CardTitle className={`h3 text-center`}><strong>LET'S BE FRIENDS!</strong></CardTitle>
                    <CardTitle className={`h6 text-center`}>Nisi nisi tempar consequat laboris nis!</CardTitle>
                </Col>
                <Col xs={12} md="6" >
                    <CardTitle className={`search_area`}>
                        <Input placeholder="Enter your email address" />
                        <Button>Subscribe</Button>
                    </CardTitle>

                </Col>
            </Row>
        </React.Fragment>
    );
}

export default ContactInfor;

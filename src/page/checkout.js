import React from 'react';
import './style/checkout.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, CardTitle, CardBody, Input, Button, Form, FormGroup, Label } from 'reactstrap';

import BannerPage from '../component/bannerPage';
import { placeOrder } from '../store/asynAction';
import Cookie from 'universal-cookie';

let stringToFormatPrice = Intl.NumberFormat('en-US');
const Checkout = () => {
    const dispatch = useDispatch();
    const dataOrder = useSelector(state => state.reducerCart.data);
    const crfsToken = useSelector(state => state.reducerProduct.detailProduct?.detail?.csrfToken);
    // order total cost
    const totalOrder = () => {
        let sum = 0;
        dataOrder != '' ? (dataOrder.map((item) => {
            sum = sum + parseInt(item.price) * parseInt(item.amount)
        })) : sum = 0

        return sum;
    }
    const handleOrder = (e) => {
        const cookie = new Cookie();
        let fullname = e.target.name.value;
        let email = e.target.email.value;
        let phone = Number(e.target.phone.value);
        let address = e.target.address.value;
        let totalPrice = e.target.totalPrice.value;
        if (
            fullname != '' &&
            email != '' &&
            phone != NaN &&
            address != ''
        ) {
            dispatch(placeOrder(
                cookie.get('id').key,
                dataOrder,
                fullname,
                email,
                phone,
                address,
                totalPrice,
                crfsToken,
            ))
        } else {
            alert('Check infor !!!');
        }
    }
    React.useEffect(() => {
        console.log(dataOrder)
    })
    // end
    return (
        <React.Fragment>
            <form onSubmit={handleOrder}>
                <BannerPage title="CHECKOUT" url="HOME / CART / CHECKOUT" />
                <Row className={`checkout`}>
                    <Col xs="12">
                        <CardTitle className={`title h3`}>
                            <strong>
                                BILLING DETAILS
                            </strong>
                        </CardTitle>
                    </Col>
                    <Col xs="8">

                        <FormGroup className={`form_item`}>
                            <Label for="FullName">FULLNAME</Label>
                            <Input type="text" name="name" id="FullName" placeholder="Enter full name here!" />
                        </FormGroup>
                        <FormGroup className={`form_item`}>
                            <Label for="Email">EMAIL</Label>
                            <Input type="email" name="email" id="Email" placeholder="Enter your email here!" />
                        </FormGroup>
                        <FormGroup className={`form_item`}>
                            <Label for="PhoneNumber">PHONE NUMBER</Label>
                            <Input type="text" name="phone" id="PhoneNumber" placeholder="Enter your phone number here!" />
                        </FormGroup>
                        <FormGroup className={`form_item`}>
                            <Label for="Address">ADDRESS</Label>
                            <Input type="text" name="address" id="Address" placeholder="Enter your address here!" />
                        </FormGroup>
                        <button className={`btn`} type='submit'>Place order</button>

                    </Col>
                    <Col xs="4" className={`order_panel`}>
                        <CardTitle className={`cart_total_title h4`}>
                            <strong>YOUR ORDER</strong>
                        </CardTitle>

                        {
                            dataOrder.map((item, index) => (
                                <CardBody
                                    key={index}
                                    className={`cart_total_subtotal`}>
                                    <strong>{item.name}</strong>
                                    <span className=''>{stringToFormatPrice.format(item.price)} VND X {item.amount}</span>

                                </CardBody>
                            ))
                        }
                        <CardBody className={`cart_total_subtotal`}>
                            <strong>TOTAL</strong>
                            <span className=''> {
                                stringToFormatPrice.format(totalOrder())
                            } VND</span>
                            <input type="hidden" name="totalPrice" value={totalOrder()} />
                        </CardBody>
                    </Col>
                </Row>
            </form>
        </React.Fragment >
    );
}

export default Checkout;

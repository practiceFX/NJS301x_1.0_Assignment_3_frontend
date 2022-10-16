import React from 'react';
import './style/cart.scss';
import { Table, Row, Col, CardTitle, CardImg, CardBody, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { QuantityPicker } from 'react-qty-picker';
import BannerPage from '../component/bannerPage';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../store/action/action';
import { UPDATE_CART } from '../store/action/type';


let stringToFormatPrice = Intl.NumberFormat('en-US');



const Cart = () => {
    const dispatch = useDispatch();
    const dataOrder = useSelector(state => state?.reducerCart?.data);
    // const state = useSelector(state => state);
    // Modify and Update order
    const handleUpdateOrder = (item, value, index) => {
        const obj = { ...item }
        obj.amount = value;
        let data = [...dataOrder]
        data[index] = obj;
        dispatch(updateCart(data));
    }
    // end 




    //Delete
    const handleDelete = (index) => {
        let temporary = dataOrder;
        temporary = temporary.filter((item, index) => index !== 1);
        dispatch(updateCart(temporary));

    }
    //end



    // order total cost
    const totalOrder = () => {
        let sum = 0;
        dataOrder != '' ? (dataOrder.map((item) => {
            sum = sum + parseInt(item.price) * parseInt(item.amount)
        })) : sum = 0

        return sum;
    }

    // end
    return (
        <React.Fragment>
            <BannerPage
                title='CART' />

            <Row className={`cart`}>
                <Col xs="12">
                    <CardTitle className={`${`title`} h3`}>
                        <strong>
                            SHOPPING CART
                        </strong>
                    </CardTitle>
                </Col>
                <Col xs={12} md="9">
                    <Table borderless className={`table_cart`}>
                        <thead>
                            <tr>
                                <th>IMAGE</th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th className='row_order_count_area'>
                                    QUANTITY
                                </th>
                                <th className='row_order_sum'>
                                    TOTAL
                                </th>
                                <th className='row_order_btn_delete'>
                                    REMOVE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataOrder != undefined && dataOrder != '' && dataOrder != null ?
                                dataOrder.map((item, index) => (
                                    <tr key={index}>
                                        <th className='row_order_image'>
                                            <CardImg
                                                src={item.img}
                                                className={`img_product`} />
                                        </th>
                                        <th className='row_order_name'>
                                            <CardTitle>
                                                {
                                                    item?.name
                                                }
                                            </CardTitle>
                                        </th>
                                        <th className='row_order_price'>
                                            <CardTitle>
                                                {
                                                    stringToFormatPrice.format(item.price)
                                                }
                                            </CardTitle>
                                        </th>
                                        <th className='row_order_count_area'>
                                            <CardTitle className={`count_area`}>
                                                <QuantityPicker min='0' value={item.amount}
                                                    onChange={(value) => handleUpdateOrder(item, value, index)}
                                                />
                                            </CardTitle>
                                        </th>
                                        <th className='row_order_sum'>
                                            <CardTitle>
                                                {
                                                    stringToFormatPrice.format(parseInt(item.price) * parseInt(item.amount))
                                                } VND
                                            </CardTitle>
                                        </th>
                                        <th className='row_order_btn_delete'>
                                            <CardTitle>
                                                <Button className={`btn_delete`}
                                                    onClick={() => handleDelete(index)}
                                                >
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </Button>
                                            </CardTitle>
                                        </th>
                                    </tr>)
                                ) : null
                            }

                        </tbody>
                    </Table>
                </Col>
                <Col xs={12} md="3">
                    <CardTitle className={`cart_total_title h4`}>
                        <strong>CART TOTAL</strong>
                    </CardTitle>
                    <CardBody className={`cart_total_subtotal`}>
                        <strong>SUBTOTAL</strong>
                        <span>{
                            stringToFormatPrice.format(totalOrder())
                        } VND</span>
                    </CardBody>
                    <CardBody className={`cart_total_total`}>
                        <strong>TOTAL</strong>
                        <span className='h5'>{
                            stringToFormatPrice.format(totalOrder())
                        } VND</span>
                    </CardBody>
                    <CardTitle className={`count_area`}>
                        <Input placeholder="Enter your coupon" />
                    </CardTitle>
                    <CardTitle>
                        <Button className={`button_applyCoupon`}>
                            <i className="fa fa-gift" aria-hidden="true"></i>&nbsp;
                            Apply coupon
                        </Button>
                    </CardTitle>
                </Col>
                <Col xs="6" className='mt-5'>
                    <Link className={`btn_shopping`} to="/shop">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;
                        <span className='h5 pl-5'>Continute shopping</span>
                    </Link>
                </Col>
                <Col xs="6" className='mt-5'>
                    <Link className={`btn_shopping`} to="/checkout">
                        <Button className={`btn_checkout`}
                        // onClick={handleCheckout}
                        >
                            <span className='h6 pl-5'>Proceed to checkout</span>&nbsp;&nbsp;
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </Button>
                    </Link>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Cart;

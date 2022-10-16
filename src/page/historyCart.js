import React from 'react';
import './style/cart.scss';
import { Table, Col, Button, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'
import BannerPage from '../component/bannerPage';
import { useDispatch, useSelector } from 'react-redux';
import { historyCart } from '../store/asynAction';
import Cookie from 'universal-cookie';


let stringToFormatPrice = Intl.NumberFormat('en-US');
const HistoryCart = () => {
    const cookie = new Cookie();
    const idUser = cookie.get('id')?.key;
    const dispatch = useDispatch();
    const historyDataCart = useSelector(state => state?.reducerHistoryCart?.data);


    const [user_idDetail, setuser_idDetail] = React.useState('');
    const [emailDetail, setemailDetail] = React.useState('');
    const [phoneNumberDetail, setphoneNumberDetail] = React.useState('');
    const [addressDetail, setaddressDetail] = React.useState('');
    const [totalPriceDetail, settotalPriceDetail] = React.useState('');
    const [orderProDetails, setorderProDetails] = React.useState([]);
    const handleViewDetail = (
        user_id,
        email,
        phoneNumber,
        address,
        totalPrice,
        itemPro
    ) => {
        setuser_idDetail(user_id);
        setemailDetail(email);
        setphoneNumberDetail(phoneNumber);
        setaddressDetail(address);
        settotalPriceDetail(totalPrice);
        setorderProDetails(itemPro);
    }



    React.useEffect(() => {
        if (idUser != undefined) {
            dispatch(historyCart(idUser))
        }
        console.log(historyDataCart)
    }, [])
    return (
        <React.Fragment>
            <BannerPage
                title='HISTORY' />
            <CardBody className='my-5 mx-5'>
                <Col xs={12} >
                    <Table borderless className='table_history' >
                        <thead>
                            <tr>
                                <th>ID ORDER</th>
                                <th>ID USER</th>
                                <th>NAME</th>
                                <th>PHONE</th>
                                <th>ADDRESS</th>
                                <th>TOTAL</th>
                                <th>DELIVERY</th>
                                <th>STATUS</th>
                                <th>DETAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                historyDataCart.data != '' && historyDataCart.data != undefined ? (
                                    <React.Fragment>
                                        {
                                            historyDataCart.data.map((item, index) => (
                                                <React.Fragment>
                                                    {
                                                        item.inforProduct.map((itemPro, indexPro) => (
                                                            < tr key={indexPro} >
                                                                <th>{item._id}</th>
                                                                <th>{item.user_id}</th>
                                                                <th>{itemPro.name}</th>
                                                                <th>{item.phoneNumber}</th>
                                                                <th>{item.address}</th>
                                                                <th>{stringToFormatPrice.format(itemPro.price)} VND</th>
                                                                <th>{item.dayOrder}</th>
                                                                <th>Wating for prgressing</th>
                                                                <th>Wating for pay</th>
                                                                <th>
                                                                    <Button onClick={() => handleViewDetail(
                                                                        item.user_id,
                                                                        item.email,
                                                                        item.phoneNumber,
                                                                        item.address,
                                                                        item.totalPrice,
                                                                        itemPro
                                                                    )}>
                                                                        View
                                                                    </Button>
                                                                </th>
                                                            </tr>
                                                        ))

                                                    }
                                                </React.Fragment>
                                            ))
                                        }
                                    </React.Fragment>
                                ) : ''
                            }

                        </tbody>
                    </Table>
                </Col>
            </CardBody>
            <CardBody className="m-5">
                <CardTitle className="h1 mb-5">
                    INFORMATION ORDER
                </CardTitle>
                <p>ID User: {user_idDetail}</p>
                <p>Full Name: {emailDetail}</p>
                <p>Phone: {phoneNumberDetail}</p>
                <p>Address: {addressDetail}</p>
                <p>Total: {stringToFormatPrice.format(orderProDetails.price * orderProDetails.amount)} VND</p>

                <Table borderless className='table_history' >
                    <thead>
                        <tr>
                            <th>ID PRODUCT</th>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>COUNT</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>{orderProDetails._id}</th>
                            <th><img src={orderProDetails.img} style={{ width: '50px' }} /></th>
                            <th>{orderProDetails.name}</th>
                            <th>{stringToFormatPrice.format(orderProDetails.price)} VND</th>
                            <th>{orderProDetails.amount}</th>
                        </tr>

                    </tbody>
                </Table>

            </CardBody>

        </React.Fragment >
    );
}

export default HistoryCart;

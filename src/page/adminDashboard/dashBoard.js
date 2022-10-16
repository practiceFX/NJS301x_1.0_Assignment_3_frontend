import React from 'react';
import { Table, CardTitle, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import './dashboard.scss';
import Sidebar from '../../component/adminDashboard/sidebar';
import { detailBill } from '../../store/asynAction';
import { useNavigate } from 'react-router-dom';
import Cookie from 'universal-cookie';


let stringToFormatPrice = Intl.NumberFormat('en-US');
const DashBoard = () => {
    const dispatch = useDispatch();
    const cookie = new Cookie();
    const navigate = useNavigate();
    const dataCartDetail = useSelector(state => state?.reducerDetailBill?.data?.data)
    React.useEffect(() => {
        dispatch(detailBill());
        if (cookie.get('role')?.key != 'admin') {
            navigate('/');
        }

    }, [])
    return (
        <React.Fragment>
            <Row>
                <Col xs={2} className="p-0">
                    <Sidebar />
                </Col>
                <Col xs={10} className="page-admindashboard dashboard-page py-3 px-5">
                    <CardTitle className="h5">Dashboard</CardTitle>
                    <Row>
                        <Col xs={4} className='block-item'>
                            <Row className="inner-block-item">
                                <Col xs={6}>
                                    <CardTitle>

                                    </CardTitle>
                                    <CardTitle className='h6' >
                                        Clients
                                    </CardTitle>
                                </Col>
                                <Col xs={6} className='icon'>
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={4} className='block-item'>
                            <Row className="inner-block-item">
                                <Col xs={6}>
                                    <CardTitle>

                                    </CardTitle>
                                    <CardTitle className='h6' >
                                        Earnings of Month
                                    </CardTitle>
                                </Col>
                                <Col xs={6} className='icon'>
                                    <i className="fa fa-dollar" aria-hidden="true"></i>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={4} className='block-item'>
                            <Row className="inner-block-item">
                                <Col xs={6}>
                                    <CardTitle>

                                    </CardTitle>
                                    <CardTitle className='h6' >
                                        New Order
                                    </CardTitle>
                                </Col>
                                <Col xs={6} className='icon'>
                                    <i className="fa fa-file" aria-hidden="true"></i>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Table borderless className="table table-striped">
                        <thead>
                            <th>ID Users</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Total</th>
                            <th>Delevery</th>
                            <th>Status</th>
                            <th>Detail</th>
                        </thead>
                        <tbody>
                            {
                                dataCartDetail != '' && dataCartDetail != undefined ?
                                    dataCartDetail.map((item, index) => (
                                        <tr key={index}>
                                            <th>{item.user_id}</th>
                                            <th>{item.email}</th>
                                            <th>{item.phoneNumber}</th>
                                            <th>{item.address}</th>
                                            <th>{stringToFormatPrice.format(item.totalPrice)}</th>
                                            <th>Chưa vận chuyển</th>
                                            <th>Chưa thanh toán</th>
                                            <th>
                                                <button className='btn btn-success'> Detail</button>
                                            </th>
                                        </tr>
                                    )) : ''
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </React.Fragment >
    );
}

export default DashBoard;

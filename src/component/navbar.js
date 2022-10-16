import React from 'react';
import './style/navbar.scss';
import { Col, ListGroup, ListGroupItem, Row, Button, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Cookie from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/asynAction';

const Navbar = () => {
    const dispatch = useDispatch();
    const activeSidebar = () => {
        document.addEventListener('click', e => {
            // console.log(e.target.classList.contains('icon_sidebar'))
            if (e.target.classList.contains('icon_sidebar')) {
                document.getElementById('wrapper_sidebar').classList.add('active_sidebar');
            }
            if (e.target.classList.contains('wrapper_sidebar')) {
                document.getElementById('wrapper_sidebar').classList.remove('active_sidebar')
            }
        })
    }

    let cookie = new Cookie();

    const [checkUser, setcheckUser] = React.useState(cookie.get('email')?.key);

    const handleLogout = () => {
        dispatch(logoutUser());
        cookie.remove('email', { path: '/' });
        cookie.remove('id', { path: '/' });
        cookie.remove('isLogined', { path: '/' });
        cookie.remove('role', { path: '/' });
        cookie.remove('connect.sid', { path: '/' });
        setcheckUser(cookie.get('email')?.key);
    }
    React.useEffect(() => {
        activeSidebar();
    })
    return (
        <Row className='navbar_wrapper'>

            {/* Section page menu */}
            <Col xs="6" className='section_menu section_menu--left'>
                <ListGroup horizontal>
                    <ListGroupItem className='item_menu'>
                        <Link to='/' className='link_menu'>
                            Home
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='item_menu'>
                        <Link to='/shop' className='link_menu'>
                            Shop
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem className='item_menu'>
                        <Link to='/history-cart' className='link_menu'>
                            History Cart
                        </Link>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            {/* end */}

            {/* Navbar mobile */}
            <Col xs={1} className='navbar_menu_mobile p-0'>
                {/* <button onClick={}> */}
                <i className="icon_sidebar fa fa-bars" id='icon_active_sidebar' aria-hidden="true" ></i>
                {/* </button> */}
            </Col>
            {/* end */}

            {/* Brand logo  */}
            <Col xs={3} sm="2">
                <Button
                    color="tranparent"
                    className='brand'>BOUTIQUE</Button>
            </Col>
            {/* end */}



            {/* Section Cart, User */}
            <Col xs={8} sm="4" >
                <ListGroup horizontal className='section_menu section_menu--right'>
                    <ListGroupItem className='item_menu'>
                        <CardTitle>
                            <Link to='/Cart' className='link_menu'>
                                <i className="fas fa-cart-plus"></i> &nbsp;
                                <span>Cart</span>
                            </Link>
                        </CardTitle>
                    </ListGroupItem>
                    {
                        checkUser != undefined ? (
                            <ListGroupItem className={'wrapper-user'}>
                                <CardTitle>
                                    <div className={'link'}>
                                        <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                                        <span>{checkUser}</span>&nbsp;
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                </CardTitle>
                            </ListGroupItem>
                        ) : null
                    }
                    <ListGroupItem className='item_menu'>
                        <CardTitle>
                            {
                                checkUser != undefined ? (
                                    <Button className={`link`}
                                        onClick={() => handleLogout()}
                                    >
                                        <span>Log out</span>
                                    </Button>
                                ) : (
                                    <Link className='link_menu' to="/login">
                                        <span>Log in</span>
                                    </Link>
                                )
                            }

                        </CardTitle>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            {/* End */}

        </Row >
    );
}

export default Navbar;

import React from 'react';
import './style/sidebar.scss';
import { Row, ListGroup, ListGroupItem, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <React.Fragment>
            {/* Section page sidebar */}
            <div className="wrapper_sidebar" id='wrapper_sidebar'>
                <Row className='section_sidebar'>
                    <ListGroup vertical="true" className="inner_sidebar">
                        <ListGroupItem className='brand'>
                            <CardTitle
                                className='text-center h1'>BOUTIQUE</CardTitle>
                        </ListGroupItem>
                        <ListGroupItem className='item_sidebar'>
                            <Link to='/' className='link_sidebar'>
                                Home
                            </Link>
                        </ListGroupItem>
                        <ListGroupItem className='item_sidebar'>
                            <Link to='/shop' className='link_sidebar'>
                                Shop
                            </Link>
                        </ListGroupItem>
                    </ListGroup>
                </Row>
            </div>
            {/* end */}
        </React.Fragment>
    );
}

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, CardTitle } from 'reactstrap';
import './sidebar.scss';

const Sidebar = () => {
    return (
        <React.Fragment>
            <CardBody className="sidebar-admin-dashboard px-3 py-5">
                <Link to='/admin' className='link'>
                    <CardTitle className='p-3 '>
                        Dashboard
                    </CardTitle>
                </Link>
                <Link to='/admin/product' className='link'>
                    <CardTitle className='p-3 '>
                        List Product
                    </CardTitle>
                </Link>
            </CardBody>
        </React.Fragment>
    );
}

export default Sidebar;

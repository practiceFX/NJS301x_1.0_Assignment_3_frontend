import React from 'react';
import './style/banner.scss';
import { Link } from 'react-router-dom';
import { Button, CardBody, CardTitle } from 'reactstrap';

const Banner = () => {
    return (
        <div>
            <CardBody className='wrapper_banner' >
                <div className='inner_banner ' style={{ backgroundImage: 'url(./assets/images/banner.png)' }}>
                    <CardBody className='text_banner' >
                        <CardTitle className='text_child h6 my-3'>NEW INSPIRATION 2022</CardTitle>
                        <CardTitle className='text_title h1 my-3'>20% OFF ON NEW <br></br>SEASON</CardTitle>
                        <Link to='/shop' className='link'>
                            <Button className='button'>
                                Browse collections
                            </Button>
                        </Link>
                    </CardBody>
                </div>

            </CardBody >
        </div >
    );
}

export default Banner;

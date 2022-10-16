import React from 'react';
import './style/filter.scss';
import { Col, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'

const Filter = props => {
    const [activebar, setactivebar] = React.useState(true);

    const handleClick = () => {
        setactivebar(!activebar)
    }

    return (
        <React.Fragment>
            {/* <Col xs={1} className='wrapper_filter p-0'> */}
            <button className='icon_filter ' onClick={() => handleClick()}>
                <i className="fa fa-bars" aria-hidden="true" ></i>
            </button>
            {/* </Col> */}
            {
                activebar == true ? (
                    <React.Fragment>
                        <Col xs={12} lg="3" className={`filter-categories`}>
                            <CardTitle className={`title h4`}>CATEGORIES</CardTitle>
                            <CardTitle className={`brand h5`}>APPLE</CardTitle>
                            <CardTitle className={`link h6`}>
                                <button onClick={() => props.handleClickCategory('all')} className={`button-filter`}>
                                    All
                                </button>
                            </CardTitle>
                            <CardTitle className={`tag h5`}>

                                IPHONE & MAC
                            </CardTitle>
                            <CardTitle className={`link h6`}>

                                <button onClick={() => props.handleClickCategory('iphone')} className={`button-filter`}>
                                    iPhone
                                </button>

                            </CardTitle>
                            <CardTitle className={`link h6`}>

                                <button onClick={() => props.handleClickCategory('ipad')} className={`button-filter`}>
                                    iPad
                                </button>

                            </CardTitle>
                            <CardTitle className={`link h6`}>

                                <button onClick={() => props.handleClickCategory('macbook')} className={`button-filter`}>
                                    Macbook
                                </button>

                            </CardTitle>
                            <CardTitle className={`tag h5`}>
                                WIRELESS
                            </CardTitle>
                            <CardTitle className={`link h6`}>

                                <button onClick={() => props.handleClickCategory('airpod')} className={`button-filter`}>
                                    Airpod
                                </button>

                            </CardTitle>
                            <CardTitle className={`link h6`}>

                                <button onClick={() => props.handleClickCategory('watch')} className={`button-filter`}>
                                    Watch
                                </button>

                            </CardTitle>
                            <CardTitle className={`tag h5`}>
                                OTHER
                            </CardTitle>
                            <CardTitle className={`link h6`}>

                                <button onClick={() => props.handleClickCategory('mouse')} className={`button-filter`}>
                                    Mouse
                                </button>

                            </CardTitle>
                            <CardTitle className={`link h6`}>

                                <button onClick={() => props.handleClickCategory('other')} className={`button-filter`}>
                                    Other
                                </button>

                            </CardTitle>
                        </Col>
                    </React.Fragment>
                ) : ''
            }



        </React.Fragment >
    );
}

export default Filter;
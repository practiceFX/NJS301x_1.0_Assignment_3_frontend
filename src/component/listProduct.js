import React from 'react';
import './style/listProduct.scss';
import { Col, Input, Row } from 'reactstrap';
import CardProduct from './cardProduct';



const ListProduct = props => {
    // React.useEffect(() => {
    //     console.log(props.dataCategories)
    // }, [])
    return (
        <React.Fragment>
            {
                props.loading == true && props.dataCategories != undefined ? (
                    <h3 className='text-center'>Loading...</h3>
                ) : (
                    <Col xs="12" lg="9" className={`wrapper_shop_product`}>
                        <Row className={`top_tabPanel`}>
                            <Col xs="6" className={`search_box`}>
                                <Input placeholder='Enter Search Here' />
                            </Col>
                            <Col xs="6" className={`sort_select`}>
                                <select>
                                    <option>Default sorting</option>
                                    <option>ASC</option>
                                    <option>DES</option>
                                </select>
                            </Col>
                        </Row>
                        <Row className={`list_product`}>
                            {
                                props.dataCategories != undefined ? props.dataCategories.map((item, index) => (
                                    <Col xs={12} sm={4} lg="3" key={index}>
                                        <CardProduct
                                            id={item._id}
                                            category={item.category}
                                            img={item.img1}
                                            name={item.name}
                                            price={item.price}
                                            link={true}
                                            size='true'
                                        />
                                    </Col>
                                )) : null
                            }
                        </Row>
                    </Col>
                )
            }
            {
                props.error == true && props.dataCategories != undefined ? (<h3 className="text-center">Error !!!</h3>) : ''
            }
        </React.Fragment >
    );
}

export default ListProduct;

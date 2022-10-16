import React from 'react';
import CardPopup from './cardPopup';
import CardProduct from './cardProduct';
import { CardTitle, Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import './style/topProduct.scss';
import { getTopProduct } from '../store/asynAction';

const TopProduct = () => {
    const dispatch = useDispatch();

    // Get data product in API
    const dataProduct = useSelector(state => state.reducerProduct);




    const [pos, setPos] = React.useState(''); //get index of array Product
    const [activePopup, setactivePopup] = React.useState(false); // show or hide page-popup

    //show page-papup when click item of the list top-product
    const handleClick = (index) => {
        setPos(index)
        setactivePopup(true);
    }
    // end

    //hide page-popup whne click outside 
    const handleClickOutside = () => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('card-popup')) {
                setactivePopup(false);
            }

        })
    }
    // end




    React.useEffect(() => {
        // if (dataProduct.length == 0) {
        //     dispatch(getAllData());
        // }
        handleClickOutside();
        dispatch(getTopProduct())
    }, []);

    return (
        <React.Fragment>
            {
                dataProduct.loading == true && dataProduct.topProduct.length == 0 ? (<h3 className='text-center'>Loading...</h3>) : ''
            }
            {
                dataProduct.loading == false && dataProduct.topProduct.length != 0 ? (
                    <React.Fragment>

                        {/* The list Product */}
                        <Row>
                            <Col xs="12" className='mb-5'>
                                <CardTitle className={`h4 text-center`}>MAKE THE HARD WAY</CardTitle>
                                <CardTitle className={`h1 text-center font-weight-bold`}>
                                    <strong>TOP TRENDING PRODUCTS</strong>
                                </CardTitle>
                            </Col>
                            {
                                dataProduct.topProduct.data.length == 0 ? (<h3 className='text-center'>Not Found !!!</h3>) : dataProduct.topProduct.data.data.map((item, index) => (
                                    <Col xs={12} sm={4} lg="3" key={index}>
                                        <CardProduct
                                            id={item._id}
                                            category={item.category}
                                            img={item.img1}
                                            name={item.name}
                                            price={item.price}
                                            link={false}
                                            onClick={() => handleClick(index)}
                                            memo={true}
                                        />
                                    </Col >
                                ))
                            }
                        </Row>
                        {/* End */}



                        {/* The Page Popup when click  */}
                        <CardPopup
                            img={dataProduct.topProduct.data.data[pos]?.img1}
                            title={dataProduct.topProduct.data.data[pos]?.name}
                            short_des={dataProduct.topProduct.data.data[pos]?.short_desc}
                            id={dataProduct.topProduct.data.data[pos]?._id}
                            category={dataProduct.topProduct.data.data[pos]?.category}
                            active={activePopup}
                        />
                        {/* end */}


                    </React.Fragment>
                ) : ''
            }
            {
                dataProduct.error == true && dataProduct.topProduct.length == 0 ? (<h3 className="text-center">Error !!!</h3>) : ''
            }
        </React.Fragment>
    )

}

export default TopProduct;

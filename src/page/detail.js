import React from 'react';
import './style/detail.scss';
import { useLocation } from 'react-router-dom';
import { QuantityPicker } from 'react-qty-picker';
import { Row, Col, CardTitle, CardText, Input, Button, CardImg } from 'reactstrap';
import CardProduct from '../component/cardProduct';
import { useSelector, useDispatch } from 'react-redux';
import { getDataDetail } from '../store/asynAction';
import { useNavigate } from 'react-router-dom';
import Cookie from 'universal-cookie';
import { addCart } from '../store/action/action';



let stringToFormatPrice = Intl.NumberFormat('en-US');



const Detail = () => {
    // set image large slide
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const search = useLocation();
    const id = new URLSearchParams(search.search).get('id');
    const category = new URLSearchParams(search.search).get('category');


    const dataDetail = useSelector(state => state.reducerProduct);

    // const dataDetail
    const [imageSlide, setimageSlide] = React.useState(dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img1 : '');
    const [amount, setamount] = React.useState(0);



    const handleImage = (img) => {
        setimageSlide(img)
    }



    const handleOrderProduct = (idProduct, img, name, price, amount) => {
        let idUser = new Cookie();
        if (idUser.get('id') == undefined) {
            navigate('/login');
        }
        if (idUser.get('id') != undefined && amount != 0) {
            dispatch(addCart(idProduct, img, name, price, amount));
            alert('Đã thêm vào giỏ hàng');
        }
    }


    // end
    React.useEffect(() => {
        dispatch(getDataDetail(id, category))
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        console.log(dataDetail)
    }, [id, category])
    return (
        <React.Fragment>
            <Row className={`product_common`}>
                <Col xs='12' md='6' >
                    <Row className={`wrapper_product_slide`}>
                        <Col xs='12 ' md="2" className={`inner_product_slide`}>
                            <Button className={`btn_image`} onClick={() => handleImage(dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img1 : '')}>
                                <CardImg
                                    src={dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img1 : ''} />
                            </Button>
                            <Button className={`btn_image`} onClick={() => handleImage(dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img2 : '')}>
                                <CardImg
                                    src={dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img2 : ''} />
                            </Button>
                            <Button className={`btn_image`} onClick={() => handleImage(dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img3 : '')}>
                                <CardImg
                                    src={dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img3 : ''} />
                            </Button>
                            <Button className={`btn_image`} onClick={() => handleImage(dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img4 : '')}>
                                <CardImg
                                    src={dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img4 : ''} />
                            </Button>
                        </Col>
                        <Col xs="12" md='10'>
                            {
                                imageSlide == '' || imageSlide != dataDetail.detailProduct?.detail?.data[0].img1 ? (
                                    <CardImg src={dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img1 : ''}></CardImg>

                                ) : (
                                    <CardImg src={imageSlide}></CardImg>
                                )
                            }

                        </Col>
                    </Row>
                </Col>
                <Col xs='12' md='6' className={`product_pamas`}>
                    <CardTitle className={`${`title_pamas`} h1`}>
                        <strong>
                            {dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].name : ''}
                        </strong>
                    </CardTitle>
                    <CardTitle className={`h4 price`}>
                        {stringToFormatPrice.format(dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].price : '')} VND
                    </CardTitle>
                    <CardText className={`short_des`}>
                        {dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].short_desc : ''}
                    </CardText>
                    <CardTitle className={`category`}>
                        <strong>CATEGORY</strong>:&nbsp;{dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].category : ''}
                    </CardTitle>
                    <CardTitle>
                        <CardTitle className={`count_area`}>
                            <Input placeholder="QUANTITY" type="text" disabled />
                            <QuantityPicker min='0' onChange={(value) => setamount(value)} />
                            <Button
                                onClick={() => handleOrderProduct(
                                    dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0]._id : '',
                                    dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].img1 : '',
                                    dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].name : '',
                                    dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct?.detail?.data[0].price : '',
                                    amount
                                )}
                            >Add a cart</Button>
                        </CardTitle>
                    </CardTitle>
                </Col>
            </Row >
            <Row className={`product_descrption`}>
                <CardTitle>
                    <Button className={`long_des_btn`}>DESCRIPTION</Button>
                </CardTitle>
                <CardTitle className={`h3 title_des`}>
                    <strong> PRODUCT DESCRIPTION</strong>
                </CardTitle>
                <CardText className={``}>
                    <span>
                        {
                            dataDetail.detailProduct.length != 0 ? dataDetail.detailProduct.detail[0]?.long_desc : ''
                        }
                    </span>
                </CardText>
            </Row>
            <Row className={`product_related`}>
                <CardTitle>RELATED PRODUCTS</CardTitle>
                {

                    dataDetail.relatedProduct.length != 0 ? dataDetail.relatedProduct.related.map((item, index) => (
                        <Col sm='6' md="2">
                            <CardProduct
                                key={index}
                                id={item._id}
                                category={item.category}
                                img={item.img1}
                                name={item.name}
                                price={item.price}
                                memo={true}
                            />
                        </Col>
                    )) : null
                }
            </Row>
        </React.Fragment >
    );
}

export default Detail;

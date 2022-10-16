import React from 'react';
import './style/cardProduct.scss';
import { Card, CardImg, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

let stringToFormatPrice = Intl.NumberFormat('en-US');
const CardProduct = props => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <Card className={`wrapper_card_product`}>
            {
                props.link == false ? (
                    // in home page
                    <Button className={`link`} onClick={props.onClick} >
                        <CardImg src={props.img} />
                        <CardTitle className={`${props.size == '' ? 'h4' : 'h6'} title`}><strong>{props.name}</strong></CardTitle>
                        <CardTitle className={`h6 price`}>{stringToFormatPrice.format(props.price)} VND</CardTitle>
                    </Button>

                    // end
                ) : (
                    // in shop page
                    <button onClick={() => handleClick()} className={`button_link`}>
                        <Link to={`/detail?id=${props.id}&category=${props.category}`} className={`link`}>
                            <CardImg src={props.img} />
                            <CardTitle className={`${props.size == '' ? 'h4' : 'h6'} title`}><strong>{props.name}</strong></CardTitle>
                            <CardTitle className={`h6 price`}>{stringToFormatPrice.format(props.price)} VND</CardTitle>
                        </Link>
                    </button>
                    // end
                )
            }
        </Card >
    );
}

export default CardProduct;

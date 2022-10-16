import React from 'react';
import BannerPage from '../component/bannerPage';
import { Row } from 'reactstrap';
import './style/shop.scss';
import Filter from '../component/filter';
import ListProduct from '../component/listProduct';
import { getDataCategories } from '../store/asynAction';
import { useSelector, useDispatch } from 'react-redux';

const Shop = () => {
    const dispatch = useDispatch();
    // get data from API
    const dataDetailProduct = useSelector(state => state.reducerProduct);
    // end

    const handleClickCategory = (categories) => {
        dispatch(getDataCategories(categories));
    }
    React.useEffect(() => {
        dispatch(getDataCategories('null'));
    }, [])
    return (
        <React.Fragment>
            <BannerPage title='SHOP' />
            <Row className={'list_product'}>
                <Filter handleClickCategory={handleClickCategory} />
                <ListProduct
                    memo={true}
                    dataCategories={dataDetailProduct.categoryProduct.data}
                    loading={dataDetailProduct.loading}
                    error={dataDetailProduct.error}
                />
            </Row>
        </React.Fragment >
    );
}

export default Shop;

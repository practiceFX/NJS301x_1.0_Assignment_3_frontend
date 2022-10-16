import React from 'react';
import Banner from '../component/banner';
import CardLiveChat from '../component/cardLiveChat';
import Category from '../component/category';
import ContactInfor from '../component/contactInfor';
import TopProduct from '../component/topProduct';
import './style/home.scss';

const Home = () => {

    return (
        <React.Fragment>
            <Banner />
            <Category />
            <TopProduct />
            <ContactInfor />
            <CardLiveChat />
        </React.Fragment>
    );
}

export default Home;
// 
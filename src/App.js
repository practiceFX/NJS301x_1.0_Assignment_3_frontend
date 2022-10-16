import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './page/home';
import Shop from './page/shop';
import Cart from './page/cart';
import Checkout from './page/checkout';
import Register from './page/register';
import Detail from './page/detail';
import Login from './page/login';
import { useLocation } from 'react-router-dom';
import Sidebar from './component/sidebar';
import HistoryCart from './page/historyCart';
import DashBoard from './page/adminDashboard/dashBoard';
import AdminProduct from './page/adminDashboard/adminProduct';

const App = () => {
  const location = useLocation();
  const [hidden, sethidden] = React.useState(false);
  React.useEffect(() => {
    if (location.pathname.includes('admin')) {
      sethidden(true);
    }
    if (!location.pathname.includes('admin')) {
      sethidden(false);
    }
  });
  return (
    <React.Fragment>
      {
        hidden == true ? '' : (
          <React.Fragment>
            <Sidebar />
            <Navbar />
          </React.Fragment>
        )
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/history-cart' element={<HistoryCart />} />
        <Route path='/admin' element={<DashBoard />} />
        <Route path='/admin/product' element={<AdminProduct />} />
      </Routes>
      {
        hidden == true ? '' : (
          <Footer />
        )
      }
    </React.Fragment>
  );
}

export default App;

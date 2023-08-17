import logo from './logo.svg';
import './App.css';
import Sagar from './Sagar';
import Panel from './Panel';
import PrimaryButton from './PrimaryButton';
import Product from './Product';
import Rating from './Rating';
import Counter from './Counter';
import ExpandCollapse from './ExpandCollapse';
import MyForm from './MyForm';
import Login from './pages/login/Login';
import { useState } from 'react';
import Border from './Border';
import ToggleChild from './ToggleChild';
import Dialog from './Dialog';
import LifeCycle from './LifeCycle';
import Signup from './pages/signup/Signup';
import Order from './pages/order/Order';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/not-found/NotFound';
import Header from './shared/components/Header';
import GlobalHoc from './data/GlobalHoc';
import AddProduct from './pages/add-product/AddProduct';
import Checkout from './pages/checkout/Checkout';

function App() {

  return (
    <GlobalHoc>
      <div className="App">
        <Header />
        <fieldset>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/orders/:query' element={<Order />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/add-product' element={<AddProduct />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </fieldset>
      </div>
    </GlobalHoc>
  );
}

export default App;

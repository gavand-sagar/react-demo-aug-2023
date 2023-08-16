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

function App() {

  let products = [{
    brand: "Samsung",
    price: 1234235,
    rating: 5
  }, {
    brand: "Apple",
    price: 345521,
    rating: 4
  }]

  const [value, setValue] = useState(0)


  function click2() {
    alert("CLICKED 2")
  }

  return (
    <div className="App">

      <Header/>

      <fieldset>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/orders/:query' element={<Order />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
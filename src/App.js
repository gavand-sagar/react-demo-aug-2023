import logo from './logo.svg';
import './App.css';
import Sagar from './Sagar';
import Panel from './Panel';
import PrimaryButton from './PrimaryButton';
import Product from './Product';
import Rating from './Rating';
import Counter from './Counter';
import ExpandCollapse from './ExpandCollapse';

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


  return (
    <div className="App">

      <ExpandCollapse type={'red'} heading={"Sagar"} para={"I am amazing!!!!!"} />


      <ExpandCollapse type={'pink'} heading={"Mango"} para={"Its sooo gooood!!!!"} />

      <ExpandCollapse type={'brown'} heading={"Mango"} para={"Its sooo gooood!!!!"} />


      {/* <Counter limit={5}/>
      <Counter limit={10}/>
      <Counter limit={3}/> */}


      {/* {
        products.map(item => <Product brand={item.brand} price={item.price} rating={item.rating} />)
      } */}


      {/* <Rating value={0}></Rating>
      <Rating value={5}></Rating>
      <Rating value={-5}></Rating>
      <Rating value={534}></Rating> */}

      {/* <Product brand={'Samsung'} model='Galaxy-Y' price='6000'/>
      <Product brand='Samsung' model='ABC'/> */}

      {/* <PrimaryButton label='Save'/>
      <PrimaryButton label='Share'/>
      <PrimaryButton label='Add'/>
      <Panel label="Sagar" profession="Engineer"/>
      <Panel label="Mike" profession="Actor"/>
      <Panel label="Amit" profession="Programmer"/> */}
    </div>
  );
}

export default App;

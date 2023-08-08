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
import Login from './Login';

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



      <Login/>




      {/* <MyForm/> */}





      {/* <input type='text' maxLength={10} />
      <hr />
      <input type='password' />
      <hr />
      <input type='number' min={0} max={5} />
      <hr />
      <input type='date' min={'2023-07-01'} />
      <hr />
      <input type='color' />
      <hr />
      <input type='range' min={0} step={25} max={100} />
      <hr />
      <input type='checkbox' name='t2' />
      <input type='checkbox' name='t2' />
      <input type='checkbox' name='t2' />
      <hr />
      <input type='radio' name='t1' />
      <input type='radio' name='t1' />
      <input type='radio' name='t1' />
      <hr />

      <textarea></textarea>
      
      <select>
          <option>Mumbai</option>
          <option>Delhi</option>
      </select>


      <select>
          <option>Mango</option>
          <option>Banana</option>
          <option>Kiwi</option>
      </select> */}

      



      {/* <ExpandCollapse type={'red'} heading={"Sagar"} para={"I am amazing!!!!!"} />


      <ExpandCollapse type={'pink'} heading={"Mango"} para={"Its sooo gooood!!!!"} />

      <ExpandCollapse type={'brown'} heading={"Mango"} para={"Its sooo gooood!!!!"} /> */}


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

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
import { useState } from 'react';
import Border from './Border';
import ToggleChild from './ToggleChild';
import Dialog from './Dialog';
import LifeCycle from './LifeCycle';

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


      <ToggleChild>
        <LifeCycle></LifeCycle>
      </ToggleChild>



      {/* <Dialog>
          <h1>heyyy</h1>
          <p>lorem20asdfjkja ksfjkdsjfkjskdfjksdjff ks fkjdskfj kdfk </p>
      </Dialog> */}

{/* 

      <Dialog>
          <button>click me</button>
      </Dialog>

      <Border>
        <span>heyyyee</span>
      </Border>

      <Border>
        <h1>huuuuuu</h1>
      </Border>
      
      <Border>
        <PrimaryButton label={'hello'}></PrimaryButton>
      </Border>

      <ToggleChild>
          <h1>Hii</h1>
      </ToggleChild>

      <ToggleChild>
          <PrimaryButton label={'HEYYY'}></PrimaryButton>
      </ToggleChild> */}
    




      {/* <ExpandCollapse type={'pink'} heading={<h1>Whatever</h1>} para={"Its sooo gooood!!!!"} />
      <ExpandCollapse type={'pink'} heading={
                <PrimaryButton label={<h3>HIIII</h3>} />
      } para={"Its sooo gooood!!!!"} /> */}



      {/* <PrimaryButton  label={<Counter limit={80}/>}/> 
      <PrimaryButton  label={<h3>HIIII</h3>}/>
      <PrimaryButton  label={<div>
                                <div>Line 1</div>
                                <div> Line 2</div>
                              </div>}/>
      <PrimaryButton  label={"Line 1 Line 2"}/> */}


      {/* <PrimaryButton onClick={click2}  label={'Click me'}/>
      <hr/>
      <button onClick={click2}>Click Me</button> */}


      {/* <h1>Value in counter:( {value} )</h1>
      <Counter onChange={setValue} limit={5}/> */}



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

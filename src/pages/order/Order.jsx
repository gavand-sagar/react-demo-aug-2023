import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Content from './Content';
import CounterButClassed from './CounterButClassed';

export default function Order() {
  const { query } = useParams();

  return (
    <div>
      <h1>Order</h1>
       <Content/>
       <hr/>
       <CounterButClassed limit={10}/>
    </div>
  )
}

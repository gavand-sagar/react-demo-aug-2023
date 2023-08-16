import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Content from './Content';
import CounterButClassed from './CounterButClassed';
import MyDataContext from '../../data/my-data-context';

export default function Order() {
  const { query } = useParams();
  const {username} = useContext(MyDataContext)
  return (
    <div>
      <h1>Order</h1>
      {username}
      <Content />
      <hr />
      <CounterButClassed limit={10} />
    </div>
  )
}

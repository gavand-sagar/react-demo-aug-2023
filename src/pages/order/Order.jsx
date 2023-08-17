
import React, { useContext } from 'react'
import {  useParams } from 'react-router-dom'
import Content from './Content';
import CounterButClassed from './CounterButClassed';
import MyDataContext from '../../data/my-data-context';
import { useRouteGaurd } from '../../shared/hooks/useRouteGuard';

export default function Order() {
  
  const { query } = useParams();
  const { username } = useContext(MyDataContext)
  
  useRouteGaurd()

 
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

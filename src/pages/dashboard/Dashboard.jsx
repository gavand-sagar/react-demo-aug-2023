import React, { useContext } from 'react'
import MyComponent from './MyComponent'
import MyDataContext from '../../data/my-data-context'

export default function Dashboard() {

  const {username} = useContext(MyDataContext)

  return (
    <div>
      <h1>Dashboard {username}</h1>
      <MyComponent></MyComponent>
    </div>
  )
}

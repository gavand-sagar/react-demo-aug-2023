import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Signup() {
  const { value } = useSelector(state => state.counter)
  const { username } = useSelector(state => state.user)

  useEffect(() => {
      // subscribed to value
      //
  }, [value])

  return (
    <div>
      Username from redux : {username}
      <h1>Signup</h1>
      <p>
        Value in store is : {value}
      </p>
    </div>
  )
}

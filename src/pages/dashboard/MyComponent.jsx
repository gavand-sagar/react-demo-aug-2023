import React, { useContext } from 'react'
import MyDataContext from '../../data/my-data-context'

export default function MyComponent() {

    const { username, setUsername } = useContext(MyDataContext)

    return (
        <div>
            <div>MyComponent - {username}</div>
            <button onClick={() => setUsername("Mike")}>Change To Mike</button>
        </div>
    )
}

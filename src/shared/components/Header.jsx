import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to={'/signup'}>Sign Page</Link>
            <Link to={'/login'}>Login Page</Link>
            <Link to={'/orders/default'}>Order Page</Link>
            <br />
            <br />
            <br />
            <hr />
        </div>
    )
}

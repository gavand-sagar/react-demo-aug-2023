import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyDataContext from '../../data/my-data-context'

export default function Header() {
    const { setUsername } = useContext(MyDataContext)
    const navigate = useNavigate()
    function logout() {
        setUsername('')
        navigate('/login')
    }
    return (
        <div>
            <Link to={'/signup'}>Sign Page</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/login'}>Login Page</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/orders/default'}>Order Page</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/checkout'}>Checkout</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to={'/add-product'}>Add Prduct</Link>
            &nbsp;&nbsp;&nbsp;
            <button onClick={logout}>Logout</button>
        </div>
    )
}

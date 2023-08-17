import React from 'react'
import { useRouteGaurd } from '../../shared/hooks/useRouteGuard';

export default function Checkout() {

    //custom hook
    useRouteGaurd()

    return (
        <div>Checkout</div>
    )
}

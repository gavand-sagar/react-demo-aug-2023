import React from 'react'
import Rating from './Rating'

export default function Product({ brand, model, price, rating }) {
    return (
        <fieldset>
            <h1>{brand} - {model}</h1>
            <h3>Price: {price ? price : "NA"}</h3>
            <Rating value={rating}/>
        </fieldset>
    )
}

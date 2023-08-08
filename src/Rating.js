import React from 'react'

export default function Rating({ value }) {

    // if(value < 0 || value > 5){
    //     throw 'Invalid value in Rating component'
    // }

    if (value < 0) {
        return <div>&#9734;&#9734;&#9734;&#9734;&#9734;</div>
    }

    if (value > 5) {
        return <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
    }


    let arr = []
    for (let i = 1; i <= value; i++) {
        arr.push(<>&#9733;</>)
    }
    for (let i = value + 1; i <= 5; i++) {
        arr.push(<>&#9734;</>)
    }
    return <div>{arr}</div>


    // if (value == "1") {
    //     return <fieldset>&#9733;&#9734;&#9734;&#9734;&#9734;</fieldset>
    // } else if (value == "2") {
    //     return <fieldset>&#9733;&#9733;&#9734;&#9734;&#9734;</fieldset>
    // } else if (value == "3") {
    //     return <fieldset>&#9733;&#9733;&#9733;&#9734;&#9734;</fieldset>
    // } else if (value == "4") {
    //     return <fieldset>&#9733;&#9733;&#9733;&#9733;&#9734;</fieldset>
    // } else if (value == "5") {
    //     return <fieldset>&#9733;&#9733;&#9733;&#9733;&#9733;</fieldset>
    // } else {
    //     <></>
    // }
}

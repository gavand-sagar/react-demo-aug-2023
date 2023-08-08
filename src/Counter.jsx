import React, { useState } from 'react'

// export default function Counter() {
//     let value = 0;
//     function increment() {        
//         value += 1;
//         alert(value)
//     }
//     return (
//         <div >
//             Counter  {value}
//             <button onClick={increment}>+</button>
//         </div>
//     )
// }


export default function Counter({limit}) {

    //  let value = 0;
    let [value, setValue] = useState(0);

    function increment() {
        if (value < limit) {
            setValue(value + 1)
        }
    }

    function decrement(){
        if (value > 0) {
            setValue(value - 1)
        }
    }


    return (
        <div>
            <span>Counter : </span>
            <button onClick={decrement}>-</button>
            {value}
            <button onClick={increment}>+</button>
        </div>
    )
}

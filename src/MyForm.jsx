import React, { useState } from 'react'

export default function MyForm() {

    const [name, setName] = useState('')

    function change(){
        if(name == "Sagar"){
            alert("Welcome")
        }else{
            alert("Invalie")
        }
    }


    return (
        <div>

            <h1>MyForm</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={change}>ClickMe</button>


            <p>
                {
                    name
                }
            </p>






            {/* <div style={{height:'150px',width:'200px',backgroundColor:'orange',display:'inline'}}>apple</div>

            <button style={{height:'150px',width:'200px',backgroundColor:'orange'}}>kiwi</button>
            <button>kiwi</button>
            <button>kiwi</button>

            <span style={{height:'150px',backgroundColor:'red'}}>grape dskjfk jkfj</span>
            <span>asdh ajdsjkf jasdfk jfh</span> */}


        </div>
    )
}

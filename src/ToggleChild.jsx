import React, { useState } from 'react'

export default function ToggleChild({ children }) {

    const [visible, setVisible] = useState(true)

    return (
        <div
            onClick={() => setVisible(!visible)}
            style={{
                border: '1px solid black',
                display: 'inline-block',
                padding: '10px',
                margin: '5px'
            }}
        >
            {
                visible ? children : <></>
            }
        </div>
    )
}

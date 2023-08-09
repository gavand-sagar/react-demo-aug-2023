import React from 'react'

export default function Border({children}) {
    return (
        <div style={{ 
            border: '1px solid black', 
            display: 'inline-block', 
            padding: '10px',
            margin: '5px' }}>


                {children}

        </div>
    )
}

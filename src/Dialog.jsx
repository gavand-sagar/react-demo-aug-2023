import React from 'react'

export default function Dialog({children}) {
    return (
        <div className='dialog'>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

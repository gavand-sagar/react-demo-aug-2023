import React from 'react'

export default function PrimaryButton({ label, ...restOfAll }) {
    return (
        <button 
        {...restOfAll}
        className="primary-button">
            {label}
        </button>
    )
}

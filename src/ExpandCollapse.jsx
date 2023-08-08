import React, { Fragment, useState } from 'react'

export default function ExpandCollapse({ heading, para, type }) {

    let [visible, setVisible] = useState(false)

    // function change() {
    //     setVisible(!visible)
    // }

    return (
        <div className='expand-collapse-container'>
            <h3 className='my-heading' style={{ color: type }}>
                {heading}

                {/* <button onClick={change}>
                    {visible ? <>&#8679;</> : <>&#8659;</>}
                </button> */}

                <button onClick={() => { setVisible(!visible)}}>
                    {visible ? <>&#8679;</> : <>&#8659;</>}
                </button>
            </h3>
            {
                visible == true
                    ?
                    <p className='my-para'>{para}</p>
                    :
                    <></>  //fragment
            }

        </div>
    )
}

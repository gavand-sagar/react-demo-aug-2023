import React, { useEffect, useState } from 'react'

export default function LifeCycle() {

    const[someValue,setSomeValue] = useState(0)

    useEffect(() => {
        //pageload
        onLoad()
        //end of pageload
        return () => {
            // destroy
            onDestroy()
            // end destroy
        }
    }, [])


    useEffect(()=>{
        //code in here wil get executed when {someValue} changes
    },[someValue])


    function onLoad() {
        //alert("Created")
        
    }

    function onDestroy() {
        //alert("Destroyed")

    }

    return (
        <div>LifeCycle</div>
    )
}

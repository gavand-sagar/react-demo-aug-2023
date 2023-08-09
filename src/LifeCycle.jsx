import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SongItem from './SongItem'
import { Skeleton } from '@mui/material'
import SongItemSkeleton from './SongItemSkeleton'

export default function LifeCycle() {

    const [someValue, setSomeValue] = useState('')
    const [array, setArray] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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


    useEffect(() => {
        //code in here wil get executed when {someValue} changes
    }, [someValue])


    // async function onLoad() {
    //     // alert("Created")
    //     let response = await axios.get('https://catfact.ninja/fact');
    //     setSomeValue(response.data.fact)

    //     let response1 = await axios.get('http://localhost:3001/songs')
    //     setArray(response1.data)
    // }

    function onLoad() {
        axios.get('http://localhost:3001/songs')
            .then(response => {
                setArray(response.data)
            })


        axios.get('https://catfact.ninja/fact')
            .then(response => {
                setSomeValue(response.data.fact)
            })

    }

    function onDestroy() {
        //alert("Destroyed")

    }

    return (
        <div>
            LifeCycle
            <hr></hr>
            {
                isLoading
                    ?
                    <>
                        <SongItemSkeleton />
                        <SongItemSkeleton />
                    </>
                    :
                    array.map(x => <SongItem songItem={x} />)
            }
            {/* <p>{someValue}</p> */}
        </div>
    )
}

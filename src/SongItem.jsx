import React from 'react'
import Rating from './Rating'

export default function SongItem({ songItem }) {
    return (
        <div className='song-item'>
            <img src={'http://localhost:3001/image/' + songItem.songImage}></img>
            <label>{songItem.songName}</label>
            <Rating value={songItem.rating}></Rating>
        </div>
    )
}

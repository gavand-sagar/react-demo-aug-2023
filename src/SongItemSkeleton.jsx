import React from 'react'
import Rating from './Rating'
import { Skeleton } from '@mui/material'

export default function SongItemSkeleton() {
    return (
        <div className='song-item'>
            <Skeleton height={30} width={30}/>
            <label><Skeleton width={90}/></label>
            <Skeleton width={90}/>
        </div>
    )
}

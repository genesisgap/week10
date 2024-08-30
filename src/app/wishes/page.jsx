"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'

export default function Wishespage() {
    const {movieItem} = useContext(SidebarContext)

  return (
    <div>
        {movieItem.length == 0 ?
        (
            <h2>add movie to Wish list</h2>
        )

    :
    (
        <div>
            {movieItem.map((movie, index) => (
                <div key={index}>
                    <h2>{movie.title}</h2>
                    <h2>{movie.epi}</h2>
                </div>
            ))}
        </div>
  )
}

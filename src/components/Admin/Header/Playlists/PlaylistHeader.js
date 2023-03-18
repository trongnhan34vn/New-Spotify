import React from 'react'
import headerPlaylist from '../../../../assets/image/backgroundUsers.jpeg'

export default function PlaylistHeader() {
  return (
    <header className='header'>
      <div className='pl-[235px] relative mb-8'>
        <img src={headerPlaylist} alt="" className='h-96 w-full object-cover opacity-70' />
        <p className='absolute top-[50%] -translate-y-1/2 font-CircularBold text-6xl left-96 tracking-widest '>Playlist</p>
      </div>
    </header>
  )
}

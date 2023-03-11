import React from 'react'
import headerBackground from '../../../../assets/image/pexels-bob-clark-1135995.jpeg'

export default function UsersHeader() {
    return (
        <header className='header'>
            <div className='pl-[235px] relative mb-8'>
                <img src={headerBackground} alt="" className='h-96 w-full object-cover opacity-70' />
                <p className='absolute top-[50%] -translate-y-1/2 font-CircularBold text-6xl left-96 tracking-widest'>Users</p>
            </div>
        </header>
    )
}

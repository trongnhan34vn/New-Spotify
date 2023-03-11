import React from 'react'
import backgroundUsers from '../../../../assets/image/backgroundUsers.jpeg'
export default function HomeHeaderAdmin() {
  return (
    <div className='pl-[235px] pb-7'>
      <div className=''>
        <img className='max-h-96 w-full object-cover' src={backgroundUsers} alt="" />
      </div>
      <div className='p-7 absolute right-0 left-[235px] top-[64px]'>
        <h3 className='text-3xl text-[#fff] font-CircularBold tracking-widest uppercase text-left mb-12'>Dashboard</h3>
        <div className='grid grid-cols-3 gap-10'>
          <a href="">
            <div className='border-none text-[#fff] rounded-3xl hover:scale-105 transition-all duration-200 shadow-[0_4px_60px_-15px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#555555] to-red-600 p-7'>
              <p className='text-left'>Danh sách người dùng</p>
              <h3 className='text-6xl text-right'>20</h3>
            </div>
          </a>
          <a href="">
            <div className='border-none text-[#fff] rounded-3xl hover:scale-105 transition-all duration-200 shadow-[0_4px_60px_-15px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#555555] to-primary p-7'>
              <p className='text-left'>Danh sách bài hát</p>
              <h3 className='text-6xl text-right'>20</h3>
            </div>
          </a>
          <a href="">
            <div className='border-none text-[#fff] rounded-3xl hover:scale-105 transition-all duration-200 shadow-[0_4px_60px_-15px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#555555] to-yellow-500 p-7'>
              <p className='text-left'>Danh sách playlist</p>
              <h3 className='text-6xl text-right'>20</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

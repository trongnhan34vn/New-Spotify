import React from 'react'

export default function HomeContentAdmin() {
  return (
    <div className='pl-[235px] w-full flex'>
      <div className='audio-tracks w-[60%] px-5'>
        <div className='p-5 border w-full h-full bg-gradient-to-br from-[#555555] to-primary rounded-3xl shadow-[0_4px_60px_-15px_rgba(0,0,0,0.5)]'>
          <h3 className='text-[#fff] text-lg text-left mb-4 font-CircularBold'>Danh sách bài hát</h3>
          <table className='table w-full'>
            <thead>
              <tr className='font-CircularMedium text-left border-b text-[#fff]'>
                <td className='leading-10'>#</td>
                <td>Tên bài hát</td>
                <td>Nghệ sĩ</td>
                <td>Ngày đăng</td>
              </tr>
            </thead>
            <tbody className='font-CircularLight text-[#fff]'>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='users-playlists w-[40%] px-5'>
        <div className='p-5 bg-gradient-to-br rounded-3xl mb-5 from-[#555555] to-red-600'>
          <h3 className='text-[#fff] text-lg text-left font-CircularBold'>Danh sách người dùng</h3>
          <table className='table w-full'>
            <thead>
              <tr className='font-CircularMedium text-left border-b text-[#fff]'>
                <td className='leading-10'>#</td>
                <td>Danh sách người dùng</td>
                <td>Status</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody className='font-CircularLight text-[#fff]'>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='p-5 bg-gradient-to-br rounded-3xl from-[#555555] to-yellow-600'>
          <h3 className='text-[#fff] text-lg text-left font-CircularBold'>Danh sách playlists</h3>
          <table className='table w-full'>
            <thead>
              <tr className='font-CircularMedium text-left border-b text-[#fff]'>
                <td className='leading-10'>#</td>
                <td>Danh sách playlists</td>
                <td>Nghệ sĩ</td>
                <td>Ngày đăng</td>
              </tr>
            </thead>
            <tbody className='font-CircularLight text-[#fff]'>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
              <tr className='border-b hover:underline hover:cursor-pointer border-[#ccc] text-left '>
                <td>1</td>
                <td className='leading-9'>Chiều hôm ấy</td>
                <td>Jikay</td>
                <td>20/8/1998</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

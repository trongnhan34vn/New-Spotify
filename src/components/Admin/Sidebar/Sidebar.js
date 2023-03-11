import React from 'react'

export default function Sidebar() {
    return (
        <div className='sidebar bg-[#f1f1f1] z-50 top-0 text-xl h-full fixed w-[235px]'>
            <div className='sidebar-user p-8 flex items-center mb-3'>
                <img className='avatar w-10 h-10 rounded-[50%] mr-2' src="https://i1-dulich.vnecdn.net/2021/07/16/2-1626444940.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QBhjEzy_5EIISB2CWDpQlw" alt="" />
                <p className='name'>Company</p>
            </div>
            <div className='sidebar-direct-menu'>
                <ul className='pt-3 text-left text-base'>
                    <li>
                        <div className='after:content-[""] after:w-0 z-[50] after:z-[-1] hover:after:w-full hover:after:transition-all hover:after:duration-700 after:h-full after:absolute after:left-0 after:bg-black relative flex pl-8 transition-all duration-700 cursor-pointer gap-3 items-center p-3 hover:text-[#fff]'>
                            <i className="fa-solid fa-house"></i>
                            <span className='font-CircularMedium'>Home</span>
                        </div>
                    </li>
                    <li>
                        <div className='after:content-[""] after:w-0 z-[50] after:z-[-1] hover:after:w-full hover:after:transition-all hover:after:duration-700 after:h-full after:absolute after:left-0 after:bg-black relative flex pl-8 transition-all duration-700 cursor-pointer gap-3 items-center p-3 hover:text-[#fff]'>
                            <i className="fa-solid fa-user"></i>
                            <span className='font-CircularMedium'>Users</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className='pl-14 font-CircularLight'>
                            <li className='px-3 py-2 cursor-pointer inline-block'>
                                <span className='hover:after:w-full hover:after:transition-all hover:after:duration-500 relative after:content-[""] after:absolute after:h-[2px] z-50 after:bg-[#000] after:left-0 after:top-6 after:w-0  '>Add Admin</span>
                            </li>
                            <li className='group px-3 py-2 cursor-pointer inline-block'>
                                <span className='hover:after:w-full hover:after:transition-all hover:after:duration-500 relative after:content-[""] after:absolute after:h-[2px] z-50 after:bg-[#000] after:left-0 after:top-6 after:w-0  '>List & Edit</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className='after:content-[""] after:w-0 after:z-[-1] z-[50] hover:after:w-full hover:after:transition-all hover:after:duration-700 after:h-full after:absolute after:left-0 after:bg-black relative flex pl-8 transition-all duration-700 cursor-pointer gap-3 items-center p-3 hover:text-[#fff]'>
                            <i className="fa-solid fa-table-list"></i>
                            <span className='font-CircularMedium'>Playlist</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className='pl-14 font-CircularLight'>
                            <li className='group inline-block px-3 py-2 cursor-pointer'>
                                <span className='hover:after:w-full hover:after:transition-all hover:after:duration-500 relative after:content-[""] after:absolute after:h-[2px] z-50 after:bg-[#000] after:left-0 after:top-6 after:w-0  '>Add Playlist</span>
                            </li>
                            <li className='group inline-block px-3 py-2 cursor-pointer'>
                                <span className='hover:after:w-full hover:after:transition-all hover:after:duration-500 relative after:content-[""] after:absolute after:h-[2px] z-50 after:bg-[#000] after:left-0 after:top-6 after:w-0  '>Edit Playlist</span>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div className='after:content-[""] after:w-0 z-[50] after:z-[-1] hover:after:w-full hover:after:transition-all hover:after:duration-700 after:h-full after:absolute after:left-0 after:bg-black relative flex pl-8 transition-all duration-700 cursor-pointer gap-3 items-center p-3 hover:text-[#fff]'>
                            <i className="fa-solid fa-music"></i>
                            <span className='font-CircularMedium'>Audio Tracks</span>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className='pl-14 font-CircularLight'>
                            <li className='px-3 inline-block py-2 cursor-pointer'>
                                <span className='hover:after:w-full hover:after:transition-all hover:after:duration-500 relative after:content-[""] after:absolute after:h-[2px] z-50 after:bg-[#000] after:left-0 after:top-6 after:w-0 '>Add Track</span>
                            </li>
                            <li className='px-3 inline-block py-2 cursor-pointer'>
                                <span className='hover:after:w-full hover:after:transition-all hover:after:duration-500 relative after:content-[""] after:absolute after:h-[2px] z-50 after:bg-[#000] after:left-0 after:top-6 after:w-0 '>Edit Track</span>
                            </li>
                        </ul>
                    </li>
                    <li className='mt-44'>
                        <div className='after:content-[""] after:w-0 z-[50] after:z-[-1] hover:after:w-full hover:after:transition-all hover:after:duration-700 after:h-full after:absolute after:left-0 after:bg-black relative flex pl-8 transition-all duration-700 cursor-pointer gap-3 items-center p-3 hover:text-[#fff]'>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <span className='font-CircularMedium'>Sign Out</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

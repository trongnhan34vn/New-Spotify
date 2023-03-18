import React from 'react'

export default function ListPlaylists() {
    return (
        <div>
            <section className='content'>
                <div className='pl-[235px] list-control-filter mb-8'>
                    <div className='px-14 justify-between items-center flex '>
                        <div className='text-left'>
                            <h3 className='text-lg font-CircularMedium'>All users</h3>
                            <p className='text-xs font-CircularLight'>Monitor users sales, reviews, etc.</p>
                        </div>
                        <div className='flex items-center border-2 rounded-[500px] overflow-hidden border-primary'>
                            <select className='pl-4 outline-none'>
                                <option value="">Name</option>
                                <option value="">Email</option>
                                <option value="">Status: Active</option>
                                <option value="">Status: Block</option>
                            </select>
                            <input placeholder='Search...' className='  outline-none px-2 py-2 w-full h-11' type="text" />
                            <button className=' bg-primary block py-2.5 pl-4 pr-5 rounded-tr-[500px] rounded-br-[500px]'><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>
                <div className='pl-[235px]'>
                    <div className='px-14'>
                        <table className='table-fixed w-full'>
                            <thead className='text-left'>
                                <tr className='border-b '>
                                    <td className='text-center border-r p-2' width="5%">#</td>
                                    <td className='px-4 border-r'>Name</td>
                                    <td className='px-4 border-r'>Email</td>
                                    <td className='px-4 border-r' width="10%">Status</td>
                                    <td className='px-4'>Action</td>
                                </tr>
                            </thead>
                            <tbody className='font-CircularLight border-collapse'>
                                <tr className='text-left hover:bg-[#F0F0F5] leading-10'>
                                    <td className='text-center border-r'>1</td>
                                    <td className='px-4 border-r'>
                                        <img className='w-11 h-11 object-cover inline-block rounded-[50%] mr-2' src="https://genk.mediacdn.vn/k:thumb_w/640/2016/photo-1-1473821552147/top6suthatcucsocvepikachu.jpg" alt="" />
                                        <span>Nhân</span>
                                    </td>
                                    <td className='px-4 border-r'>trongnhan34vn</td>
                                    <td className='px-4 border-r text-primary'>Active <i className="fa-regular fa-circle-check"></i></td>
                                    <td className='px-4 '>
                                        <button className='px-6 rounded-[500px] mr-2 border bg-primary border-primary hover:scale-110 transition-all duration-200'>Detail</button>
                                        <button className='px-6 rounded-[500px] mr-2 border hover:scale-110 border-yellow-300 bg-yellow-400 transition-all duration-200'>Edit</button>
                                        <button className='px-6 p-2 rounded-[500px] mr-2 text-red-600 hover:underline hover:scale-110 transition-all duration-200'>Block</button>
                                    </td>
                                </tr>
                                <tr className='text-left hover:bg-[#F0F0F5] leading-10'>
                                    <td className='text-center border-r'>1</td>
                                    <td className='px-4 border-r'>
                                        <img className='w-11 h-11 object-cover inline-block rounded-[50%] mr-2' src="https://genk.mediacdn.vn/k:thumb_w/640/2016/photo-1-1473821552147/top6suthatcucsocvepikachu.jpg" alt="" />
                                        <span>Nhân</span>
                                    </td>
                                    <td className='px-4 border-r'>trongnhan34vn</td>
                                    <td className='px-4 border-r text-red-600'>Block <i className="fa-regular fa-circle-check"></i></td>
                                    <td className='px-4 '>
                                        <button className='px-6 rounded-[500px] mr-2 border bg-primary border-primary hover:scale-110 transition-all duration-200'>Detail</button>
                                        <button className='px-6 rounded-[500px] mr-2 border hover:scale-110 border-yellow-300 bg-yellow-400 transition-all duration-200'>Edit</button>
                                        <button className='px-6 p-2 rounded-[500px] mr-2 text-red-600 hover:underline hover:scale-110 transition-all duration-200'>Block</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

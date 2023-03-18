import React from 'react'

export default function FormPlaylist() {
    return (
        <div>
            <section className='content'>
                <div className='pl-[235px] list-control-filter mb-8'>
                    <div className='px-14 justify-between items-center flex'>
                        <div className='text-left'>
                            <h3 className='text-lg font-CircularMedium'>Add Playlist</h3>
                            <p className='text-xs font-CircularLight'>Monitor audio tracks, playlist, etc.</p>
                        </div>
                    </div>
                </div>
                <div className='pl-[235px]'>
                    <div className='px-14 mx-auto flex gap-14 w-[700px]'>
                        <div className='w-1/2'>
                            <div className='avatar w-full h-full border'>

                            </div>
                        </div>
                        <div className='form w-1/2'>
                            <div className='flex justify-between mb-5'>
                                <div className='w-full'>
                                    <label className='block text-left px-2 mb-2'>Playlist Name:</label>
                                    <input className='border mb-[2px] border-primary outline-primary px-8 py-2 w-full rounded-[500px]' type="text" />
                                    <span className='font-CircularLight text-xs text-red-600 text-left block px-2'></span>
                                </div>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <div className='w-full'>
                                    <label className='block text-left px-2 mb-2'>Date:</label>
                                    <input className='border mb-[2px] border-primary outline-primary px-8 py-2 w-full rounded-[500px]' type="text" />
                                    <span className='font-CircularLight text-xs text-red-600 text-left block px-2'></span>
                                </div>
                            </div>
                            <div className=''>
                                <button className='border-primary border px-10 py-3 float-right bg-primary rounded-[500px] hover:scale-110 transition-all duration-200'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

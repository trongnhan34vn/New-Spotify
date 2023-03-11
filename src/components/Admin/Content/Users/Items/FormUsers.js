import React from 'react'

export default function FormUsers() {
    return (
        <section className='content'>
            <div className='pl-[235px] list-control-filter mb-8'>
                <div className='px-14 justify-between items-center flex'>
                    <div className='text-left'>
                        <h3 className='text-lg font-CircularMedium'>Add Admin</h3>
                        <p className='text-xs font-CircularLight'>Monitor users sales, reviews, etc.</p>
                    </div>
                </div>
            </div>
            <div className='pl-[235px]'>
                <div className='px-14 flex gap-5 w-full'>
                    <div className='w-1/3'>
                        <div className='avatar w-60 h-60 border'>

                        </div>
                    </div>
                    <div className='form w-full'>
                        <div className='flex justify-between gap-10 mb-5'>
                            <div className='w-full'>
                                <label className='block text-left px-2 mb-2'>Email:</label>
                                <input className='border mb-[2px] border-primary outline-primary px-8 py-2 w-full rounded-[500px]' type="text" />
                                <span className='font-CircularLight text-xs text-red-600 text-left block px-2'></span>
                            </div>
                            <div className='w-full'>
                                <label className='block text-left px-2 mb-2'>Birthday:</label>
                                <input className='border mb-[2px] border-primary outline-primary px-8 py-2 w-full rounded-[500px]' type="text" />
                                <span className='font-CircularLight text-xs text-red-600 text-left block px-2'></span>
                            </div>
                        </div>
                        <div className='flex justify-between gap-10 mb-5'>
                            <div className='w-full'>
                                <label className='block text-left px-2 mb-2'>Name:</label>
                                <input className='border mb-[2px] border-primary outline-primary px-8 py-2 w-full rounded-[500px]' type="text" />
                                <span className='font-CircularLight text-xs text-red-600 text-left block px-2'></span>
                            </div>
                            <div className='w-full'>
                                <label className='block text-left px-2 mb-2'>Gender:</label>
                                <div className='flex leading-[42px]'>
                                    <div className='flex items-center pl-10'>
                                        <input className='border mb-[2px] border-primary outline-primary px-8 py-2 rounded-[500px]' type="radio" />
                                        <span className='font-CircularBook text-left px-2'>Nam</span>
                                    </div>
                                    <div className='flex items-center px-10'>
                                        <input className='border mb-[2px] border-primary outline-primary px-8 py-2 rounded-[500px]' type="radio" />
                                        <span className='font-CircularBook text-left px-2'>Nữ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-10 mb-5'>
                            <div className='w-full'>
                                <label className='block text-left px-2 mb-2'>Password:</label>
                                <input className='border mb-[2px] border-primary outline-primary px-8 py-2 w-full rounded-[500px]' type="text" />
                                <span className='font-CircularLight text-xs text-red-600 text-left block px-2'></span>
                            </div>
                            <div className='w-full'>
                                <label className='block text-left px-2 mb-2'>Address:</label>
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
    )
}

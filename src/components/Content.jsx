import React from 'react'

const Content = () => {
    return (
        <div className='content mt-3 flex flex-col gap-3'>
            <div className="btn-fields md:max-w-sm bg-gray-100 rounded-md overflow-hidden p-1">
                <button className='text-gray-600 p-1 px-4 bg-[#f9fafb] w-[180px]  disabled:{true} rounded-md text-xs '>Word Input</button>
                <button className='text-gray-600 p-1 px-4 w-[195px] bg-white border text-xs rounded-md shadow-xl'>Paragraph</button>
            </div>

            <div className="area-fiel">
                <textarea rows="8" className='w-full outline-none resize-none border border-1 p-2'></textarea>
            </div>

            <div className='rounded-md shadow-md'>
                <div className='text-xs grid grid-cols-6 bg-gray-200 p-2'>
                    <div className='w-[70px]'>Characters</div>
                    <div className='w-[70px]'>Words</div>
                    <div className='w-[70px]'>Sentences</div>
                    <div className='w-[70px]'>Paragraph</div>
                    <div className='w-[70px]'>Space</div>
                    <div className='w-[70px]'>Punctuations</div>
                </div>

                <div className='text-xs grid grid-cols-6 bg-gray-100 p-2'>
                    <div className='w-[70px]'>Hello 1</div>
                    <div className='w-[70px]'>Hello 1</div>
                    <div className='w-[70px]'>Hello 1</div>
                    <div className='w-[70px]'>Hello 1</div>
                    <div className='w-[70px]'>Hello 1</div>
                    <div className='w-[70px]'>Hello 1</div>
                </div>
            </div>
        </div>
    )
}

export default Content
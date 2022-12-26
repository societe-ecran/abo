import React from 'react'
import Image from 'next/image'


const intro = (props) => {


    return (
        <>
            <div className='  text-white py-6 md:py-12 flex flex-col items-center '>
                <div className='md:w-1/2 px-3 md:px-0'>
                    <h1 className=' text-2xl GillSansUltraBold  text-left  '>
                        {props.title}
                    </h1>
                    <p className="">
                        {props.texte}
                    </p>
                </div>
            </div>
        </>

    )
}

export default intro

import React from 'react'
import Image from 'next/image'


const intro = (props) => {


    return (
        <>
            <div className='  text-white py-12 flex flex-col items-center '>
                <div className='w-1/2'>
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

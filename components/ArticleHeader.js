import React from 'react'
import Image from 'next/image'


const ArticleHeader = (props) => {

    return (
        <>
            <div className='bg-fond  text-white py-12 flex flex-col items-center'>
                <div className='w-1/2'>
                    <h1 className=' text-2xl font-extrabold  text-left  '>
                        {props.title}
                    </h1>
                    <p className='pt-2 text-gray-600 text-base md:text-xl '>
                        {props?.author}
                    </p>
                    <p className='pt-2  text-gray-600 text-sm md:text-base underline '>
                        <a href={props.source} target="_blank">
                            {props?.source}
                        </a>
                    </p>
                    <p className="  text-gray-600 italic">
                        {props?.traduction}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ArticleHeader

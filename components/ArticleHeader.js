import React from 'react'
import Image from 'next/image'


const ArticleHeader = (props) => {

    return (
        <>
        <div className='hidden md:block'>
        <div className=' py-12 md:px-20 flex  sm:flex-raw '>
            <div className='violetBack'>
                <div className='transforme -translate-x-5 -translate-y-5 shadow-md'>
                    <div className='w-64'>
                         <Image
                        src={props.src}
                        alt="illustration"
                        //   width={500}

                        quality={50}
                        //   height='auto'
                        layout="intrinsic"
                    >
                    </Image>
                    </div>
                </div>
         

        </div>
        <div className='pl-6 grid place-content-center  '> 
        <p className='pt-2 pb-3 px-6 text-gray-600 '>
              {props?.date}
              </p>
        <h1 className='titreNav text-lg md:text-2xl '>
             {props?.title}
            </h1>
            <p className='pt-3 px-6 text-gray-600 text-base md:text-xl '>
              {props?.author}
              </p>
              <p className='pt-3 px-6 text-gray-600 text-sm md:text-base underline '>
              <a href={props.source} target="_blank">
              {props?.source}
              </a>
              </p>
              <p className=" px-6 text-gray-600 italic">
                  {props?.traduction}
              </p>     
        </div>
    </div>
    </div>

    <div className='md:hidden'>
        <div className=' py-12 md:px-20 flex flex-col '>
            <div className='violetBack'>
                <div className='pl-6 transforme -translate-x-5 -translate-y-5 shadow-md'>
                    <div className='w-64'>
                         <Image
                        src={props.src}
                        alt="illustration"
                        //   width={500}

                        quality={50}
                        //   height='auto'
                        layout="intrinsic"
                    >
                    </Image>
                    </div>
                </div>
         

        </div>
        <div className='pl-6 grid place-content-center  '> 
        <p className='pt-2 pb-3 px-6 text-gray-600 '>
              {props?.date}
              </p>
        <h1 className='titreNav text-lg md:text-2xl '>
             {props?.title}
            </h1>
            <p className='pt-3 px-6 text-gray-600 text-base md:text-xl '>
              {props?.author}
              </p>
              <p className='pt-3 px-6 text-gray-600 text-sm md:text-base underline '>
              <a href={props.source} target="_blank">
              {props?.source}
              </a>
              </p>
              <p className=" px-6 text-gray-600 italic">
                  {props?.traduction}
              </p>

             
        </div>
    </div>
    </div>
</>
    )
}

export default ArticleHeader

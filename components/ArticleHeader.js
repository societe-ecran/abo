import React from 'react'
import Image from 'next/image'


const ArticleHeader = (props) => {


    return (
        <div className=' py-6 px-12 flex flex-raw '>
        <div className=''>
           
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

        </div>
        <div className='pl-6 
        // grid place-content-center 
        '> 
        <p className='pt-3 px-6 text-gray-600 '>
              {props?.date}
              </p>
        <h1 className='titreNav text-xl '>
             {props?.title}
            </h1>
            <p className='pt-6 px-6 text-gray-600 '>
              {props?.author}
              </p>
              <p className='pt-3 px-6 text-gray-600 underline '>
              <a href={props?.source} target="_blank">
              {props?.source}
              </a>
          
              </p>

             
        </div>
   

    </div>

    )
}

export default ArticleHeader

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

                        quality={100}
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
        <h1 className='titreNav text-xl '>
             {props.title}
            </h1>
            <p className='pt-6 px-6 '>
              {props.author}
              </p>

              <p className='pt-6 px-6 '>
              {props.date}
              </p>
        </div>
   

    </div>

    )
}

export default ArticleHeader

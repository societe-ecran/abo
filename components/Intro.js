import React from 'react'
import Image from 'next/image'


const intro = (props) => {


    return (
        <div className=' py-12 md:px-20  md:flex md:flex-raw '>
        <div className=''>
            <div className='violetBack'>
                <div className='transforme -translate-x-5 -translate-y-5 md:shadow-md'>
                    <div className='w-64 pl-8'>
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
        <div className='md:pl-6 '>
        <p className='titreNav text-xl pt-6 md:pt-0 text-center md:text-left '>
             {props.title}
            </p>
            <p className='pt-6 md:px-6 text-sm md:text-base px-3 md-px-0'>
              {props.texte}
              </p>
        </div>
   

    </div>

    )
}

export default intro

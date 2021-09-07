import React from 'react'
import Link from 'next/link'


const Title = () => {
    return (

        <div className=" hidden sm:block  text-center">
            <Link href="/">
                <a className='border'>
                    <div className=' text-4xl HarbourBold text-gray-700   '>
                    <p className=''>   
                       ABOLIR LA POLICE
                    </p>
                 
                    </div>
                </a>
            </Link>
        </div>

    )
}

export default Title

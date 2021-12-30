import React from 'react'
import Link from 'next/link'


const Title = () => {
    return (

        <div className=" hidden sm:block  text-center">
            <Link href="/actualites">
                <a className='border'>
                    <div className=' text-4xl HarbourBold text-gray-700   '>
                    <h1>   
                       ABOLIR LA POLICE
                    </h1>
                    </div>
                </a>
            </Link>
        </div>

    )
}

export default Title

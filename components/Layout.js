import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import { useRouter } from 'next/router'


const Layout = ({children}) => {
    const router = useRouter()


    return (
        <>
            {router.pathname == '/' ? "" :
                <div className=' shadow-md bg-white '>
                    <Title />


                    <Navbar />
                </div>
            }

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout

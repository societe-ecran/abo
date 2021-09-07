import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Footer from './Footer'
import Script from 'next/script'
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
            <footer>
               

                {router.pathname == '/' ? "" :
                    <Footer />
                }


            </footer>
        </>
    )
}

export default Layout

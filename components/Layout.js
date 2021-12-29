import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Layout = ({ children, ...pageProps }) => {
    const router = useRouter()


    return (
        <>
            <Head>
                <title>{pageProps.titles}</title>
                <meta name="description" content={pageProps.description} />
                <meta property="og:title" content={pageProps.titles} />
                <meta property="og:description" content={pageProps.description} />
                <meta property="og:url" content="https://www.abolirlapolice.org/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`https://achat-livre-abolir.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fcouv.93478b6c9ee7db2c15aef8dc9bfe9289.jpg&w=1920&q=100`} />
                <meta charSet="utf-8" />
                <meta name="author" content="{Team17}" />
                <meta name="twitter:title" content="collectifmatsu1" />
                <meta name="theme-color" content="#59577c" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@CollectifMatsu1" />
                <meta name="twitter:title" content="Abolir la police" />
                <meta name="twitter:description" content="Le site vise à diffuser les idées, pratiques et luttes pour l’abolition du système pénal (police, justice, prison) auprès des francophones." />
                <meta name="twitter:image" content={`https://www.abolirlapolice.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2FcouvMin.64099324a2cd6af6ed4653b63dca91f1.jpg&w=256&q=50`} />
                <meta name="twitter:image:alt" content="couverture" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

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

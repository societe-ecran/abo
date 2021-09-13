import React from 'react'
import Head from 'next/head'

const Seo = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content="https://www.abolirlapolice.org/" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="../../public/couvMin.jpg" />
            <meta charSet="utf-8" />
            <meta name="author" content="{Team17}" />
            <meta name="twitter:title" content="collectifmatsu1" />
            <meta name="theme-color" content="#59577c" />

            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" />

            <meta name="twitter:site" content="@CollectifMatsu1" />
            <meta name="twitter:title" content="Abolir la police" />
            <meta name="twitter:description" content="Le site qui vise à diffuser les idées, pratiques et luttes pour l’abolition du système pénal (police, justice, prison) auprès des francophones." />
            <meta name="twitter:image" content="../../public/couvMin.jpg"/>

        {/* <script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
            <div hidden id="snipcart" data-api-key={process.env.SNIPCART_API} ></div> */}
        {/* <link rel="stylesheet" href="<https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css>" /> */}
        {/* <link rel="preconnect" href="<https://app.snipcart.com>" />
            <link rel="preconnect" href="<https://cdn.snipcart.com>" /> */}


            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MDJjY2U2MmQtYjEyMS00ODM3LWI5Y2YtMjE2MTQ3NGY3ZmJhNjM3NjYzODU4NjEyMDk5Nzc2" id="snipcart"></script>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type ="text/css" />

        </Head>
    )
}

export default Seo

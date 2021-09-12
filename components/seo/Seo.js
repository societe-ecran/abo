import React from 'react'
import Head from 'next/head'

const Seo = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            {/* <meta property="og:url" content="https://myclothingstore.com/about" /> */}
            <meta property="og:type" content="website" />
            <meta charSet="utf-8" />
            <meta name="author" content="{Team17}" />
            <meta name="twitter:title" content="collectifmatsu1" />
            <meta name="theme-color" content="#59577c" />

            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" />


            {/* <script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
            <div hidden id="snipcart" data-api-key={process.env.SNIPCART_API} ></div>
            <link rel="stylesheet" href="<https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css>" />
            <link rel="preconnect" href="<https://app.snipcart.com>" />
            <link rel="preconnect" href="<https://cdn.snipcart.com>" /> */}


            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key={process.env.SNIPCART_API} id="snipcart"></script>

            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />

        </Head>
    )
}

export default Seo

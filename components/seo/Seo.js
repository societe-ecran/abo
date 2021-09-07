import React from 'react'
import Head from 'next/head'

const Seo = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="The story behind My Clothing Store!" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            {/* <meta property="og:url" content="https://myclothingstore.com/about" /> */}
            <meta property="og:type" content="website" />



            <link rel="preconnect" href="<https://app.snipcart.com>" />
            <link rel="preconnect" href="<https://cdn.snipcart.com>" />
            {/* <link rel="stylesheet" href="<https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css>" /> */}
            {/* <link rel="shortcut icon" href="../public/favicon.ico" /> */}
            <script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
            <div hidden id="snipcart" data-api-key="ZGNiMWIzMmMtMzY1My00NDYwLTkxMDUtYTljOTYxZTM0MThiNjM3NjYzODU4NjEyMDk5Nzc2"></div>


        </Head>
    )
}

export default Seo

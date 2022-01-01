// import 'tailwindcss/tailwind.css'
import '../public/styles/globalStyle.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `
        }
      </Script>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp

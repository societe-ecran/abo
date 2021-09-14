import Layout from '../components/Layout'
import { React } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import visuel from '../public/VisuelCouverture.png'
import Seo from '../components/seo/Seo'

export default function Home() {
  const titre = 'Abolir la police'
  const description = "Ce site vise à diffuser les idées, pratiques et luttes pour l’abolition du système pénal (police, justice, prison) auprès des francophones."
  
  return (
    <>
      <Layout>
        <Seo title={titre} description={description} />

        <div className=" hidden md:block w-full h-screen">
          <div className="grid grid-cols-2">
            <div className='
           flex items-center
             '>
              <Link
                href='/actualites'>
                <a>
                  <Image
                    src={visuel}
                    alt="Visuel couverture"
                    // width={500}
                    quality={50}
                    // height='auto'
                    layout="intrinsic"
                  />
                </a>
              </Link>
            </div>

            <div className='  flex  items-center  xl:pr-24 pl-6 violetBack h-screen'>
              <Link
                href='/actualites'>
                <a> <div className='text-5xl menthe pb-12 HarbourBold '>
                  ABOLIR <br />
                  LA POLICE
                </div>
                  <div className='sabonRoman text-l text-white font-bold'>
                    Bienvenue sur ce site qui vise à diffuser les idées, pratiques et luttes pour l’abolition du système pénal (police, justice, prison)
                    auprès des francophones. C’est une façon de prolonger le travail autour du livre <span className='italic underlineWhite '>Abolir la police. Échos des États-Unis</span> (paru en septembre 2021).
                    Ce site est donc un outil pour aller plus loin dans le partage de ressources autour de l’abolitionnisme, c’est-à-dire sur les façons de <span className="">vivre ensemble sans
                      recourir au système pénal et en luttant contre lui.</span>
                  <p> <br />Le site sera alimenté régulièrement mais sans parution périodique. Vous trouverez autant des <span className='text-white'>articles de fond </span>que des <span className='text-white'></span>billets d’actualité, des traductions que des textes écrits en français, des bibliographies et des podcasts. Une section recensera des <span className='text-white'>témoignages </span>(que nous vous invitons à nous envoyer) sur des situations dans lesquelles il a été possible de se passer du système pénal.
                    <br /></p> 
                    <div className='pt-2'>
                      Bonne lecture
                    </div>
                    <div className='pt-6 text-black'>
                      Collectif Matsuda
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>



        <div className="md:hidden grid grid-col-1 h-screen items-center violetBack">
            <div className='px-3 py-3'>
              <Link
                href='/actualites'>
                <a> <div className='text-3xl menthe pb-6  HarbourBold '>
                  ABOLIR <br />
                  LA POLICE
                </div>
                  <div className='sabonRoman text-sm text-white font-bold'>
                    Bienvenue sur ce site qui vise à diffuser les idées, pratiques et luttes pour l’abolition du système pénal (police, justice, prison)
                    auprès des francophones. C’est une façon de prolonger le travail autour du livre <span className='italic underlineWhite '>Abolir la police. Échos des États-Unis</span> (paru en septembre 2021).
                    Ce site est donc un outil pour aller plus loin dans le partage de ressources autour de l’abolitionnisme, c’est-à-dire sur les façons de vivre ensemble sans
                      recourir au système pénal et en luttant contre lui.
                   <p> <br />Le site  sera alimenté régulièrement mais sans parution périodique. Vous trouverez autant des <span className='text-white'>articles de fond </span>que des <span className='text-white'></span>billets d’actualité, des traductions que des textes écrits en français, des bibliographies et des podcasts. Une section recensera des <span className='text-white'>témoignages </span>(que nous vous invitons à nous envoyer) sur des situations dans lesquelles il a été possible de se passer du système pénal.
                    <br /></p>
                    <div className='pt-2'>
                      Bonne lecture
                    </div>
                    <div className='pt-6 text-black text-right'>
                      Collectif Matsuda
                    </div>
                  </div>
                </a>
              </Link>
            </div>
        </div>



      </Layout>

    </>
  )
}

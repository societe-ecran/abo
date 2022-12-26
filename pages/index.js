import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { getDates } from '../components/lib/api'
import Footer from '../components/Footer'
import couv from "../public/couv.jpg"

export default function Home({
    datesTournee
}) {
    const titre = 'Abolir la police'
    const description = "Ce site vise à diffuser les idées, pratiques et luttes pour l'abolition du système pénal (police, justice, prison) auprès des francophones."
    const data = datesTournee.posts.edges


    data.sort(function (a, b) {
        var AdateFormat = a.node.datestournee.dateDeLaPresentation
        var BdateFormat = b.node.datestournee.dateDeLaPresentation
        return (
            new Date(AdateFormat) -
            new Date(BdateFormat)
        );
    });


    const month = [{ nb: 1, name: "janvier " }, { nb: 2, name: "février " }, { nb: 3, name: "mars " }, { nb: 4, name: "avril " }, { nb: 5, name: "mai" }, { nb: 6, name: "juin " }, { nb: 7, name: "juillet " }, { nb: 8, name: "août " }, { nb: 9, name: "septembre " }, { nb: "10", name: "octobre " }, { nb: '11', name: "novembre " }, { nb: 12, name: "décembre " }]
    const goodWord = function (corectMois) {
        month.map(moi => {
            if (corectMois == moi.nb) {
                return (moi.name)
            }
        })
    }




    return (
        <Layout titles={titre} description={description}>
            <div className="bg-bandeau py-3">
                <div className='grid grid-cols-3'>
                    <div className='text-white GillSansUltraBold text-xl md:text-3xl flex items-center justify-items-center justify-center py-6 '>
                        LA TOURNEE
                    </div>
                    <div className='text-white text-xl md:text-3xl GillSansUltraBold flex items-center justify-items-center justify-center py-6'>
                        LE LIVRE</div>
                    <div className='text-white text-xl md:text-3xl GillSansUltraBold flex items-center justify-items-center justify-center py-6'>
                        LE SITE
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 pt-6 px-3 '>

                <div className='flex flex-col justify-between items-center '>

                    {data.map(item => {
                        var month = new Date(item.node.datestournee.dateDeLaPresentation).getMonth()
                        var corectMonth = (month += 1)

                        return (
                            <div className='text-center  w-2/4 pt-3'>
                                <div className='font-extrabold text-xl'>
                                    {item.node.datestournee.ville}
                                </div>

                                <div className=' '>
                                    {new Date(item.node.datestournee.dateDeLaPresentation).getDate()}/{corectMonth}/{new Date(item.node.datestournee.dateDeLaPresentation).getFullYear()}
                                <div className='' dangerouslySetInnerHTML={{ __html: item.node.content }} /> 
                                </div>
                            </div>
                        )
                    })}

                    <div className='underline decoration-indigo-900 decoration-4 underline-offset-8 italic'>
                    <a href="mailto:collectif_matsuda@riseup.net">Contactez-nous ! </a> 
                    </div>
                </div>

                <div className='flex flex-col justify-start items-center pt-12 md:pt-0 '>
                    <div className=' px-12 items-center'>
                        <Image
                            src={couv}
                            alt="Couverture Abolir la police"
                            quality={50}
                            layout="intrinsic"
                        />
                    </div>
                    <div className='underline  pt-3 text-violetLivre decoration-indigo-900 decoration-2 underline-offset-8 '>
                        <Link href="/lesChapitres">
                            <a>chapitres</a>
                        </Link>
                    </div>

                    <div className='underline pt-2 text-violetLivre decoration-indigo-900 decoration-2 underline-offset-8 '>
                        <Link href="https://achat-livre-abolir.vercel.app/">
                            <a>l'acheter</a>
                        </Link>
                    </div>

                </div>

                <div className=' flex flex-col space-y-6 pt-12 md:pt-0'>

                    <div  >
                        <div className='underline italic text-xl decoration-indigo-900 decoration-4 underline-offset-8 pb-2 '>
                            Aller plus loin
                        </div>
                        <div className='pt-1'>
                            Série de textes et de traductions qui ne figurent pas dans le livre mais qui
                            ont trait à l’abolitionnisme pénal : pistes de réflexion, prises de position et
                            petits bouts d’histoire.
                        </div>
                    </div>

                    <div className='' >
                        <div className='underline italic text-xl decoration-indigo-900 decoration-4 underline-offset-8 pb-2'>
                            Partager des histoires
                        </div>
                        <div className='pt-1'>
                            Ici, des témoignages de réactions face à des situations de violences. Alors
                            que nous savons trop peu comment résoudre collectivement des problèmes
                            qui font pleinement partie de nos vies, partager des récits permet de se
                            défaire de certains réflexes, d’avoir de nouvelles idées, et d’apprendre
                            des erreurs ou méthodes des autres. Vous pouvez nous envoyer vos récits
                            d’expérience à collectif_matsuda(at)riseup.net
                        </div>
                    </div>

                    <div className='' >
                        <div className='underline italic text-xl decoration-indigo-900 decoration-4 underline-offset-8 pb-2'>
                            Groupes et collectifs
                        </div>
                        <div className='pt-1'>
                            Il y a beaucoup de façons de se défendre de la police et de la justice,
                            ici et maintenant. Cette section se propose de relayer les organisations
                            locales contre les violences d’Etat qui luttent au quotidien et font vivre la
                            solidarité.
                        </div>
                    </div>

                    <div className='' >
                        <div className='underline italic text-xl decoration-indigo-900 decoration-4 underline-offset-8 pb-2'>
                            Médias
                        </div>
                        <div className='pt-1'>
                            <div className='flex flex-row'>
                                - <span className='text-white '>-</span>
                                <a href='' className='underline text-violetLivre'>
                                    Lundisoir sur Youtube
                                </a>
                                <div>
                                    <span className='text-white '>-</span>avec Iréné, S. Quadrupanni, P. Douillard
                                </div>

                            </div>
                            <div className='flex flex-row'>
                                - <span className='text-white '>-</span>
                                <a href='' className='underline text-violetLivre'>
                                    l’Enquête Critique,
                                </a>
                                <div>
                                    <span className='text-white '>-</span>avec le Réseau d’Entraide Vérité et Justice
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                - <span className='text-white '>-</span>
                                <a href='' className='underline text-violetLivre'>
                                    l’Antistream
                                </a>
                                <span className='text-white '>-</span>sur Twitch
                            </div>
                            <div className='flex flex-row'>
                                - <span className='text-white '>-</span>
                                <a href='' className='underline text-violetLivre'>
                                    Au Poste ! sur Twitch,
                                </a>
                                <span className='text-white '>-</span>avec D. Dufresne
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}


export async function getStaticProps() {
    const datesTournee = await getDates();
    return {
        props: {
            datesTournee
        },
        revalidate: 30
    };
}

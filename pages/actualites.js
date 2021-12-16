import React from 'react'
import Layout from '../components/Layout'
import { Timeline } from 'react-twitter-widgets'
import pigs from '../public/pigs.jpg'
import tags from '../public/tags.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Seo from '../components/seo/Seo'
import { getDates } from '../components/lib/api'
import Footer from '../components/Footer'

export default function actualites({ datesTournee }) {
    const titre = 'Actualités'
    const description = "Vous trouverez ici les actualités du collectif : dates de tournée, dernières publications et fils twitter."


    const data = datesTournee.posts.edges


    data.sort(function (a, b) {
        var AdateFormat = a.node.datestournee.dateDeLaPresentation
        var BdateFormat = b.node.datestournee.dateDeLaPresentation
        return (
            new Date(AdateFormat) -
            new Date(BdateFormat)
        );
    });


    // const month = [{ nb: 1, name: "janvier " }, { nb: 2, name: "février " }, { nb: 3, name: "mars " }, { nb: 4, name: "avril " }, { nb: 5, name: "mai" }, { nb: 6, name: "juin " }, { nb: 7, name: "juillet " }, { nb: 8, name: "août " }, { nb: 9, name: "septembre " }, { nb: "10", name: "octobre " }, { nb: '11', name: "novembre " }, { nb: 12, name: "décembre " }]
    // const goodWord = function (corectMois) {
    //     month.map(moi => {
    //         if (corectMois == moi.nb) {
    //             return (moi.name)
    //         }
    //     })
    // }




    return (
        <Layout>
            <Seo title={titre} description={description} />
            <div className="">
                <div className=''>
                    <div className=' pb-3 pt-12 '>
                        <div className="text-2xl text-center md:text-left md:text-3xl font-Bold px-12 titreNav  border-b  ">
                            {/* <div className='flex justify-start '> */}
                            Dates de la tournée
                            {/* </div> */}

                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-0 mx-3 md:pt-6 md:px-12 '>
                        {data.map(item => {
                            var month = new Date(item.node.datestournee.dateDeLaPresentation).getMonth()
                            var corectMonth = (month += 1)

                            return (
                                <div className='text-sm md:text-baseshadow md:mx-6 md:my-6 px-3 py-3 rounded-lg border violetBack sabonRoman'>

                                    <div className='text-white'>
                                        {new Date(item.node.datestournee.dateDeLaPresentation).getDate()} / {corectMonth} / {new Date(item.node.datestournee.dateDeLaPresentation).getFullYear()}
                                    </div>
                                    <div className='md:text-xl'>
                                        {item.node.datestournee.ville}
                                    </div>
                                    <div className='text-white text-xs'>
                                        <div className='titreNav  text-xs text-white' dangerouslySetInnerHTML={{ __html: item.node.content }} />

                                    </div>
                                    <div className='text-center font-bold md:text-2xl text-red-700'>
                                        __
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>

                <div className=' pt-12 '>
                    <div className="text-2xl md:text-3xl font-Bold px-12 titreNav transforme  text-center pb-5">
                        Documenter l'abolitionnisme
                    </div>
                    <div className="text-2xl md:text-3xl font-Bold px-12 titreNav transforme  text-center text-gray-500">
                        Le livre
                    </div>
                </div>

                <div className='md:grid md:grid-cols-2 md:px-24'>
                    <div className='pt-6 px-12 md:text-base  md:px-3'>
                        <div className=' border-t font-bold text-xl pt-1 pb-2  md:pt-3'>
                            Présentation et sommaire du livre
                        </div>

                        <div className='text-sm md:text-base'>
                            Minneapolis, mai 2020.
                            George Floyd, un Afro-Américain de 46 ans, meurt étouffé par la police. Une vague de contestations, inédite depuis les années 1960, s’empare du pays. Manifestations, mobilisations sur les réseaux sociaux, pillages : la singularité de ce mouvement tient autant à son ampleur qu’à la radicalité de ses propositions. Il ne s’agit plus de dénoncer les dérives de l’institution policière, mais de questionner son existence même.
                        </div>
                        <div className=' text-gray-500 font-bold text-xl pt-1 text-right md:text-left'>

                            <a href="https://achat-livre-abolir.vercel.app/">Lire</a>


                        </div>
                        <div className=' border-t font-bold text-xl pt-1 mt-6 pb-2  md:pt-3'>
                            Sources et traductions complètes
                        </div>
                        <div className='text-sm md:text-base'>
                            En traduisant plusieurs textes écrits aux États-Unis ces dix dernières années, ce recueil souhaite autant documenter que transmettre ce nouvel abolitionnisme : vivre sans police.
                            <br />
                            Nous proposons ici les traductions complètes dont les extraits composent certains chapitres du livre.
                        </div>
                        <div className=' text-gray-500 font-bold text-xl pt-1 text-right md:text-left'>
                            <Link href="/sourcesEtTraductions">
                                <a>Lire</a>
                            </Link>
                        </div>
                        <div className=''>
                        </div>
                    </div>

                    <div className='flex items-center py-6 px-12'>
                        <Image
                            src={pigs}
                            alt="Couverture Abolir la police"
                            quality={50}
                            layout="intrinsic"
                            // width={309}
                            // height={468}
                            className=''
                        // blurDataURL="data:..." automatically provided
                        // Optionally allows to add a blurred version of the image while loading
                        // placeholder="blur"
                        />
                    </div>

                </div>
                <div className="text-2xl md:text-3xl font-Bold px-12 titreNav transforme pt-12  text-center text-gray-500">
                    Le site
                </div>


                <div className='md:grid md:grid-cols-2 px-12 md:px-24'>

                    <div className='hidden md:flex px-12 items-center'>
                        <Image
                            src={tags}
                            alt="Couverture Abolir la police"
                            quality={50}
                            layout="intrinsic"
                            // width={309}
                            // height={468}
                            className=''
                        // blurDataURL="data:..." automatically provided
                        // Optionally allows to add a blurred version of the image while loading
                        // placeholder="blur"
                        />
                    </div>

                    <div className='pt-6'>
                        <div className=' border-t font-bold text-xl pt-1 pb-2'>
                            Aller plus loin

                        </div>

                        <div className='text-sm md:text-base'>
                            Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. En somme différents outils pour aider à défaire la police, la justice et la prison.
                        </div>
                        <div className=' text-gray-500 font-bold text-xl pt-1 text-right'>
                            <Link href="/AllerPlusLoin/allerPlusLoin">
                                <a>Lire</a>
                            </Link>
                        </div>

                        <div className=' border-t font-bold text-xl pt-1 mt-6 pb-2'>
                            Partager des histoires

                        </div>
                        <div className='text-sm md:text-base' >
                            Voici des témoignages, récits ou histoires collectées sur internet ou lors d’ateliers. Toutes les manières d’affronter au quotidien les situations de violences et de torts en dehors du système pénal sont trop invisibilisées. Les institutions pénales nous affaiblissent en s’accaparant nos conflits et les façons de les régler. Alors nous savons trop peu comment résoudre collectivement des problèmes qui font pleinement partie de nos vies. Partager des histoires alternatives permet donc d’avoir de nouvelles idées, de se défaire de certains réflexes et d’apprendre des erreurs ou méthodes des autres. Nous serions très heureux de partager les vôtres aussi. Vous pouvez nous envoyer un mail à : <div className="font-bold"> collectif_matsuda (at) riseup.net</div>                       </div>
                        <div className=' text-gray-500 font-bold text-xl pt-1 text-right'>
                            <Link href="/histoires">
                                <a>Lire</a>
                            </Link>
                        </div>
                        <div className=' border-t font-bold text-xl pt-1 mt-6 pb-2'>
                            Groupes et collectifs
                        </div>
                        <div className='text-sm md:text-base'>
                            Les groupes ou collectifs rassemblés ici ne se disent pas nécessairement abolitionnistes. Mais ils mènent des luttes pour se défendre de la police, de la justice ou de la prison, ici et maintenant. Nous ne faisons que relayer ces organisations contre les violences d’État pour qu’il soit plus facile de les contacter et de connaître les forces en présence. Si vous participez à un collectif qui n’est pas répertorié ici et que vous aimeriez qu’il y soit, n’hésitez pas à nous envoyer un mail !
                        </div>
                        <div className=' text-gray-500 font-bold text-xl pt-1 text-right'>
                            <Link href="/groupes">
                                <a>Lire</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='md:grid md:grid-cols-3 px-3 md:px-3'>

                    <div className=''>
                    </div>
                    <div className=''>

                        <div className='text-3xl font-Bold px-12 titreNav transforme pt-12  text-center text-gray-500'>
                            On Twitter
                        </div>

                        <div className='md:px-12 pr-16 pl-12'>
                            <div className=" text-center  rounded-lg violetBack shadow-lg  ">
                                <div className="transform translate-x-10 translate-y-10 shadow-lg">
                                    <Timeline
                                        dataSource={{
                                            sourceType: 'profile',
                                            screenName: 'CollectifMatsu1'

                                        }}
                                        options={{
                                            chrome: "noheader, nofooter",
                                            width: "500", height: "800"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <footer>




            </footer>
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

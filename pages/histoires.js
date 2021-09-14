import React from 'react'
import Layout from '../components/Layout'
import foule from '../public/foule.jpg'
import Intro from '../components/Intro'
import { getAllPostsWithSlug } from '../components/lib/api';
import Link from 'next/link'
import Seo from '../components/seo/Seo'
import { getHistoires } from '../components/lib/api'
import Image from 'next/image'
import couvMin from '../public/couvMin.jpg'

const histoires = ({
    histoiresPartagees
}) => {
    const texte = "Voici des  témoignages, récits ou histoires collectées sur internet ou lors d’ateliers. Toutes les manières d’affronter au quotidien les situations de violences et de torts en dehors du système pénal sont trop invisibilisées. Les institutions pénales nous affaiblissent en s’accaparant nos conflits et les façons de les régler. Alors nous savons trop peu comment résoudre collectivement des problèmes qui font pleinement partie de nos vies. Partager des histoires alternatives permet donc d’avoir de nouvelles idées, de se défaire de certains réflexes et d’apprendre des erreurs ou méthodes des autres. Nous serions très heureux de partager les vôtres aussi. Vous pouvez nous envoyer un mail à : collectif_matsuda (at) riseup.net"
    // const textComplet= {`${}`} <span className =" font-bold"> collectif_matsuda (at) riseup.net </span>
    const titre = 'Partager des histoires'

    const histoires = histoiresPartagees.posts.edges


    return (
        <div>
            <Layout>
                <Seo title={titre} />
                <Intro src={foule} texte={texte} title={titre} />
                <div className=''>
                    <Image
                        src={couvMin}
                        alt="Visuel couverture"
                        // width={500}
                        quality={50}
                        // height='auto'
                        layout="intrinsic"
                    />
                </div>

                <div className='px-3 md:grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:px-6 lg:px-12 xl:pl-24 xl:pr-12 pb-6 pt-6 '>


                    {histoires.map((histoire) => (
                        <div key={histoire.node.title}>
                            <Link href={`/Post/${histoire.node.slug}`}>
                                <a>
                                    <div className='border-t pb-6 hover:bg-gray-50 ' key={histoire.node.slug}
                                    >
                                        <div className='text-gray-500 pt-3'>
                                            {histoire.node.article.date}
                                        </div>
                                        <div className='font-bold '>
                                            {histoire.node.title}

                                        </div>
                                        <div className='text-gray-500'>
                                            {histoire.node.article.auteur}
                                        </div>
                                        <div className='text-left font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                            __
                                        </div>
                                        <div>
                                            {histoire.node.article.resume}
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}

                </div>

            </Layout>
        </div>
    )
}

export default histoires


export async function getStaticProps() {
    const histoiresPartagees = await getHistoires();
    return {
        props: {
            histoiresPartagees
        },
        revalidate: 30
    };
}

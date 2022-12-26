import React from 'react'
import Layout from '../components/Layout'
import foule from '../public/foule.jpg'
import Intro from '../components/Intro'
import Link from 'next/link'
import { getHistoires } from '../components/lib/api'
import Image from 'next/image'
import couvMin from '../public/couvMin.jpg'

const histoires = ({
    histoiresPartagees
}) => {
    const texte = "Ici, des témoignages de réactions face à des situations de violences. Alors que nous savons trop peu comment résoudre collectivement des problèmes qui font pleinement partie de nos vies, partager des récits permet de se défaire de certains réﬂexes, d’avoir de nouvelles idées, et d’apprendre des erreurs ou méthodes des autres. Vous pouvez nous envoyer vos récits d’expérience à collectif_matsuda (at) riseup.net"
    const titre = 'Partager des histoires'
    const histoires = histoiresPartagees.posts.edges
    const description = "Voici des  témoignages, récits ou histoires collectées sur internet ou lors d’ateliers." 

    return (
        <div>
            <Layout titles={titre} description={description}>
            <div className='bg-fond h-screen'>
                <div className=''>

        <Intro  texte={texte} title={titre} />

                  
                </div>
              

                <div className='gap-x-16 gap-y-6 px-12 md:grid md:grid-cols-2 xl:grid-cols-2 '>

                    {histoires.map((histoire) => (
                        <div key={histoire.node.title}>
                            <Link href={`/Post/${histoire.node.slug}`}>
                                <a>
                                    <div className='bg-white rounded-xl hover:bg-gray-50 p-2 h-52 overflow-hidden ' key={histoire.node.slug}
                                    >
                                        <div className='GillSansUltraBold text-base'>
                                            {histoire.node.title}

                                        </div>
                                        <div className='text-gray-500 underline pb-3 decoration-indigo-900 decoration-4 underline-offset-8  italic  py-2'>
                                            {histoire.node.article.auteur}
                                        </div>
                                        <div className='text-sm elipsis'>
                                            {histoire.node.article.resume}
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
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
        }
        // ,
        // revalidate: 30
    };
}

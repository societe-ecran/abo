import React from 'react'
import Layout from '../components/Layout'
import foule from '../public/foule.jpg'
import Intro from '../components/Intro'
import { getAllPostsWithSlug } from '../components/lib/api';
import Link from 'next/link'
import Seo from '../components/seo/Seo'

const histoires = ({ allPosts: { edges } }) => {
    const texte = ' Voici des témoignages, récits ou histoires collectées sur internet ou lors d’ateliers. Toutes les manières d’affronter au quotidien les situations de violences et de torts en dehors du système pénal sont trop invisibilisées. Les institutions pénales nous affaiblissent en s’accaparant nos conflits et les façons de les régler. Alors nous savons trop peu comment résoudre collectivement des problèmes qui font pleinement partie de nos vies. Partager des histoires alternatives permet donc d’avoir de nouvelles idées, de se défaire de certains réflexes et d’apprendre des erreurs ou méthodes des autres. Nous serions très heureux de partager les vôtres aussi. Vous pouvez nous envoyer un mail à : collectif_matsuda (at) riseup.net.'
    const titre = 'Partager nos histoires'

console.log(edges)
    return (
        <div>
            <Layout>

            <Seo title={titre}/>

                {/* <div className=' p-6 flex flex-raw '>
                    <div className=''>
                       
                        <div className='violetBack '>
                            <div className='transforme -translate-x-5 -translate-y-5 shadow-md'>
                                <Image
                                    src={pig}
                                    alt="illustration"
                                    //   width={500}

                                    quality={100}
                                    //   height='auto'
                                    layout="intrinsic"
                                >

                                </Image>
                            </div>

                        </div>

                    </div>
                    <div className='pl-6 '>
                    <p className='titreNav text-xl '>
                            Partager nos histoires
                        </p>
                        <p className='pt-6 px-6 '>
                            Voici des témoignages, récits ou histoires collectées sur internet ou lors d’ateliers. Toutes les manières d’affronter au quotidien les situations de violences et de torts en dehors du système pénal sont trop invisibilisées. Les institutions pénales nous affaiblissent en s’accaparant nos conflits et les façons de les régler. Alors nous savons trop peu comment résoudre collectivement des problèmes qui font pleinement partie de nos vies. Partager des histoires alternatives permet donc d’avoir de nouvelles idées, de se défaire de certains réflexes et d’apprendre des erreurs ou méthodes des autres. Nous serions très heureux de partager les vôtres aussi. Vous pouvez nous envoyer un mail à : collectif_matsuda@riseup.net.
                        </p>
                    </div>

                </div> */}

                <Intro src={foule} texte={texte} title={titre}/>
              

                <section>
        {edges.map(({ node }) => (
          <div className='' key={node.id}>
         
          </div>
        ))}
      </section>



            </Layout>
        </div>
    )
}

export default histoires


export async function getStaticProps() {
    const allPosts = await getAllPostsWithSlug();
    return {
      props: {
        allPosts
      }
    };
  }
  
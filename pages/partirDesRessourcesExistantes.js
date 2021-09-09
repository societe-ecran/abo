import React from 'react'
import Seo from '../components/seo/Seo'
import Layout from '../components/Layout'
import ArticleHeader from '../components/ArticleHeader'
import occupy from '../public/occupycityhall.png'
import {getPage} from '../components/lib/api'

const PartirDesRessourcesExistantes = (traduction) => {
    const titre = 'Partir des ressources existantes'
    const description = 'Traduction complète'
    
console.log(traduction)

    return (
        <div>

            <Layout>

                <Seo title={titre} description={description} />

                <ArticleHeader src={occupy} title={"Partir des ressources existantes "} author="MPD150" date='2017' />

                <div>


                </div>

            </Layout>
        </div>
    )
}


export default PartirDesRessourcesExistantes

export async function getStaticProps() {
    const traduction = await getPage();
    return {
        props: {
            traduction
        }
    };
}

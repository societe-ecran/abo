import React from 'react'
import Seo from '../../components/seo/Seo'
import Layout from '../../components/Layout'
import ArticleHeader from '../../components/ArticleHeader'
import occupy from '../../public/occupycityhall.jpg'
import {getPageAuWendy} from '../../components/lib/api'

const auWendy = (traduction) => {
    const titre = traduction.traduction.page.title
    const description = 'Traduction complète'
    const auteur = traduction.traduction.page.traductionsCompletes.auteur
    const date = traduction.traduction.page.traductionsCompletes.date
    const trad = traduction.traduction.page.traductionsCompletes.traduction

    return (
        <div>

            <Layout>

                <Seo title={titre} description={description} />

                <ArticleHeader src={occupy} title={titre} author={auteur} date={date} traduction={trad} />

                <div className="xl:px-64 lg:px-32 md:px-24 lg:bg-gray-50 ">
                <div className='titreNav text-gray-800 xl:px-32 lg:px-28 md:px-12 px-3 lg:text-lg bg-white ' dangerouslySetInnerHTML={{ __html: traduction.traduction.page.content }} />
                </div>

            </Layout>
        </div>
    )
}


export default auWendy

export async function getStaticProps() {
    const traduction = await getPageAuWendy();
    return {
        props: {
            traduction
        },
        revalidate: 30
    };
}

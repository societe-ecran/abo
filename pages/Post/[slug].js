import { React, useEffect } from 'react'
import { getAllPostsWithSlug } from '../../components/lib/api';
import { getPost } from '../../components/lib/api';
import Layout from '../../components/Layout'
import Seo from '../../components/seo/Seo'
import foule from '../../public/foule.jpg'
import ArticleHeader from '../../components/ArticleHeader'

const Post = ({ postData }) => {

    let titre = 'ggg'
    let auteur = 'fff'
    let source = 'ff'
    let date = 'fff'

    console.log(postData.partagerNosHistoires)

    if (postData.categories.edges[0].node.name == 'PartagerNosHistoires') {
        titre = postData.partagerNosHistoires.titreDeLarticle
        auteur = postData.partagerNosHistoires.auteur,
            source = postData.partagerNosHistoires.source,
            date = postData.partagerNosHistoires.date
    }

    // if (postData.categories.edges[0].node.name == 'PartagerNosHistoires') {
    //     titre = postData.partagerNosHistoires.titreDaLarticle
    //     auteur = postData.partagerNosHistoires.auteur,
    //         source = postData.partagerNosHistoires.source,
    //         date = postData.partagerNosHistoires.date

    // }
    // else if (postData.categories.edges[0].node.name == 'allerPlusLoin') {
    //     return (
    //         titre = postData.allerPlusLoin.titreDaLarticle,
    //         auteur = postData.allerPlusLoin.auteur,
    //         source = postData.allerPlusLoin.source,
    //         date = postData.allerPlusLoin.date
    //     )

    // }


    const texte = postData.content

    return (
        <div>
            <Layout>
                <Seo title={titre} />

                <ArticleHeader src={foule} title={titre} date={date} author={auteur} source={source} />
                <div className='titreNav text-gray-800 lg:pl-32 pr-24' dangerouslySetInnerHTML={{ __html: texte}} />
            </Layout>
        </div>
    )
}

export default Post


export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts.edges.map(({ node }) => `/Post/${node.slug}`) || [],
        fallback: true,
    }
}


export async function getStaticProps({ params }) {
    const data = await getPost(params.slug);
    return {
        props: {
            postData: data.post
        }
    };
}

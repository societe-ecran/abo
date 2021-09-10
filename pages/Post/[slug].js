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

    console.log(postData)

    // if (data.categories.edges[0].node.name == 'PartagerNosHistoires') {
    //     titre=data.title
    //     titre = data.partagerNosHistoires.titreDeLarticle
    //     auteur = data.partagerNosHistoires.auteur,
    //         source = data.partagerNosHistoires.source,
    //         date = data.partagerNosHistoires.date
    // }

    // const texte = data.content


    return (
        <div>
            <Layout>
                <Seo title={titre} />

                {/* {data.categories.edges[0].node.name == 'PartagerNosHistoires' && */}
                <>
                    {/* <ArticleHeader src={foule} title={postData.title} date={date} author={auteur} source={source} />
                        <div className="xl:px-64 lg:px-32 md:px-24 lg:bg-gray-50 ">
                            <div className='titreNav text-gray-800  xl:px-32 lg:px-28 md:px-12 px-3 lg:text-lg bg-white' dangerouslySetInnerHTML={{ __html: postData.content }} />
                      
                        </div> */}
                    <div>

                        {postData.title}
                    </div>

                </>
                {/* } */}
            </Layout>
        </div>
    )
}

export default Post


export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
    console.log()
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

// export async function getStaticProps({ params }) {
//     const data = await getPost(params.slug);
//     return {
//         props: {
//             postData: data.post
//         }
//     };
// }

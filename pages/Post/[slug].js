import { React, useEffect } from 'react'
import { getAllPostsWithSlug } from '../../components/lib/api';
import { getPost } from '../../components/lib/api';
import Layout from '../../components/Layout'
import Seo from '../../components/seo/Seo'
import foule from '../../public/foule.jpg'
import ArticleHeader from '../../components/ArticleHeader'
// import { useRouter } from 'next/router'

const Post = ({ postData }) => {
    // const router = useRouter()

    // if(!router.isFallback &&!postData?.slug){
    //     return<p>hMMMMM.....</p>
    // }
console.log("oooff")

    return (
        <div>
            <Layout>
                <Seo title={postData.title} description='Partager des histoires' />
                {/* {postData.categories.edges[0].node.name == 'PartagerNosHistoires' && */}
                    <>
                        <ArticleHeader src={foule} title={postData.title} date={postData.article.date} author={postData.article.auteur} source={postData.article.source}
                        // date={postData.partagerNosHistoires.date} author={postData.partagerNosHistoires.auteur} source={postData.partagerNosHistoires.source} 
                        />
                        
                        <div className="xl:px-64 lg:px-32 md:px-24 lg:bg-gray-50 ">
                            <div className='titreNav text-gray-800  xl:px-32 lg:px-28 md:px-12 px-3 lg:text-lg bg-white' dangerouslySetInnerHTML={{ __html: postData.content }} />
                        </div>
                    </>
                    {/* } */}



                {/* { typeof postData !== undefined &&  <>  {postData.title} </> }  
                { typeof postData !== undefined &&  <>  {postData.content} </> }   */}
            </Layout>
        </div>
    )
}

export default Post


export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()

    return {
        paths: allPosts.edges.map(({ node }) => `/Post/${node.slug}`) || [],
        fallback: false,
    }
}


export async function getStaticProps({ params }) {
    const data = await getPost(params.slug);
    return {
        props: {
            postData: data.post
        }
        // ,
        // revalidate: 30
    };
}

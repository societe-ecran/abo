import { React, useEffect } from 'react'
import { getAllPostsWithSlug } from '../../components/lib/api';
import { getPost } from '../../components/lib/api';
import Layout from '../../components/Layout'
import foule from '../../public/foule.jpg'
import ArticleHeader from '../../components/ArticleHeader'
// import { useRouter } from 'next/router'
import Head from 'next/head'
const Post = ({ postData }) => {

    return (
        <div>
            <Layout titles={postData.title} description='Partager des histoires'>
                <>
                    <ArticleHeader src={foule} title={postData.title} date={postData.article.date} author={postData.article.auteur} source={postData.article.source} />
                    <div className="xl:px-64   lg:bg-gray-50 pt-12 ">
                        <div className='text-sm md:text-base sabonRoman text-gray-800  xl:px-32  md:px-32 px-3 lg:text-lg bg-white' dangerouslySetInnerHTML={{ __html: postData.content }} />

                    </div>
                </>

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
    };
}

// import { React, useEffect } from 'react'
// import { getAllPostsWithSlug } from '../../components/lib/api';
// import { getPost } from '../../components/lib/api';
// import Layout from '../../components/Layout'
// import Seo from '../../components/seo/Seo'
// import foule from '../../public/foule.jpg'
// import ArticleHeader from '../../components/ArticleHeader'

// const AllerPlusLoinSlug = ({ postData }) => {

  

//     console.log(postData)


//     return (
//         <div>
//             <Layout>
//                 <Seo title={postData.title} description='Aller plus loin' />

//                 {postData.categories.edges[0].node.name == 'Médias' &&
//                     <>
//                         <ArticleHeader src={foule} title={postData.title} 
//                          date={postData.partagerNosHistoires.date} author={postData.partagerNosHistoires.auteur} source={postData.partagerNosHistoires.source} 

//                         />
//                         <div className="xl:px-64 lg:px-32 md:px-24 lg:bg-gray-50 ">
//                             <div className='titreNav text-gray-800  xl:px-32 lg:px-28 md:px-12 px-3 lg:text-lg bg-white' dangerouslySetInnerHTML={{ __html: postData.content }} />
//                             {postData.content}
//                         </div>
//                     </>}

//                 { typeof postData !== undefined &&  <>  {postData.title} </> }  
//                 { typeof postData !== undefined &&  <>  {postData.content} </> }  
//             </Layout>
//         </div>
//     )
// }

// export default AllerPlusLoinSlug


// export async function getStaticPaths() {
//     const allPosts = await getAllPostsWithSlug()
//     console.log()
//     return {
//         paths: allPosts.edges.map(({ node }) => `/articles/${node.slug}`) || [],
//         fallback: false,
//     }
// }


// export async function getStaticProps({ params }) {
//     const data = await getAllAllerPlusLoin(params.slug);
//     return {
//         props: {
//             postData: data.post
//         }
//     };
// }

import { React, useState } from 'react'
import Layout from '../../components/Layout'
import Intro from '../../components/Intro'
import occupy from '../../public/occupycityhall.jpg'
import Seo from '../../components/seo/Seo'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router'
import { getAllerPlusloin, getCollectifs } from '../../components/lib/api'
import Link from 'next/link'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 500,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        padding: 'Opx 50px 50px 50px',
        textAlign: 'left',
        // backgroundColor: "red"
    },
}));





const allerPlusLoin = (data) => {
    // if(typeof data.featuredImage.node.link !== undefined){  console.log(data.featuredImage.node.link) }    
    // const router = useRouter()
    // const {
    //     query: { id },
    // } = router
    const classes = useStyles();
    // const [value, setValue] = useState(JSON.parse(id));
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const [tabViewed, settabViewed] = useState(JSON.parse(id))
    const [tabViewed, settabViewed] = useState(0)
    const triMedias = () => {
        settabViewed(1)
    }
    const triThématiques = () => {
        settabViewed(0)
    }


    const texte = '  Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. En somme différents outils pour aider à défaire la police, la justice et la prison.'
    const titre = 'Aller plus loin'
    const description = "Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. "


    const groupsTypes = [
        { name: "Vivre sans" },
        { name: "Réformes et luttes" }
    ]

    const groupsTypes2 = [
        { name: "articles" },
        { name: "Podcasts" },
        { name: "fanzines" },
        { name: "Filmographie" },
        { name: "Bibliographie" },
    ]

    // const articlesReforme = []

    // console.log(data.data.edges[0].node.tags.edges.length)
    // const reformes = () => {
    //     for (let i = 0; i < 100; i++) {

    //             for (let j = 0; j < 100; j++) {
    //                 if ( typeof data.data.edges[i].node.tags.edges !== undefined && data.data.edges[i].node.tags.edges[j].node.name == "Justice transformatrice") {
    //                     articlesReforme.push(data.data.edges[i])
    //                 }
    //             }        
    //     }
    // }

    // reformes()

    // post.node.tags.edges.map(tag => {
    //     if (tag.node.name == 'Réformes et luttes') {
    //         articlesReforme.push()
    //     }
    // })


    // const  allo = async function()  {
    //     const res = await getCollectifs()
    // return res
    // }
    // const test= allo()
    // console.log(test)


    return (
        <div >
            <Layout>
                <Seo title={titre} description={description} />
                <Intro src={occupy} title={"Aller plus loin"} texte={texte} />

                {/* <div className='hidden md:block'>
                    <div className='text-center text-xl'>
                        Trié par
                    </div>
                    <div className="flex justify-center text-xl md:pt-3 px-12">


                        {tabViewed == 0 ?
                            <>
                                <button className=' hover:bg-gray-50 rounded-md' onClick={triThématiques}>
                                    Thématiques
                                    <div className='text-center font-bold md:text-4xl text-red-700 transform -translate-y-6'>
                                        __
                                    </div>
                                </button>

                                <button className='hover:bg-gray-50 rounded-md pl-6 ' onClick={triMedias}>
                                    Médias
                                    <div className='text-center font-bold md:text-4xl text-white transform -translate-y-6'>
                                        __
                                    </div>
                                </button>
                            </>
                            :
                            <>
                                <button className=' ' onClick={triThématiques}>
                                    Thématiques
                                    <div className='text-center font-bold md:text-4xl text-white transform -translate-y-6'>
                                        __
                                    </div>
                                </button>

                                <button className=' pl-6' onClick={triMedias}>
                                    Médias
                                    <div className='text-center font-bold md:text-4xl text-red-700 transform -translate-y-6'>
                                        __
                                    </div>
                                </button>
                            </>

                        }


                    </div>

                    {tabViewed == 0 ?


                        <div className='px-0 md:pl-6'>
                            <div className={classes.root}>
                                <div>
                                    <Tabs
                                        orientation="vertical"                             
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs "
                                        className={classes.tabs}
                                    >

                                        {groupsTypes.map((tab) => (
                                            <Tab key={tab.name} label={tab.name} {...a11yProps(0)} />
                                        ))}
                                    </Tabs>
                                </div>

                                <div className='md:pl-20'>
                                    <TabPanel value={value} index={0}> */}
                {/* Vivre sans */}
                {/* <div className='text-sm md:text-base md:grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:px-6 lg:px-12 xl:pl-24 xl:pr-12 pb-6'>
                                            {data.data.edges.map((post) => (
                                                <>
                                                    {post.node.tags.edges.length !== 0
                                                        // && post.node.tags.edges.map(tag => {
                                                        //     if (tag.node.name == 'Réformes et luttes') {
                                                        //         return (true)
                                                        //     }
                                                        // })
                                                        &&
                                                        <Link href={`/Post/${post.node.slug}`}>
                                                            <a>
                                                                <div className='border-t pt-1 pb-6 hover:bg-gray-50 ' key={post.node.slug}
                                                                >
                                                                    <div className='font-bold '>
                                                                        {post.node.title}
                                                                    </div>
                                                                    <div className='text-gray-500 '>
                                                                        {post.node.article.auteur}
                                                                    </div>
                                                                    <div post='text-left font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                                                        __
                                                                    </div>
                                                                    <div className=' '>
                                                                        {post.node.article.resume}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    }
                                                </>
                                            ))}
                                        </div>
                                    </TabPanel>

                                    <TabPanel value={value} index={1}> */}
                {/* Reforme et lutte */}
                {/* Articles à venir
                                    </TabPanel>
                                </div>

                            </div>
                        </div>

                        :

                        <div className='px-0 md:pl-6'>
                            <div className={classes.root}>
                                <div>
                                    <Tabs
                                        orientation="vertical"
                                        // variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs "
                                        className={classes.tabs}
                                    >
                                        {groupsTypes2.map((tab) => (
                                            <Tab label={tab.name} {...a11yProps(0)} />
                                        ))}
                                    </Tabs>
                                </div>

                                <div className='pl-20'>

                                    <TabPanel value={value} index={0}> */}
                {/* ARTICLES */}
                {/* <div className='text-sm md:text-base md:grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:px-6 lg:px-12 xl:pl-24 xl:pr-12 pb-6'>
                                            {data.data.edges.map((post) => (
                                                <>
                                                    {post.node.tags.edges.length !== 0
                                                        // && post.node.tags.edges.map(tag => {
                                                        //     if (tag.node.name == 'Réformes et luttes') {
                                                        //         return (true)
                                                        //     }
                                                        // })
                                                        &&
                                                        <Link href={`/Post/${post.node.slug}`}>
                                                            <a>
                                                                <div className='border-t pt-1 pb-6 hover:bg-gray-50 ' key={post.node.slug}
                                                                >
                                                                    <div className='font-bold '>
                                                                        {post.node.title}
                                                                    </div>
                                                                    <div className='text-gray-500 '>
                                                                        {post.node.article.auteur}
                                                                    </div>
                                                                    <div post='text-left font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                                                        __
                                                                    </div>
                                                                    <div className=' '>
                                                                        {post.node.article.resume}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    }
                                                </>
                                            ))}
                                        </div>
                                    </TabPanel>

                                    <TabPanel value={value} index={1}> */}
                {/* PODCASTS */}
                {/* Articles à venir
                                    </TabPanel>
                                    <TabPanel value={value} index={2}> */}
                {/* FANZINES */}
                {/* Articles à venir
                                    </TabPanel>
                                    <TabPanel value={value} index={3}> */}
                {/* Filmographie */}
                {/* Articles à venir
                                    </TabPanel>
                                    <TabPanel value={value} index={4}> */}
                {/* Bibliographie */}
                {/* Articles à venir
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    }

                </div> */}



                <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:pl-12 '>
                    {data.data.edges.map((post) => (
                        <>
                            {post.node.tags.edges.length !== 0
                                // && post.node.tags.edges.map(tag => {
                                //     if (tag.node.name == 'Réformes et luttes') {
                                //         return (true)
                                //     }
                                // })
                                &&
                                <div className='md:px-6'>
                                    <Link href={`/Post/${post.node.slug}`}>
                                        <a>
                                            <div className='pt-1 pb-6 hover:bg-gray-50 ' key={post.node.slug}
                                            >
                                                <div className='font-bold border-t'>
                                                    {post.node.title}
                                                </div>
                                                <div className='text-gray-500 '>
                                                    {post.node.article.auteur}
                                                </div>
                                                <div post='text-left font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                                    __
                                                </div>
                                                <div className=' '>
                                                    {post.node.article.resume}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            }
                        </>
                    ))}
                </div>





                <div className='md:hidden px-12 text-sm md:text-base pb-6'>
                    {data.data.edges.map((post) => (
                        <>
                            {post.node.tags.edges.length !== 0
                                // && post.node.tags.edges.map(tag => {
                                //     if (tag.node.name == 'Réformes et luttes') {
                                //         return (true)
                                //     }
                                // })
                                &&
                                <div className='pb-6'>
                                    <Link href={`/Post/${post.node.slug}`}>
                                        <a>
                                            <div className='border-t pt-1 pb-6 hover:bg-gray-50 ' key={post.node.slug}
                                            >
                                                <div className='font-bold '>
                                                    {post.node.title}
                                                </div>
                                                <div className='text-gray-500 '>
                                                    {post.node.article.auteur}
                                                </div>
                                                <div post='text-left font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                                    __
                                                </div>
                                                <div className=' '>
                                                    {post.node.article.resume}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            }
                        </>
                    ))}
                </div>



            </Layout>
        </div>
    )
}

export default allerPlusLoin


export async function getStaticProps() {
    const data = await getAllerPlusloin();
    return {
        props: {
            data: data.posts
        },
        revalidate: 30
    };
}
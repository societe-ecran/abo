import { React, useState } from 'react'
import Layout from '../../components/Layout'
import Intro from '../../components/Intro'
import occupy from '../../public/occupycityhall.jpg'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router'
import { getAllerPlusloin } from '../../components/lib/api'
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
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [tabViewed, settabViewed] = useState(0)
    const triMedias = () => {
        settabViewed(1)
    }
    const triThématiques = () => {
        settabViewed(0)
    }

    function truncate(string, length){
        if (string.length > length)
            return string.substring(0,length)+'...';
        else
            return string;
    };

    const texte = "Série de textes et de traductions qui ne ﬁgurent pas dans le livre mais qui ont trait à l’abolitionnisme pénal : pistes de réﬂexion, prises de position et petits bouts d’histoire."
    const titre = 'Aller plus loin'
    const description = "Série de textes et de traductions qui ne ﬁgurent pas dans le livre mais qui ont trait à l’abolitionnisme pénal : pistes de réﬂexion, prises de position et petits bouts d’histoire."

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



    return (

        <div className='bg-fond h-full min-h-screen'>

            <Layout titles={titre} description={description}>
                
                <div className=''>

                <Intro src={occupy} title={"Aller plus loin"} texte={texte} />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6 px-12'>
                    {data.data.edges.map((post) => {

                        return (
                        <>
                            {post.node.tags.edges.length !== 0
                                &&
                                <div className='p-2 rounded-xl bg-white h-52 overflow-hidden '>
                                    <Link href={`/Post/${post.node.slug}`}>
                                        <a>
                                            <div className='pt-1 pb-6' key={post.node.slug}
                                            >
                                                <div className='font-bold text-base GillSansUltraBold '>
                                                    {post.node.title}
                                                </div>
                                                <div className='text-gray-600 py-2 underline italic decoration-indigo-900 decoration-2 underline-offset-8 pb-3'>
                                                    {post.node.article.auteur}
                                                </div>
                                                <div className='text-sm '>
                                                    {post.node.article.resume}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            }
                        </>)
})}
                </div>

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
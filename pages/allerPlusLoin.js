import { React, useState } from 'react'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import occupy from '../public/occupycityhall.png'
import Seo from '../components/seo/Seo'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router'


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





const allerPlusLoin = () => {
    const router = useRouter()
    const {
        query: { id },
    } = router
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
console.log(tabViewed)

    const texte = '  Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. En somme différents outils pour aider à défaire la police, la justice et la prison.'
    const titre = 'Aller plus loin'
    const description = "Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. "

    const groupsTypes = [
        { name: "Histoire" },
        { name: "Réformes et luttes" },
        { name: "Justice transformatrice" },
        { name: "Toutes les thématiques" },
    ]

    const groupsTypes2 = [
        { name: "Bibliographie" },
        { name: "Filmographie" },
        { name: "Podcasts" },
        { name: "fanzines" },
        { name: "articles" },
        { name: "tous les médias" },
    ]

    return (
        <div>
            <Layout>
                <Seo title={titre} description={description} />
                <Intro src={occupy} title={"Aller plus loin"} texte={texte} />

                <div className='text-center text-xl'>
                    Tri par
                </div>
                <div className="flex justify-center text-xl pt-3 px-12">


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


                    <div className=' pl-6'>
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

                                    {groupsTypes.map((tab) => (
                                        <Tab label={tab.name} {...a11yProps(0)} />
                                    ))}

                                </Tabs>
                            </div>

                            <div className='pl-20'>
                                <TabPanel value={value} index={0}>
                                    Item One
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Four
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    Item Five
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    Item Six
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                    Item Seven
                                </TabPanel>
                            </div>

                        </div>
                    </div>

                    :

                    <div className='pt-6 pl-6'>
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
                                <TabPanel value={value} index={0}>
                                    Item One
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Four
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    Item Five
                                </TabPanel>
                                <TabPanel value={value} index={5}>
                                    Item Six
                                </TabPanel>
                                <TabPanel value={value} index={6}>
                                    Item Seven
                                </TabPanel>
                            </div>

                        </div>
                    </div>

                }



            </Layout>
        </div>
    )
}

export default allerPlusLoin
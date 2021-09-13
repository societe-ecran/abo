import { React, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router'
import Intro from '../components/Intro'
import statue from '../public/statueNB.jpg'
import Seo from '../components/seo/Seo'
import { getCollectifs } from '../components/lib/api'

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



const groupes = ({  collectif }) => {
  
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

    const texte = ' Les groupes ou collectifs rassemblés ici ne se disent pas nécessairement abolitionnistes. Mais ils mènent des luttes pour se défendre de la police, de la justice ou de la prison, ici et maintenant. Nous ne faisons que relayer ces organisations contre les violences d’État pour qu’il soit plus facile de les contacter et de connaître les forces en présence. Si vous participez à un collectif qui n’est pas répertorié ici et que vous aimeriez qu’il y soit, n’hésitez pas à nous envoyer un mail !'
    const titre = 'Groupes et collectifs'
    const description = "Les groupes ou collectifs rassemblés ici ne se disent pas nécessairement abolitionnistes. Mais ils mènent des luttes pour se défendre de la police, de la justice ou de la prison, ici et maintenant. "

    const groupsTypes = [
        { name: "Comités vérité et justice" },
        { name: "Collectifs face au maintien de l'ordre" },
        { name: "Collectif anti-repression" },
        { name: "Luttes anti-carcérales" },
        // { name: "COLLECTIFS POUR LA DÉCOLONISATION" }
    ]

    return (
        <div>
            <Layout>

                <Seo title={titre} />

                <Intro title='Groupes et collectifs' texte={texte} src={statue} />

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

                                {groupsTypes.map((tab) => (
                                    <Tab label={tab.name} {...a11yProps(0)} key={tab.name}/>
                                ))}

                            </Tabs>
                        </div>

                        <div className='pl-20'>
                            <TabPanel value={value} index={0}>
                            <div className='titreNav text-gray-800' dangerouslySetInnerHTML={{ __html: collectif.posts.edges[2].node.content }} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                               <div className='titreNav text-gray-800' dangerouslySetInnerHTML={{ __html: collectif.posts.edges[1].node.content }} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            <div className='titreNav text-gray-800' dangerouslySetInnerHTML={{ __html: collectif.posts.edges[3].node.content }} />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <div className='titreNav text-gray-800' dangerouslySetInnerHTML={{ __html: collectif.posts.edges[0].node.content}} />
                            </TabPanel>

                        </div>

                    </div>
                </div>



            </Layout>
        </div>
    )
}




export default groupes

// groupes.getInitialProps = ({ query: { id } }) => {
//     return { id }
// }

export async function getStaticProps(context) {
    const  collectif= await getCollectifs()
    return {
        props: { collectif },
        revalidate: 30
    }
    
}
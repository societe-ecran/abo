import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Accordion, AccordionItem } from 'react-sanfona';
import Seo from '../components/seo/Seo'

const sourcesEtTraductions = () => {
    const titre = 'Sources et traductions'
    const description = " Nous proposons ici les traductions complètes dont les extraits composent certains chapitres du livre."

    const data = [
        { isSommaire: true, sommaire: "Introduction", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "I. Le soulèvement George Floyd", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "« L’urgence du moment et la patience d’un millier d’années »", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "Chronorama du mouvement (Matsuda)", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: false, sommaire: " Never give up ! La lutte contre les crimes policiers aux États-Unis", titreOrignal: 'Never give up!', titreTraduit: 'Never give up ! La lutte contre les crimes policiers aux États-Unis', auteur: ' N. Serfaty', href: 'https://lundi.am/Never-Give-Up-la-lutte-noire-pour-l-abolition-aux-Etats-Unis', link: "" },
        { isSommaire: false, sommaire: "À Minneapolis, construire une ville sans police", titreOrignal: 'Minneapolis Organizers Are Already Building the Tools for Safety Without Police', titreTraduit: '  À Minneapolis, construire une ville sans police', auteur: ' J. H. Shim', link: '', href: 'https://truthout.org/articles/minneapolis-organizers-are-already-building-the-tools-for-safety-without-police/' },
        { isSommaire: true, sommaire: "La violence en armes", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: false, sommaire: "Au Wendy’s à Atlanta : entre paranoïa et fatalisme", titreOrignal: "At the Wendy's :  Armed Struggle at the End of the World", titreTraduit: "Au Wendy’s à Atlanta : entre paranoïa et fatalisme", auteur: ' Anonyme', href: 'https://illwilleditions.com/at-the-wendys/', link: "/Traductions/auWendy's" },
        { isSommaire: false, sommaire: " Lettre à Michael Reinoehl", titreOrignal: ' Letter to Michael Reinoehl', titreTraduit: '   Lettre à Michael Reinoehl', auteur: ' Idris Robinson', href: 'https://illwilleditions.com/letter-to-michael-reinoehl/', link: '' },
        { isSommaire: true, sommaire: " II. De l’esclavage au Black Power", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "  Les prisons sont les nouvelles plantations (Matsuda)", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "Héritages du Black Power (Matsuda)", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "  III. Police : réforme impossible", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: " Généalogie de la police américaine (Matsuda)", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: false, sommaire: "  Les réformes de la police fonctionnent … pour la police", titreOrignal: ' Police Reform Works — For the Police', titreTraduit: 'Les réformes de la police fonctionnent … pour la police', auteur: 'N. Murakawa', href: 'https://level.medium.com/why-police-reform-is-actually-a-bailout-for-cops-ecf2dd7b8833', link: '' },
        { isSommaire: true, sommaire: "  Luttes et réformes (Matsuda)", titreOrignal: ' ', titreTraduit: '  ', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "IV. Le mouvement abolitionniste aujourd’hui", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "Abolition Now ! (Matsuda)", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: false, sommaire: "Campagne #8toabolition", titreOrignal: ' #8toAbolition', titreTraduit: ' Campagne #8toabolition', auteur: ' 8toAbolition', href: ' https://www.8toabolition.com/', link: '' },
        { isSommaire: false, sommaire: "Partir des ressources existantes", titreOrignal: '  MPD150 Report', titreTraduit: '  Partir des ressources existantes', auteur: ' MPD 150', href: 'https://www.mpd150.com/report/ ', link: '/Traductions/partirDesRessourcesExistantes' },
        { isSommaire: false, sommaire: "Ateliers pour imaginer un monde sans police", titreOrignal: 'Transformative Justice - A Curriculum Guide', titreTraduit: 'Ateliers pour imaginer un monde sans police', auteur: `  NIA et ${<a href="http://criticalresistance.org/abolition-of-policing-workshop/" target="_blank" >Critical Resistance</a>}`, href: 'https://project-nia.org/uploads/images/tjcurriculum_design_small-finalrev.pdf', link: '' },
        { isSommaire: false, sommaire: "S’exercer à l’abolition jour après jour", titreOrignal: ' Practising Everyday Abolition', titreTraduit: 'S’exercer à l’abolition jour après jour', auteur: 'S. Lamble', href: ' https://abolitionistfutures.com/latest-news/practising-everyday-abolition', link: '/Traductions/exercerAbolition' },
        { isSommaire: true, sommaire: "   Organisation abolitionniste et transformation de la justice (M. Kaba et A. Young)", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: "V. Féminisme et abolitionnisme", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: true, sommaire: " Construire des réponses féministes (Matsuda)", titreOrignal: '', titreTraduit: '', auteur: '', href: '', link: '' },
        { isSommaire: false, sommaire: " Introduction à la lettre au mouvement contre le viol", titreOrignal: 'Letter to the Anti-Rape Movement', titreTraduit: 'Lettre au mouvement contre le viol', auteur: ' M. Kaba', href: 'https://issuu.com/projectnia/docs/letter-to-the-antirape-movement', link: '' },
        { isSommaire: false, sommaire: " « A la fois beau, difficile et puissant» ", titreOrignal: '    Beautiful, difficult, powerful. Ending sexual assault through tranformative justice', titreTraduit: '   « A la fois beau, difficile et puissant »', auteur: 'Chrysalis', href: ' http://www.blackandpink.org/wp-content/upLoads/Beautiful-Difficult-Powerful.pdf', link: '' },
        { isSommaire: false, sommaire: "Quand la communauté réagit à la violence conjugale", titreOrignal: '  Quand la communauté réagit à la violence conjugale', titreTraduit: 'Community Responds to Domestic Violence', auteur: '   Stop Violence Everyday', href: 'http://publichealth.lacounty.gov/dvcouncil/minutes/2019/04/STOP-Community%20Responds%20to%20Violence.pdf', link: '' },
        { isSommaire: false, sommaire: "Sistas Makin’ Moves !", titreOrignal: " Sistas Makin' Moves !", titreTraduit: '  Sistas Makin’ Moves !', auteur: "  Sista II sista ", href: 'https://collectiveliberation.org/wp-content/uploads/2013/01/Sista_II_Sista_Sistas_Makin_Moves.pdf', link: '/Traductions/sistasMakinMove' },
    ]

    return (

        <div>

            <Layout className=''>

                <Seo title={titre} description={description} />
                <div className=' grid grid-cols-3 px-3 md:pl-6 pb-3 pt-12 titreNav '>
                    <div>
                        SOMMAIRE
                        <div className='text-left font-bold md:text-2xl text-red-700 transform -translate-y-3'>
                            __
                        </div>
                    </div>
                    <div>
                        SOURCES
                        <div className='text-left font-bold md:text-2xl text-red-700 transform -translate-y-3'>
                            __
                        </div>
                    </div>
                    <div>
                        TRADUCTIONS COMPLETES
                        <div className='text-left font-bold md:text-2xl text-red-700 transform -translate-y-3'>
                            __
                        </div>
                    </div>
                </div>

                <div className='text-sm md:text-base z-50'>
                    <Accordion>
                        {data.map(item => {
                         
                            return (
                                <AccordionItem title={
                                    <div>
                                        {item.isSommaire ? ""
                                            :
                                            <div className="ligne z-0"></div>}

                                        <div className='grid grid-cols-3 group sabonRoman '>
                                            <div className='z-10 pl-4  '>
                                                {item.isSommaire ?
                                                    <a className=' px-2 text-gray-400' >
                                                        {item.sommaire}
                                                    </a>
                                                    :
                                                    <a className='bg-white px-2 text-gray-800 group-hover:underline cursorMain' >
                                                        {item.sommaire}
                                                    </a>
                                                }

                                            </div>
                                            <div className='z-10 '>
                                                <a className='bg-white   px-2  group-hover:underline cursorMain'>
                                                    {item.titreOrignal}
                                                </a>
                                            </div>

                                            <div className='z-10 '>
                                                <a className='bg-white px-2  group-hover:underline cursorMain'>
                                                    {item.titreTraduit}
                                                </a>
                                            </div>
                                        </div>
                                    </div>}

                                    expanded={item === 1}
                                    disabled={item.isSommaire}
                                    expandedClassName=' acordionCard '
                                    // className='vignets'
                                    duration={1000}

                                >

                                    <div className='grid grid-cols-3 pb-6 '>
                                        <div>
                                        </div>
                                        <div className=''>
                                            <div className=''>
                                                <div className='pl-2 text-gray-600 '>
                                                    {item.auteur}
                                                </div>
                                                <a href={item.href} target="_blank" className="pl-4 ">
                                                    {/* <button className=' rounded-full py-1 px-2 violetBack text-white '> */}
                                                    <div className='text-right mr-6'>
                                                        <button className='border rounded-full px-3 py-1 hover:bg-gray-50  text-black' >
                                                            Lire le texte original
                                                        </button>
                                                    </div>

                                                    {/* </button> */}

                                                </a>

                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='pl-2 text-gray-600 '>
                                                {item.auteur}
                                            </div>
                                            <Link href={item.link} className=''>
                                                <a className='pl-4 flex flex-col' >
                                                    <div className='text-right mr-6 pt-6 '>

                                                        { item.link !== "" &&
                                                        <button className='border rounded-full px-3 py-1 hover:bg-gray-50 text-black' >
                                                            Lire la traduction complète
                                                        </button>
                                                        }
                                                        

                                                    </div>

                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </AccordionItem>

                            );
                        })}
                    </Accordion>
                </div>





            </Layout>
        </div>
    )
}

export default sourcesEtTraductions

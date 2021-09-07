import React from 'react'
import Layout from '../components/Layout'
import { Timeline } from 'react-twitter-widgets'
import { Accordion, AccordionItem } from 'react-sanfona';
import pigs from '../public/pigs.png'
import tags from '../public/tags.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Seo from '../components/seo/Seo'

export default function actualites() {
    const titre = 'Actualités'
    const description = "Vous trouverez ici les actualités du collectif : dates de tournée, dernières publications et fils twitter."

    const data = [
        { ville: 'Paris', date: '12 octobre 2021', lieu: 'A la bibli', horaires: '19:00', présentation: 'Six ans après les attentats du 13 novembre 2015, qui ont fait 130 morts et plusieurs centaines de blessés au Bataclan, au Stade de France et dans les rues de Paris, le plus grand ' },
        { ville: 'Rennes', date: '12 octobre 2021', lieu: 'Piscine', horaires: '19:00', présentation: 'Six ans après les attentats du 13 novembre 2015, qui ont fait 130 morts et plusieurs centaines de blessés au Bataclan, au Stade de France et dans les rues de Paris, le plus grand ' },
        { ville: 'Lille', date: '12 octobre 2021', lieu: 'Librairie', horaires: '19:00', présentation: 'Six ans après les attentats du 13 novembre 2015, qui ont fait 130 morts et plusieurs centaines de blessés au Bataclan, au Stade de France et dans les rues de Paris, le plus grand ' }
    ]

    const dernieresPublications = [
        { titre: 'A la recherche du temps perdu', date: '12/07/2021', type: 'texte', extrait: 'Six ans après les attentats du 13 novembre 2015, qui ont fait 130 morts et plusieurs centaines de blessés au Bataclan, au Stade de France et dans les rues de Paris, le plus grand ' }

    ]

    return (
        <Layout>
            <Seo title={titre} description={description}/>
            <div className="">
                <div className=''>
                    <div className=' pb-6 pt-6 '>
                        <div className="text-2xl text-center md:text-left md:text-3xl font-Bold px-12 titreNav  border-b  ">
                            {/* <div className='flex justify-start '> */}
                            Dates de la tournée
                            {/* </div> */}

                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-0 mx-3 md:pt-6 md:px-12 '>
                        {data.map(item => {
                            return (
                                <div className='text-sm  md:text-baseshadow md:mx-6 md:my-6 px-3 py-3 rounded-lg border violetBack sabonRoman'>

                                    <div className='text-white'>
                                        {item.date}
                                    </div>
                                    <div className='md:text-xl'>
                                        {item.ville}
                                    </div>
                                    <div className='text-white'>
                                        {item.présentation}
                                    </div>
                                    <div className='text-center font-bold md:text-2xl text-red-700'>
                                        __
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>


                <div className=' pt-12 '>
                    <div className="text-3xl font-Bold px-12 titreNav transforme  text-center pb-5">
                        Documenter l'abolitionnisme
                    </div>
                    <div className="text-3xl font-Bold px-12 titreNav transforme  text-center text-gray-500">
                        Le livre
                    </div>
                </div>

                <div className='md:grid md:grid-cols-2 md:px-24'>
                    <div className='pt-6 px-3 md:px-3'>
                        <div className=' border-t font-bold text-xl pt-1 pb-2  md:pt-3'>
                            Présentation et sommaire du livre
                        </div>

                        <div>
                            Minneapolis, mai 2020.
                            George Floyd, un Afro-Américain de 46 ans, meurt étouffé par la police. Une vague de contestations, inédite depuis les années 1960, s’empare du pays. Manifestations, mobilisations sur les réseaux sociaux, pillages : la singularité de ce mouvement tient autant à son ampleur qu’à la radicalité de ses propositions. Il ne s’agit plus de dénoncer les dérives de l’institution policière, mais de questionner son existence même.
                        </div>
                        <div className=' text-gray-500 font-bold text-xl pt-1 text-right md:text-left'>
                            <Link href="/leLivre">
                                <a>Lire</a>

                            </Link>
                        </div>
                        <div className=' border-t font-bold text-xl pt-1 mt-6 pb-2  md:pt-3'>
                            Sources et traductions complètes
                        </div>
                        <div>
                            En traduisant plusieurs textes écrits aux États-Unis ces dix dernières années, ce recueil souhaite autant documenter que transmettre ce nouvel abolitionnisme : vivre sans police.
                            <br />
                            Nous proposons ici les traductions complètes dont les extraits composent certains chapitres du livre.
                        </div>
                        <div className=' text-gray-500 font-bold text-xl pt-1 text-right md:text-left'>
                            <Link href="/sourcesEtTraductions">
                                <a>Lire</a>
                            </Link>
                        </div>
                        <div className=''>
                        </div>
                    </div>

                    <div className='flex items-center py-6 px-12'>
                        <Image
                            src={pigs}
                            alt="Couverture Abolir la police"
                            quality={100}
                            layout="intrinsic"
                            // width={309}
                            // height={468}
                            className=''
                        // blurDataURL="data:..." automatically provided
                        // Optionally allows to add a blurred version of the image while loading
                        // placeholder="blur"
                        />

                    </div>




                </div>
                <div className="text-3xl font-Bold px-12 titreNav transforme pt-12  text-center text-gray-500">
                    Le site
                </div>


                    <div className='md:grid md:grid-cols-2 px-3 md:px-24'>

                        <div className='hidden md:flex px-12 items-center'>
                            <Image
                                src={tags}
                                alt="Couverture Abolir la police"
                                quality={100}
                                layout="intrinsic"
                                // width={309}
                                // height={468}
                                className=''
                            // blurDataURL="data:..." automatically provided
                            // Optionally allows to add a blurred version of the image while loading
                            // placeholder="blur"
                            />

                        </div>

                            <div className='pt-6'>
                                <div className=' border-t font-bold text-xl pt-1 pb-2'>
                                    Aller plus loin

                                </div>

                                <div>
                                    Régulièrement alimentée, cette section présente différents types de ressources pour mieux comprendre l’histoire de la police et du système pénal, connaître des luttes et stratégies qui s’y sont opposées, partager des façons de prendre en charge les torts, apprendre d’élans et expériences passés et actuels. En somme différents outils pour aider à défaire la police, la justice et la prison.
                                </div>
                                <div className=' text-gray-500 font-bold text-xl pt-1 text-right'>
                                    <Link href="/allerPlusLoin">
                                        <a>Lire</a>
                                    </Link>
                                </div>

                                <div className=' border-t font-bold text-xl pt-1 mt-6 pb-2'>
                                    Partager nos histoires

                                </div>
                                <div>
                                    Voici des témoignages, récits ou histoires collectées sur internet ou lors d’ateliers. Toutes les manières d’affronter au quotidien les situations de violences et de torts en dehors du système pénal sont trop invisibilisées. Les institutions pénales nous affaiblissent en s’accaparant nos conflits et les façons de les régler. Alors nous savons trop peu comment résoudre collectivement des problèmes qui font pleinement partie de nos vies. Partager des histoires alternatives permet donc d’avoir de nouvelles idées, de se défaire de certains réflexes et d’apprendre des erreurs ou méthodes des autres.
                                </div>
                                <div className=' text-gray-500 font-bold text-xl pt-1 text-right'>
                                    <Link href="/histoires">
                                        <a>Lire</a>
                                    </Link>
                                </div>
                                <div className=' border-t font-bold text-xl pt-1 mt-6 pb-2'>
                                    Groupes et collectifs
                                </div>
                                <div>
                                    Les groupes ou collectifs rassemblés ici ne se disent pas nécessairement abolitionnistes. Mais ils mènent des luttes pour se défendre de la police, de la justice ou de la prison, ici et maintenant. Nous ne faisons que relayer ces organisations contre les violences d’État pour qu’il soit plus facile de les contacter et de connaître les forces en présence. Si vous participez à un collectif qui n’est pas répertorié ici et que vous aimeriez qu’il y soit, n’hésitez pas à nous envoyer un mail !
                                </div>
                                <div className=' text-gray-500 font-bold text-xl pt-1 text-right'>
                                    <Link href="/">
                                        <a>Lire</a>
                                    </Link>
                                </div>
                            </div>
                       



                    </div>


           




                <div className='md:grid md:grid-cols-3 px-3 md:px-3'>

                    <div className=''>

                    </div>
                    <div className=''>

                        <div className='text-center text-3xl pt-12 pb-6'>
                            On Twitter
                        </div>

                        <div className='px-12'>
                            <div className=" text-center  rounded-lg violetBack shadow-lg  ">
                                <div className="transform translate-x-10 translate-y-10 shadow-lg">
                                    <Timeline
                                        dataSource={{
                                            sourceType: 'profile',
                                            screenName: 'CollectifMatsu1'

                                        }}
                                        options={{
                                            chrome: "noheader, nofooter",
                                            width: "600", height: "500"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>

                    </div>

                </div>



            </div>




            {/* 

            <div className='flex flex-row justify-around pt-32'>

                <div className='shadow-md w-1/3  mx-12 border rounded-md'>
                    <>
                        <div className="text-center pb-3 pt-1 border-b" >
                            Dernieres Publications
                        </div>
                        <div>
                            {dernieresPublications.map(article => {
                                return (
                                    <div className='px-2 py-2'>


                                        <div className='shadow'>

                                        </div> </div>
                                )
                            })}
                        </div>

                    </>
                </div>

                <div className='shadow-md w-1/3 mx-12 border rounded-md'>
                    <div className="text-center pb-3 pt-1 border-b" >
                        Dates tournée
                    </div>

                    <div className='px-2'>

                        <Accordion>
                            {data.map(item => {
                                return (
                                    <AccordionItem title={

                                        <div className='flex justify-between px-2'>
                                            <div>
                                                {item.ville}
                                            </div>
                                            <div className='text-gray-500'>
                                                {item.date}
                                            </div>
                                        </div>


                                    }
                                        expanded={item === 1}
                                        expandedClassName=' acordionCard2 vignets '
                                        duration={800}
                                    >
                                        <div className="px-2">
                                            <div>
                                                {item.lieu}
                                            </div>
                                            <div>
                                                {item.horaires}
                                            </div>
                                        </div>


                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                </div>

                <div className='shadow-md w-1/3 mx-12 border rounded-md'>
                    <div className="text-center pt-1 pb-2" >
                        Derniers tweets                    </div>
                    <div className='px-2'>
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'CollectifMatsu1'

                            }}
                            options={{
                                chrome: "noheader, nofooter",
                                height: '400'
                            }}
                        />
                    </div>
                </div>

            </div> */}

        </Layout>
    )
}



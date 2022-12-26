import React from 'react';
import Layout from '../components/Layout'
import Image from 'next/image'
import chap1 from '../public/chap1.jpg'
import chap2 from '../public/chap2.jpg'
import chap3 from '../public/chap3.jpg'
import chap4 from '../public/chap4.jpg'
import chap5 from '../public/chap5.jpg'




const lesChapitres = () => {
    const titre = 'Abolir la police - Chapitres'
     const description = "En traduisant plusieurs textes écrits aux États-Unis ces dix dernières années, ce recueil souhaite autant documenter que transmettre ce nouvel abolitionnisme : vivre sans police."

    return (
        <div>
            <Layout titles={titre} description={description}>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center mx-6 mt-12 space-x-3 space-y-12'>
                    <div>
                        <div className='GillSansUltraBold text-xl pb-3'>
                            Le livre
                        </div>
                        <div>
                            En traduisant plusieurs textes écrits aux États-Unis ces dix dernières
                            années, ce recueil souhaite autant documenter que transmettre ce nouvel
                            abolitionnisme : vivre sans police. Nous proposons ici les traductions
                            complètes des textes qui composent l’ouvrage, à télécharger en PDF.
                        </div>
                    </div>
                    <div>
                        <Image
                            src={chap1}
                            alt="Picture of the author"
                            object-fit="contain"
                            quality={30}
                            sizes="(max-width: 20px) 30vw"
                        />
                        <div className="text-center underline pt-1">
                            <a target="_blank" rel="noopener noreferrer" href="CHAPITRE1.pdf" className='text-violetLivre'>Télécharger le pdf</a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={chap2}
                            alt="Picture of the author"
                            object-fit="contain"
                            quality={30}
                        />
                        <div className="text-center underline pt-1">
                            <a target="_blank" rel="noopener noreferrer" href="CHAPITRE2.pdf" className='text-violetLivre'>Télécharger le pdf</a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={chap3}
                            alt="Picture of the author"
                            object-fit="contain"
                            quality={30}
                        />
                        <div className="text-center underline pt-1">
                            <a target="_blank" rel="noopener noreferrer" href="CHAPITRE3.pdf" className='text-violetLivre'>Télécharger le pdf</a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={chap4}
                            alt="Picture of the author"
                            object-fit="contain"
                            quality={30}
                        />
                        <div className="text-center underline pt-1">
                            <a target="_blank" rel="noopener noreferrer" href="CHAPITRE4.pdf" className='text-violetLivre'>Télécharger le pdf</a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={chap5}
                            alt="Picture of the author"
                            object-fit="contain"
                        />
                        <div className="text-center underline pt-1">
                            <a target="_blank" rel="noopener noreferrer" href="CHAPITRE5.pdf" className='text-violetLivre'>Télécharger le pdf</a>
                        </div>
                    </div>

                </div>





            </Layout>
        </div>
    )
}

export default lesChapitres

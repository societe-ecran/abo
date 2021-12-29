import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import couv from '../public/couv.jpg'


const leLivre = () => {
    // const titre = 'Abolir la police - le livre'
    // const description = "En traduisant plusieurs textes écrits aux États-Unis ces dix dernières années, ce recueil souhaite autant documenter que transmettre ce nouvel abolitionnisme : vivre sans police."
    return (
        <div>
            {/* <Layout>
                <Seo title={titre} />
                <div className=" pt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className=" px-3 md:px-6  lg:px-12 flex flex-col">
                        <Image
                            src={couv}
                            alt="Couverture Abolir la police"
                            quality={100}
                            layout="responsive"
                            width={309}
                            height={468}
                            className=''
                        />


                        <div className=" pt-3 md:hidden">
                            <div className="">
                                <span className="border-b border-gray-300  ">
                                    10 septembre 2021
                                </span>
                            </div>
                            <div >
                                <span className="border-b border-gray-300">
                                    336 pages
                                </span>
                            </div>
                            <div className="">
                                <span className="border-b border-gray-300">
                                    ISBN: 979-10-96195-14-5
                                </span>

                            </div>
                            <div className="">
                                <span className="border-b border-gray-300">
                                    14 euros
                                </span>
                            </div>


                            <div className=" md:hidden">
                                <div>
                                    <div className="pt-6 pb-6">
                                        <button className="snipcart-add-item   rounded-full py-2 px-4 violetBack text-white   "
                                            data-item-width='12'
                                            data-item-length='12'
                                            data-item-weight='4'
                                            data-item-id="livre"
                                            data-item-price="14"
                                            data-item-url="leLivre"
                                            data-item-description="Paru le 10 septembre 2021. 336 pages.  ISBN: 979-10-96195-14-5 "
                                            data-item-image="../public/couvMin.jpg"
                                            data-item-name="Livre">
                                            Acheter
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className=' text-sm md:text-base md:hidden flex flex-col  '>
                                <div className='flex flex-col md:items-end sabonRoman  '>
                                    <div>
                                        <h2>
                                            Introduction
                                        </h2>
                                    </div>

                                    <h2 className='indent'>
                                        I. Le soulèvement George Floyd
                                    </h2>

                                    <div>
                                        <h2 className='indent'>
                                            II. De l’esclavage au Black Power
                                        </h2>
                                    </div>
                                    <div>
                                        <h2 className='indent'>
                                            III. Police : réforme impossible
                                        </h2>
                                    </div>
                                    <div>
                                        <h2 className='indent'>
                                            IV. Le mouvement abolitionniste aujourd’hui
                                        </h2>

                                    </div>
                                    <div>
                                        <h2 className='indent'>
                                            V. Féminisme et abolitionnisme
                                        </h2>

                                    </div>
                                    <h2>
                                        Conclusion
                                    </h2>
                                </div>
                                <div className=" hidden md:block">
                                    <div className="">
                                        <span className="border-b border-gray-300  ">
                                            10 septembre 2021
                                        </span>
                                    </div>
                                    <div >
                                        <span className="border-b border-gray-300">
                                            336 pages
                                        </span>
                                    </div>
                                    <div className="">
                                        <span className="border-b border-gray-300">
                                            ISBN: 979-10-96195-14-5
                                        </span>

                                    </div>
                                    <div className="">
                                        <span className="border-b border-gray-300">
                                            14 euros
                                        </span>
                                    </div>

                                </div>

                            </div>




                        </div>


                    </div>

                    <div className="flex flex-col sabonRoman pr-3 ">
                        <div className='text-sm md:text-base'>
                            Minneapolis, mai 2020.
                            <br /> George Floyd, un Afro-Américain de 46 ans, meurt étouffé par la police. Une vague de contestations, inédite depuis les années 1960, s’empare du pays. Manifestations, mobilisations sur les réseaux sociaux, pillages : la singularité de ce mouvement tient autant à son ampleur qu’à la radicalité de ses propositions.

                            Il ne s’agit plus de dénoncer les dérives de l’institution policière, mais de questionner son existence même.
                            <br /> Defund and Abolish the police, démanteler la police et ses financements, sont des mots d’ordre qui, vus de France, peuvent sembler bien abstraits.

                            Ils s’inscrivent pourtant dans l’histoire de la lutte des Noir·es contre l’esclavage et l’incarcération de masse. Ils s’incarnent aussi dans des expériences de justice transformatrice, de solidarité communautaire, d’autodéfense et de soin féministes.

                            <br /> En traduisant plusieurs textes écrits aux

                            États-Unis ces dix dernières années, ce recueil souhaite autant documenter que transmettre ce nouvel abolitionnisme : vivre sans police.
                        </div>



                    </div>

                    <div className=' hidden md:flex flex-col xl:justify-between pr-12 '>
                        <div className='flex flex-col items-end sabonRoman  '>
                            <h2>
                                Introduction
                            </h2>
                            <h2 className='indent'>
                                I. Le soulèvement George Floyd
                            </h2>

                            <div>
                                <h2 className='indent'>
                                    II. De l’esclavage au Black Power
                                </h2>
                            </div>
                            <div>
                                <h2 className='indent'>
                                    III. Police : réforme impossible
                                </h2>
                            </div>
                            <div>
                                <h2 className='indent'>
                                    IV. Le mouvement abolitionniste aujourd’hui
                                </h2>

                            </div>
                            <div>
                                <h2 className='indent'>
                                    V. Féminisme et abolitionnisme
                                </h2>

                            </div>
                            <h2>
                                Conclusion
                            </h2>
                        </div>
                        <div className=" hidden md:block sm:pt-24">
                            <div className="">
                                <span className="border-b border-gray-300  ">
                                    10 septembre 2021
                                </span>
                            </div>
                            <div >
                                <span className="border-b border-gray-300">
                                    336 pages
                                </span>
                            </div>
                            <div className="">
                                <span className="border-b border-gray-300">
                                    ISBN: 979-10-96195-14-5
                                </span>

                            </div>
                            <div className="">
                                <span className="border-b border-gray-300">
                                    14 euros
                                </span>
                            </div>

                            <div className=" hidden md:block">

                                <div>
                                    <div className="pt-6 pb-6">
                                        <button className="snipcart-add-item rounded-full py-2 px-4 violetBack text-white  "
                                            data-item-id="livre"
                                            data-item-price="14"
                                            data-item-url="/leLivre"
                                            data-item-description="Paru le 10 septembre 2021. 336 pages.  ISBN: 979-10-96195-14-5 "
                                            // data-item-image="../public/couv.jpg"
                                            data-item-name="Abolir la police. Échos des États-Unis">
                                            Acheter
                                        </button>

                                    </div>
                                </div>
                            </div>



                        </div>





                    </div>

                </div>



            </Layout> */}
        </div>
    )
}

export default leLivre

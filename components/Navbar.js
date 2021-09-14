import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'


export default function Example() {

  const router = useRouter()
  const LeLivre = [
    {
      name: "L'acheter",
      description: '',
      href: 'https://achat-livre-abolir.vercel.app/',
    },
    {
      name: 'Sources et traductions complètes',
      description: '',
      href: '/sourcesEtTraductions',
    },
  ]

  const AllerPlusLoin = [
    {
      name: 'Médias',
      description: 'articles, fanzines, bibliographie, filmographie, podcasts',
      href: '/AllerPlusLoin/allerPlusLoin',
      number: 1
    },
    {
      name: 'Thématiques',
      description: 'histoire, réformes et luttes, justice transformatrice',
      href: '/AllerPlusLoin/allerPlusLoin',
      number: 0
    }
  ]

  const Groupes = [
    {
      name: 'Comités vérités et justice',
      description: '',
      href: '/groupes',
      number: 0
      //   icon: IconThree,
    }, {
      name: 'Collectifs face au maintien de l’ordre',
      description: '',
      href: '/groupes',
      number: 1
      // icon: IconTwo,
    },
    {
      name: 'Groupes anti-répression',
      description: '',
      href: '/groupes',
      number: 2
      //   icon: IconTwo,
    },
    {
      name: 'Luttes anti-carcérale',
      description: '',
      href: '/groupes',
      number: 3
    },
  ]


  return (
    <Disclosure as="nav" className="bg-white shadow ">

      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-center h-16">
              <div className=' sm:hidden  block pt-4 pl-2'>
                <Link href="/">
                  <a className=''>
                    <div className=' text-xl HarbourBold text-gray-700   '>
                      <p className=''>
                        ABOLIR LA POLICE
                      </p>
                    </div>
                  </a>
                </Link>
              </div>


              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">

                {/* Mobile menu button */}
                <Disclosure.Button className="flex flex-end items-center p-2 justify-right rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>



              </div>
              <div className="flex-1 flex items-center justify-center pt-5">

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}



                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={` 
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <div className='flex flex-col '>
                            <span className="">Le livre </span>
                            {router.pathname == '/actualites' || router.pathname == '/leLivre' || router.pathname == '/sourcesEtTraductions' ||
                              router.pathname == '/Traductions/neverGiveUp' || router.pathname == "Traductions/auWendy's" || router.pathname == "/Traductions/partirDesRessourcesExistantes" || router.pathname == "/Traductions/exercerAbolition" || router.pathname == "/Traductions/sistasMakinMove" ?
                              <div className='text-center font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                __
                              </div>
                              : ""}
                          </div>

                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10  max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative  bg-white p-7 ">
                                {LeLivre.map((item) => (
                                  <Link href={item.href}>
                                    <a

                                      key={item.name}
                                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >

                                      {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div> */}
                                      <div className="ml-4 pt-3">
                                        <p className="text-sm font-medium text-gray-900 ">
                                          {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>

                      </>
                    )}
                  </Popover>



                  {/* <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <div className='flex flex-col'>
                          <Link href="/AllerPlusLoin/allerPlusLoin">
                            <a> Aller plus loin  </a>
                          </Link>
                          
                            {router.pathname == '/allerPlusLoin' ?
                              <div className='text-center font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                __
                              </div>
                              :
                               <div className='text-center font-bold md:text-2xl text-white transform -translate-y-6'>
                                __
                              </div>}
                          </div>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >                           
                        <Popover.Panel className="absolute z-10  max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative  bg-white p-7 ">
                                {AllerPlusLoin.map((item) => (
                                  <Link
                                    href={{
                                      pathname: "/AllerPlusLoin/allerPlusLoin",
                                      query: { id:item.number },
                                    }}

                                  >
                                    <a
                                      key={item.name}
                                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >

                                      <div className="ml-4 pt-3">
                                        <p className="text-sm font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover> */}


                  <Popover className="relative">
                    {({ open }) => (
                      <Popover.Button
                        className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <div className='flex flex-col'>
                          <Link href='/AllerPlusLoin/allerPlusLoin'>
                            <a> Aller plus loin </a>
                          </Link>


                          {router.pathname.includes("Post") ||router.pathname == '/AllerPlusLoin/allerPlusLoin'  ?
                            <div className='text-center font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                              __
                            </div>
                            : ""}
                        </div>

                        {router.pathname == '/' ? "" : ''}

                      </Popover.Button>
                    )}
                  </Popover>


                  <Popover className="relative">
                    {({ open }) => (
                      <Popover.Button
                        className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <div className='flex flex-col'>
                          <Link href='/histoires'>
                            <a> Partager des histoires </a>
                          </Link>


                          {router.pathname == '/histoires' ?
                            <div className='text-center font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                              __
                            </div>
                            : ""}
                        </div>

                        {router.pathname == '/' ? "" : ''}

                      </Popover.Button>
                    )}
                  </Popover>


                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <div className='flex flex-col'>
                            <Link href='/groupes'>
                              <span className="">Trouver des groupes près de chez vous </span>
                            </Link>

                            {router.pathname == '/groupes' ?
                              <div className='text-center font-bold md:text-2xl text-red-700 transform -translate-y-6'>
                                __
                              </div>
                              : ""}
                          </div>
                        </Popover.Button>
                        {/* <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute  max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative z-50  bg-white p-7 ">
                             
                                {Groupes.map((item) => (
                                   <Link
                                    href={{
                                      pathname: "/groupes",
                                      query: { id: item.number },
                                    }}
                                  >
                                    <a
                                      key={item.name}
                                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                    >
                                      <div className="ml-4 pt-3">
                                        <p className="text-sm font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                </a>
                                  </Link>
                                ))}    
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition> */}
                      </>
                    )}
                  </Popover>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mb-3 pl-3 ">
            <div className="pt-2 pb-4 flex flex-col">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}


              <div className=''>
                Le livre

                <div className='pl-5 pb-4'>

                  {LeLivre.map((item) => (
                    <Link href={item.href}>
                      <a

                        key={item.name}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >

                        {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div> */}
                        <div className="ml-4 pt-3">
                          <p className="text-sm font-medium text-gray-900 ">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <div className='transition duration-150 ease-in-out rounded-lg py-3 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
                <Link href='/AllerPlusLoin/allerPlusLoin'>
                  <a>
                    Aller plus loin
                  </a>
                </Link>
              </div>

              <div className='transition duration-150 ease-in-out rounded-lg py-3  hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
                <Link href='/histoires'>
                  <a>
                    Partager nos histoires
                  </a>
                </Link>
              </div>

              <div className='transition duration-150 ease-in-out rounded-lg py-3  hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
                <Link href='/groupes'>
                  <a>
                  Trouver des groupes près de chez vous
                  </a>
                </Link>
              </div>

              {/* <div className='pt-2'>
                Trouver des groupes près de chez vous

                <div className='pl-5 pb-4'>
                  {Groupes.map((item) => (
                    <Link
                      href={{
                        pathname: "/groupes",
                        query: { id: item.number },
                      }}
                    >
                      <a
                        key={item.name}
                        className="flex items-center p-2 -m-3 pt-2  transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="ml-4 pt-3">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>

                    </Link>
                  ))}

                </div>
              </div> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

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
      name: "Actualités",
      description: '',
      href: '/actualites',
    },
    {
      name: "L'acheter",
      description: '',
      href: '/leLivre',
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
      href: '/allerPlusLoin',
      number:1
    },
    {
      name: 'Thématiques',
      description: 'histoire, réformes et luttes, justice transformatrice',
      href: '/allerPlusLoin',
      number:0
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
                  {/* <span className="sr-only">Open main menu</span> */}
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
                            {router.pathname == '/actualites' || router.pathname == '/leLivre' || router.pathname == '/sourcesEtTraductions' ?
                              <div className='text-center font-bold md:text-4xl text-red-700 transform -translate-y-6'>
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



                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <div className='flex flex-col'>
                            <span>Aller plus loin </span>
                            {router.pathname == '/allerPlusLoin' ?
                              <div className='text-center font-bold md:text-4xl text-red-700 transform -translate-y-6'>
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
                                {AllerPlusLoin.map((item) => (
                                  <Link
                                    href={{
                                      pathname: "/allerPlusLoin",
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
                            <a> Partager nos histoires </a>
                          </Link>


                          {router.pathname == '/histoires' ?
                            <div className='text-center font-bold md:text-4xl text-red-700 transform -translate-y-6'>
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
                            <span className="">Trouver des groupes près de chez vous </span>
                            {router.pathname == '/groupes' ?
                              <div className='text-center font-bold md:text-4xl text-red-700 transform -translate-y-6'>
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
                          <Popover.Panel className="absolute   max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
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
                        </Transition>
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
                <Link href='/allerPlusLoin'>
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


              <div className='pt-2'>
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
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}





// import React from 'react'
// import Link from 'next/link'
// import { Popover, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'
// import { Fragment } from 'react'


// const LeLivre = [
//   {
//     name: "Actualités",
//     description: '',
//     href: '/actualites',
//     //   icon: IconOne,
//   },
//   {
//     name: "L'acheter",
//     description: '',
//     href: '/leLivre',
//     //   icon: IconOne,
//   },
//   {
//     name: 'Sources et traductions complètes',
//     description: '',
//     href: '/sourcesEtTraductions',
//     //   icon: IconOne,
//   },
// ]

// const AllerPlusLoin = [
//   {
//     name: 'Médias',
//     description: 'articles, fanzines, bibliographie, filmographie, podcasts',
//     href: '/allerPlusLoin',
//     //   icon: IconOne,
//   },
//   {
//     name: 'Thématiques',
//     description: 'histoires, réformes et luttes, justice transformatrice',
//     href: '/allerPlusLoin',
//     //   icon: IconTwo,
//   }
// ]

// const Groupes = [
//   {
//     name: 'Comités vérités et justice',
//     description: '',
//     href: '/groupes',
//     number: 0
//     //   icon: IconThree,
//   }, {
//     name: 'Collectifs face au maintien de l’ordre',
//     description: '',
//     href: '/groupes',
//     number: 1
//     // icon: IconTwo,
//   },
//   {
//     name: 'Groupes anti-répression',
//     description: '',
//     href: '/groupes',
//     number: 2
//     //   icon: IconTwo,
//   },
//   {
//     name: 'Luttes anti-carcérale',
//     description: '',
//     href: '/groupes',
//     number: 3
//   },

// ]

// export default function Navbar() {
//   return (
//     <div className="flex flex-row justify-center titreNav ">


//       <Popover.Group className="flex flex-row border-t  ">

//         <Popover className="relative">
//           {({ open }) => (
//             <>
//               <Popover.Button
//                 className={` 
//                 ${open ? '' : 'text-opacity-90'}
//                 text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
//               >
//                 <span>Le livre </span>
//               </Popover.Button>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute z-10  max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
//                   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                     <div className="relative  bg-white p-7 ">
//                       {LeLivre.map((item) => (
//                         <Link href={item.href}>
//                           <a

//                             key={item.name}
//                             className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                           >

//                             {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
//                           <item.icon aria-hidden="true" />
//                         </div> */}
//                             <div className="ml-4 pt-3">
//                               <p className="text-sm font-medium text-gray-900 ">
//                                 {item.name}
//                               </p>
//                               <p className="text-sm text-gray-500">
//                                 {item.description}
//                               </p>
//                             </div>
//                           </a>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </Popover.Panel>
//               </Transition>

//             </>
//           )}
//         </Popover>



//         <Popover className="relative">
//           {({ open }) => (
//             <>
//               <Popover.Button
//                 className={`
//                 ${open ? '' : 'text-opacity-90'}
//                 text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
//               >
//                 <span>Aller plus loin </span>
//                 {/* <ChevronDownIcon
//                   className={`${open ? '' : 'text-opacity-70'}
//                   ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
//                   aria-hidden="true"
//                 /> */}
//               </Popover.Button>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute z-10  max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
//                   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                     <div className="relative  bg-white p-7 ">
//                       {AllerPlusLoin.map((item) => (
//                         <Link href={item.href}>
//                           <a
//                             key={item.name}
//                             className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                           >
//                             {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
//                           <item.icon aria-hidden="true" />
//                         </div> */}
//                             <div className="ml-4 pt-3">
//                               <p className="text-sm font-medium text-gray-900">
//                                 {item.name}
//                               </p>
//                               <p className="text-sm text-gray-500">
//                                 {item.description}
//                               </p>
//                             </div>
//                           </a>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </>
//           )}
//         </Popover>


//         <Popover className="relative">
//           {({ open }) => (
//             <Popover.Button
//               className={`
//                 ${open ? '' : 'text-opacity-90'}
//                 text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
//             >
//               <span>
//                 <Link href='/histoires'>
//                   <a> Partager nos histoires </a>
//                 </Link>
//               </span>
//               {/* <ChevronDownIcon
//                 className={`${open ? '' : 'text-opacity-70'}
//                   ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
//                 aria-hidden="true"
//               /> */}
//             </Popover.Button>
//           )}
//         </Popover>



//         <Popover className="relative">
//           {({ open }) => (
//             <>
//               <Popover.Button
//                 className={`
//                 ${open ? '' : 'text-opacity-90'}
//                 text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
//               >
//                 <span>Trouver des groupes près de chez vous </span>
//                 {/* <ChevronDownIcon
//                   className={`${open ? '' : 'text-opacity-70'}
//                   ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
//                   aria-hidden="true"
//                 /> */}
//               </Popover.Button>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-200"
//                 enterFrom="opacity-0 translate-y-1"
//                 enterTo="opacity-100 translate-y-0"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 translate-y-0"
//                 leaveTo="opacity-0 translate-y-1"
//               >
//                 <Popover.Panel className="absolute z-10  max-w-sm px-4 mt-1 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
//                   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                     <div className="relative  bg-white p-7 ">
//                       {Groupes.map((item) => (
//                         <Link

//                           href={{
//                             pathname: "/groupes",
//                             query: { id: item.number },
//                           }}
//                         >
//                           <a
//                             key={item.name}
//                             className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                           >
//                             {/* <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
//                           <item.icon aria-hidden="true" />
//                         </div> */}
//                             <div className="ml-4 pt-3">
//                               <p className="text-sm font-medium text-gray-900">
//                                 {item.name}
//                               </p>
//                               <p className="text-sm text-gray-500">
//                                 {item.description}
//                               </p>
//                             </div>
//                           </a>

//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </Popover.Panel>
//               </Transition>
//             </>
//           )}
//         </Popover>


//       </Popover.Group>
//     </div >
//   )
// }

// function IconOne() {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//       <path
//         d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
//         stroke="#FB923C"
//         strokeWidth="2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
//         stroke="#FDBA74"
//         strokeWidth="2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
//         stroke="#FDBA74"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function IconTwo() {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//       <path
//         d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
//         stroke="#FB923C"
//         strokeWidth="2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
//         stroke="#FDBA74"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function IconThree() {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//       <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
//       <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
//       <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
//       <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
//       <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
//       <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
//     </svg>
//   )
// }


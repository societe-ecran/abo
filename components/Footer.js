import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {
  const navigation = {

    social: [
      {
        name: 'Twitter',
        href: 'https://twitter.com/collectifmatsu1',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },

    ],
  }
  return (
    <>
      <div className="relative mt-12 pt-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto  overflow-hidden  ">
        <div className='text-center text-gray-400 '>
          collectif_matsuda@riseup.net
        </div>
        <div className="mt-2 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" className="text-blue-500 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center">

          <div className="mt-3 text-center text-base text-gray-400">
            Made with
            <div className='transform translate-x-7'>
              <HeartIcon className="h-5 w-5  text-red-600" />
             
            </div>
             <div>
                by {`{team17}`}
              </div>
          </div>
          <div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Footer

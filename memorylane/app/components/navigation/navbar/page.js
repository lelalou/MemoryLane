"use client"

import Image from 'next/image'
import Link from "next/link";
import { useState } from 'react';

const Navbar=({toggle})=> {
  //creating a responsive navigation bar


  return (
    <>
  <div className="w-full h-20 bg-amber-100 sticky top-0">
    <div className='container mx-auto px-4 h-full'>
        <div className='flex justify-between items-center h-full text-block'>
                MemoryLane
            <button type="button" className="inline-flex items-center md:hidden bg-brown-100 "
                onClick={toggle}>
                {/* Menu icon */}
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24">
                        <path fill="#fff"
                            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                    </svg>
                    </button>
            <ul className='hidden md:flex gap-x-6 text-white'>
                <li> <button type="button" className='w-20 h-20 bg-amber-100 hover:bg-amber-300'>
                <Link href="/register">
                        <p className="text-black text-center font-bodoni-moda text-15 font-bold  ">about</p>
                    </Link>

                </button>
                    
                </li>
                <li>
                  <button type="button" className='w-20 h-20 bg-amber-100 hover:bg-yellow-700'>
                  <Link href="/plans">
                        <p className='text-black text-center font-bodoni-moda text-15 font-bold '>plans</p>
                    </Link>

                  </button>
                    
                </li>
                <li>
                  <button type='button'className='w-20 h-20 bg-amber-100 hover:bg-amber-800 hover:text-white' >
                    <Link href="/">
                          <p className='text-black text-center font-bodoni-moda text-15 font-bold hover:text-white'>home</p>
                      </Link>
                  </button>
                    
                </li>
                <div className='hidden md:block'>
                    {/* this is where the hamburger button appears */}
                
                </div>
            </ul>
        </div>
    </div>
  </div>
  </>
  )
}

export default Navbar;
//an example of a "card"
{/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a> */}

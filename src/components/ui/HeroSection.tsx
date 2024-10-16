import Link from 'next/link'
import React from 'react'
import { Spotlight } from './Spotlight'
import { Button } from "../ui/moving-border";

function HeroSection() {
  return (
    <div>
    <div className='h-auto md:h-[40rem] w-full rounded-md flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
    <div className='p-4 relative z-10 w-full text-center'>
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the Art of Music</h1>
       
        <p className='mt-4 font-normal text-base md:tet-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum yada yada</p>
        
        <div className="mt-4">
            <Link href={"/courses"}>
            <Button borderRadius='1.75rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>
                Explore Courses
            </Button>
            </Link>
        </div>
    </div>
    </div>


    </div>
  )
}

export default HeroSection
'use client'
import React from 'react'
import courseData from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';



function FeaturesCourses() {
    const featuredCourses = courseData.courses.filter((course) => course.isFeatured);

    return (
        <div>
        <div className='py-12 bg-gray-900`'>
           <div className='text-center'>
              <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-whiye sm:text-4xl'>Learn with the best</p>
           </div>
           <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            
              {featuredCourses.map((course) => (
                <div key={course.id} className="rounded-lg shadow-md overflow-hidden">
                  <BackgroundGradient>
                
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-950 mb-4">{course.description}</p>
                    <Link href={`/courses/${course.slug}`}>Learn More</Link>
                    <p className="text-yellow-800 font-bold">${course.price}</p>
                    <p className="text-gray-950 mt-2">Instructor: {course.instructor}</p>
                  </div>
                  </BackgroundGradient>
                </div>
                
              ))}
            </div>
           </div>
           <div className='mt-20 text-center'>
            <Link href="/courses" className="text-teal-500 hover:text-teal-600 font-semibold">View All Courses</Link>
           </div>
           </div>
        </div>
  )
}

export default FeaturesCourses
import React from 'react'
import process from "../assets/process.png"
import ic1 from "../assets/ic-1.png"
import ic2 from "../assets/ic-2.png"
import ic3 from "../assets/ic-3.png"
import ic4 from "../assets/ic-4.png"
import processtemplate from "../assets/process_template.png"

const Process = () => {
  return (
    <div className='bg-gradient-to-t from-orange-100 to-sky-400'>
        <div class="container px-5 pt-6 mx-auto">
    <div class="flex flex-col text-center w-full mb-6">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">OUR PROCESS</h1>
    </div></div>
        <section class="text-gray-600 body-font items-center mx-4">
    <div class="container px-5 py-4 mx-auto flex flex-wrap">
      <div class="flex flex-wrap w-full">
      <img class="lg:w-1/3 object-cover object-center rounded-lg md:mt-0 mt-12 animate-slide-in-right" src={processtemplate} alt="step"/>
        <div class="lg:w-1/3 md:pl-16 md:py-6 pl-8 pt-6 md:pt-4">
          <div class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
             <img className='h-5 w-5' src={ic1} />
            </div>
            <div class="pl-4">
              <h2 class="font-medium title-font text-sm text-gray-900 mb-1 text-left">Planning & Design</h2>
              <p class="leading-relaxed text-left">Collaborating with engineers to create blueprints.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <img className='h-5 w-5' src={ic2} />
            </div>
            <div class="pl-4">
              <h2 class="font-medium title-font text-sm text-gray-900 mb-1 text-left">Permitting</h2>
              <p class="leading-relaxed text-left">Ensuring compliance with local regulations.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <img className='h-5 w-5' src={ic3} />
            </div>
            <div class="pl-4">
              <h2 class="font-medium title-font text-sm text-gray-900 mb-1 text-left">Construction</h2>
              <p class="leading-relaxed">From foundations to finishing.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            </div>
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <img className='h-5 w-5' src={ic4} />
            </div>
            <div class="pl-4">
              <h2 class="font-medium title-font text-sm text-gray-900 mb-1 text-left">Quality Checks</h2>
              <p class="leading-relaxed text-left">Regular inspections for safety and standards.
              </p>
            </div>
          </div>
        </div>
        <img class="lg:w-1/3 object-cover object-center rounded-lg md:mt-0 mt-12 animate-slide-in-right" src={process} alt="step"/>
      </div>
    </div>
  </section></div>
  )
}

export default Process
import React from 'react'
import whatwedo from "../assets/whatwedo.png"
import Process from './process'

const About = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-6 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg xl:text-2xl">We are a private limited
              company involved in the
              construction business, which
              involves planning, designing,
              building, and maintaining
              structures and infrastructure.</p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden" id="about">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-full mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded animate-slide-in-left"
              src={whatwedo}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl xl:text-4xl title-font font-medium mt-10 mb-10">
                About Us
              </h1>
              <p className="leading-relaxed font-sans text-xl font-semibold">
                "Welcome to Embuild Trading Solutions, a private limited company specializing in the home decor and interior designing items, trading, construction plans, repairing & maintainence.""
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col text-center w-full mb-6">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Project Types</h1>

          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full text-white">
              <div class="h-full p-6 rounded-lg border-2 bg-yellow-800 border-gray-300 hover:shadow-lg  hover:border-indigo-500 flex flex-col relative overflow-hidden">
                <h1 class="text-3xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">Residential</h1>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Homes
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Apartments
                </p>
                <p class="flex items-center text-white mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Condominiums
                </p>

              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 bg-sky-900 border-gray-300 hover:shadow-lg  hover:border-indigo-500 flex flex-col relative overflow-hidden">
                <h1 class="text-3xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">
                  <span>Commercial</span>
                </h1>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Offices
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Retail Spaces
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Warehouses
                </p>   </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 bg-yellow-800 border-gray-300 hover:shadow-lg  hover:border-indigo-500 flex flex-col relative overflow-hidden">
                <h1 class="text-3xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">
                  <span>Industrial</span>
                </h1>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Factories
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Power Plants
                </p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 bg-sky-900 border-gray-300 hover:shadow-lg  hover:border-indigo-500 flex flex-col relative overflow-hidden">
                <h1 class="text-3xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">
                  <span>Infrastructure</span>
                </h1>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Roads
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Bridges
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Airports
                </p>
                <p class="flex items-center text-white mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Utilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Process />
    </div>
  )
}

export default About
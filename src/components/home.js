import React from 'react'
import sideicon from "../assets/side_icon.png"
import downArrow from "../assets/down-arrow.png"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-xl mb-4  font-medium text-gray-900">Renting and operational leasing of construction and civil-engineering machinery and equipment without operator
                        </h1>
                        <Link class="flex lg:flex-row md:flex-col" to='/about'>
                            <button class="bg-gray-100 mt-4 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">

                                <span class="mr-4 flex items-start flex-col leading-none">
                                    <span class="title-font font-medium">Read More</span>
                                </span>
                                <img className='w-5 h-5' src={downArrow} />
                            </button>
                        </Link>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center items-center justify-center rounded lg:h-[600px] h-[300px] w-auto" alt="hero" src={sideicon} />
                    </div>
                </div>
            </section>
         
        </div>
    )
}

export default Home
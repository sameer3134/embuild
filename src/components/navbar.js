import React, { useState } from 'react'
import embuild_logo from "../assets/embuild_logo.png"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <div className="">
    <nav className="relative py-4 flex justify-between items-center bg-gray-100 shadow-lg">
        <a class="flex title-font font-medium items-center text-gray-900  md:mb-0" href='/'>
            <img src={embuild_logo} alt='logo' className='w-10 h-10 ml-4' />
            <span class="ml-3 md:text-lg text-[12px] font-serif font-semibold">EMBUILD TRADING SOULTIONS</span>
        </a>
        <div className="lg:hidden">
            <button
                onClick={toggleMobileMenu}
                className="navbar-burger flex items-center text-blue-600 p-3"
            >
                <svg
                    className="block h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
        <div className="hidden lg:flex lg:items-center">
            <a
                className="py-2 px-6  hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200 hover:underline"
                href="/"
            >
                HOME
            </a>
            <a
                className="py-2 px-6 ml-6 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200 hover:underline"
                href="/about"
            >
                ABOUT US
            </a>
            <a
                className="py-2 px-6 mr-6 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200 ml-3 hover:underline"
                href="/contact"
            >
                CONTACT US
            </a>
        </div>
    </nav>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
        <div className="navbar-menu relative z-50">
            <div
                className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
                onClick={toggleMobileMenu}
            ></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8">
                    <a className="mr-auto text-3xl font-bold leading-none" href="#">
                        <svg className="h-12" viewBox="0 0 10240 10240">
                            <path
                                d="M8284 9162 ... (rest of the path data)"
                                xmlns="http://www.w3.org/2000/svg"
                            ></path>
                        </svg>
                    </a>
                    <button
                        onClick={toggleMobileMenu}
                        className="navbar-close p-1 ml-auto text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <ul>
                    <li>
                        <a
                            className="block text-sm text-gray-400 hover:text-gray-500 mb-4"
                            href="/"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="block text-sm text-blue-600 font-bold mb-4"
                            href="/about"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            className="block text-sm text-blue-600 font-bold mb-4"
                            href='/contact'
                        >
                           Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )}
</div>
  )
}

export default Navbar
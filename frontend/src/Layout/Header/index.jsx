import AuthContext from '../../Context/AuthContext';
import TopHeader from './TopHeader'
import React, { useContext } from 'react';

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)
    return (
        <div>
            <TopHeader />
            <nav id="navbar" className="navbar fixed right-0 left-0 top-0 lg:top-[44.5px] px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900"
            >
                <div className="mx-auto container-fluid">
                    <div className="flex flex-wrap items-center justify-between mx-auto">
                        <a href="/" className="flex items-center">
                            <img src="assets/images/logo-dark.png" alt="" className="logo-dark h-[22px] block dark:hidden" />
                            <img src="assets/images/logo-light.png" alt="" className="logo-dark h-[22px] hidden dark:block" />
                        </a>
                        <button data-collapse-toggle="navbar-collapse" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg navbar-toggler group lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div className="flex items-center lg:order-2">
                            {/* <div>
                                        <div className="relative dropdown">
                                            <div className="relative">
                                                <button type="button"
                                                    className="btn border-0 h-[70px] dropdown-toggle px-4 text-gray-500 dark:text-gray-300"
                                                    aria-expanded="false" data-dropdown-toggle="notification">
                                                    <i className="text-2xl mdi mdi-bell"></i>
                                                </button>
                                                <span
                                                    className="absolute text-xs px-1.5 bg-red-500 text-white font-medium rounded-full left-6 top-3 ring-2 ring-white dark:ring-neutral-800">3</span>
                                            </div>
                                            <div className="absolute right-0 top-auto left-auto z-50 hidden list-none bg-white rounded shadow dropdown-menu w-72 dark:bg-neutral-800 "
                                                id="notification">
                                                <div className="border rounded border-gray-50 dark:border-neutral-600"
                                                    aria-labelledby="notification">
                                                    <div className="grid grid-cols-1 ">
                                                        <div className="p-4 bg-gray-50 dark:bg-neutral-700">
                                                            <h6 className="mb-1 text-gray-800 dark:text-gray-50"> Notification </h6>
                                                            <p className="mb-0 text-gray-500 text-13 dark:text-gray-300">You have 4 unread
                                                                Notification</p>
                                                        </div>
                                                    </div>
                                                    <div className="h-60" data-simplebar>
                                                        <div>
                                                            <a href="#!">
                                                                <div className="flex p-4 hover:bg-gray-50/30 dark:hover:bg-neutral-600/50">
                                                                    <div className="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                                                                        <div
                                                                            className="h-10 w-10 bg-violet-500/20 rounded-full text-center leading-[2.8]">
                                                                            <i className="text-lg text-violet-500 uil uil-user-check"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow">
                                                                        <h6 className="mb-1 text-sm text-gray-700 dark:text-gray-300">22
                                                                            verified registrations</h6>
                                                                        <div className="text-gray-600 text-13 dark:text-gray-300">
                                                                            <p className="mb-0"><i
                                                                                className="mdi mdi-clock-outline dark:text-gray-300"></i>
                                                                                <span>3 hour ago</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="grid p-1 border-t border-gray-50 dark:border-zinc-600 justify-items-center bg-gray-50 dark:bg-neutral-700">
                                                        <a className="border-0 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 btn dark:text-gray-50"
                                                            href="javascript:void(0)">
                                                            <i className="mr-1 mdi mdi-arrow-right-circle"></i> <span>View More..</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                            {user ?
                                <div>
                                    <div className="relative dropdown ltr:mr-4 rtl:ml-4">
                                        <button type="button" className="flex items-center px-4 py-5 dropdown-toggle"
                                            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="true">
                                            <img className="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2"
                                                src="assets/images/user/img-02.jpg" alt="Header Avatar" />
                                            <span className="hidden fw-medium xl:block dark:text-gray-50">{user?.get_full_name}</span>
                                        </button>
                                        <ul className="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                                            id="profile/log" aria-labelledby="navNotifications">
                                            <li className="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                <a className="text-15 font-medium text-gray-800 group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                    href="/profile">My Profile</a>
                                            </li>
                                            <li className="p-2 dropdown-item group/dropdown dark:text-gray-300">
                                                <a onClick={logoutUser} className="text-15 font-medium text-gray-800 group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                                                >Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                : null}
                        </div>

                        <div id="navbar-collapse"
                            className="navbar-res items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1 group-focus:[.navbar-toggler]:block hidden">
                            <ul className="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center lg:flex-row"
                                id="navigation-menu">
                                <li className="py-5 lg:px-4">
                                    <a href="/"
                                        className="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50" id="contact"
                                        data-bs-toggle="dropdown">Home </a>
                                </li>

                                <li className="relative dropdown lg:mt-0">
                                    <button className="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]"
                                        id="company" data-bs-toggle="dropdown">Company <i
                                            className='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></button>

                                    <ul className="relative top-auto z-50 py-2 list-none bg-white border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3 lg:w-48 lg:shadow-lg dark:bg-neutral-800"
                                        aria-labelledby="company">
                                        <li><a className="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-gray-50"
                                            href="/about">About Us</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="py-5 lg:px-4">
                                    <a href="/blog"
                                        className="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50" id="contact"
                                        data-bs-toggle="dropdown">Blog </a>
                                </li>
                                <li className="py-5 lg:px-4">
                                    <a href="/contact"
                                        className="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50" id="contact"
                                        data-bs-toggle="dropdown">Contact </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
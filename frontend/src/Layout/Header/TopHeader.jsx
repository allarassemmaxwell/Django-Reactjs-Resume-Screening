import React from 'react'

const TopHeader = () => {
    return (
        <div>
            <div className="hidden px-5 mx-auto border-gray-200 container-fluid lg:px-24 bg-gray-50 md:block dark:bg-neutral-600">
                <div className="grid items-center grid-cols-12">
                    <div className="col-span-7">
                        <ul className="flex items-center py-3">
                            <li className="ltr:mr-4 rtl:ml-4">
                                <p className="mb-0 text-gray-800 text-13 dark:text-gray-50"> <i className="mdi mdi-map-marker"></i> Your
                                    Location: <a href="javascript:void(0)" className="font-medium">New Caledonia</a></p>
                            </li>
                            <li>
                                <ul className="flex flex-wrap gap-4 text-gray-800 ">
                                    <li
                                        className="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                        <a href="javascript:void(0)" className="social-link"><i className="uil uil-whatsapp"></i></a>
                                    </li>
                                    <li
                                        className="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                        <a href="javascript:void(0)" className="social-link"><i
                                            className="uil uil-facebook-messenger-alt"></i></a></li>
                                    <li
                                        className="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                        <a href="javascript:void(0)" className="social-link"><i className="uil uil-instagram"></i></a>
                                    </li>
                                    <li
                                        className="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                        <a href="javascript:void(0)" className="social-link"><i className="uil uil-envelope"></i></a>
                                    </li>
                                    <li
                                        className="transition-all duration-200 ease-in hover:text-green-500 dark:text-gray-50 dark:hover:text-green-500">
                                        <a href="javascript:void(0)" className="social-link"><i className="uil uil-twitter-alt"></i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-5 ltr:ml-auto rtl:mr-auto">
                        <ul className="flex items-center gap-4">
                            <li>
                                <a href="/signin" className="py-3 font-medium text-gray-800 text-13 dark:text-gray-50"
                                    data-tw-toggle="modal" data-tw-target="#modal-id_form"><i
                                        className="uil uil-lock ltr:mr-1 rtl:ml-1"></i>Sign In</a>&nbsp;&nbsp;&nbsp;
                                <a href="signup" className="py-3 font-medium text-gray-800 text-13 dark:text-gray-50"
                                    data-tw-toggle="modal" data-tw-target="#modal-id_form"><i
                                        className="uil uil-lock ltr:mr-1 rtl:ml-1"></i>Sign Up</a>
                            </li>
                            <li>
                                <div className="relative hidden dropdown language sm:block">
                                    <button className="px-4 py-3 border-0 btn dropdown-toggle" type="button" aria-expanded="false"
                                        data-dropdown-toggle="navNotifications">
                                        <img src="assets/images/flags/us.jpg" alt="" className="h-4" id="header-lang-img" />
                                    </button>
                                    <div className="absolute top-auto z-50 hidden w-40 list-none bg-white rounded shadow dropdown-menu -left-20 dark:bg-neutral-700"
                                        id="navNotifications">
                                        <ul className="border border-gray-50 dark:border-gray-700"
                                            aria-labelledby="navNotifications">
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-neutral-600/50 dark:hover:text-white"><img
                                                        src="assets/images/flags/us.jpg" alt="user-image"
                                                        className="inline-block h-3 mr-1" /> <span
                                                            className="align-middle">English</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-neutral-600/50 dark:hover:text-white"><img
                                                        src="assets/images/flags/spain.jpg" alt="user-image"
                                                        className="inline-block h-3 mr-1" /> <span
                                                            className="align-middle">Spanish</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-neutral-600/50 dark:hover:text-white"><img
                                                        src="assets/images/flags/germany.jpg" alt="user-image"
                                                        className="inline-block h-3 mr-1" /> <span
                                                            className="align-middle">German</span></a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 dark:text-gray-200 dark:hover:bg-neutral-600/50 dark:hover:text-white"><img
                                                        src="assets/images/flags/italy.jpg" alt="user-image"
                                                        className="inline-block h-3 mr-1" /> <span
                                                            className="align-middle">Italian</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
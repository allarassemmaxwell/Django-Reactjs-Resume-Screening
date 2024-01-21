import React from 'react'

const index = () => {
    return (
        <div>
            <section className="flex items-center justify-center min-h-screen py-10 group-data-[theme-color=violet]:bg-violet-500/10 group-data-[theme-color=sky]:bg-sky-500/10 group-data-[theme-color=red]:bg-red-500/10 group-data-[theme-color=green]:bg-green-500/10 group-data-[theme-color=pink]:bg-pink-500/10 group-data-[theme-color=blue]:bg-blue-500/10 dark:bg-neutral-700">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                            <div className="flex flex-col bg-white rounded-lg dark:bg-neutral-800">
                                <div className="grid flex-col grid-cols-12">
                                    <div className="col-span-6 ltr:rounded-l-lg rtl:rounded-r-lg">
                                        <div className="p-10">
                                            <a href="index.html">
                                                <img src="assets/images/logo-light.png" alt="" className="hidden mx-auto dark:block" />
                                                <img src="assets/images/logo-dark.png" alt="" className="block mx-auto dark:hidden" />
                                            </a>
                                            <div className="mt-5">
                                                <img src="assets/images/auth/sign-up.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 rounded-b-md lg:col-span-6 group-data-[theme-color=violet]:bg-violet-700 group-data-[theme-color=sky]:bg-sky-700 group-data-[theme-color=red]:bg-red-700 group-data-[theme-color=green]:bg-green-700 group-data-[theme-color=pink]:bg-pink-700 group-data-[theme-color=blue]:bg-blue-700 lg:rounded-b-none lg:ltr:rounded-r-lg rtl:rounded-l-lg">
                                        <div className="flex flex-col justify-center h-full p-12">
                                            <div className="text-center">
                                                <h5 className="text-[18.5px] text-white">Let's Get Started</h5>
                                                <p className="mt-3 text-gray-50">Sign Up and get access to all the features of Jobcy</p>
                                            </div>
                                            <form action="https://themesdesign.in/jobcy-tailwind/layout/index.html" className="mt-8">
                                                <div className="mb-5">
                                                    <label for="usernameInput" className="text-white">Username</label>
                                                    <input type="text" className="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" required="" id="usernameInput" placeholder="Enter your username" />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="passwordInput" className="text-white">Email</label>
                                                    <input type="email" className="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" required="" id="emailInput" placeholder="Enter your email" />
                                                </div>
                                                <div className="mb-5">
                                                    <label for="emailInput" className="text-white">Password</label>
                                                    <input type="password" className="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" id="passwordInput" placeholder="Enter your password" />
                                                </div>
                                                <div className="mb-4">
                                                    <div><input className="align-middle border-transparent rounded focus:ring-0 focus:ring-offset-0 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500" type="checkbox" id="flexCheckDefault" />
                                                        <label className="text-white align-middle" for="flexCheckDefault">I agree to the <a href="javascript:void(0)" className="pb-1 text-white underline align-middle">Terms and conditions</a></label>
                                                    </div>
                                                </div>
                                                <div className="my-5 text-center">
                                                    <button type="submit" className="btn w-full bg-white text-gray-900 font-medium border-transparent hover:-translate-y-1.5 duration-500 ease">Sign Up
                                                    </button></div>
                                            </form>
                                            <div className="text-center">
                                                <p className="text-white">Already a member ? <a href="sign-in.html" className="text-white underline fw-medium"> Sign In </a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index
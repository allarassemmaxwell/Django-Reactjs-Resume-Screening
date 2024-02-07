import React, {useContext} from 'react'
import AuthContext from "../../Context/AuthContext";
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer'

const Login = () => {
    let {loginUser} = useContext(AuthContext)
    
    return (
        <div>
            <Header />
            
            <section className="flex items-center justify-center min-h-screen py-10 group-data-[theme-color=violet]:bg-violet-500/10 group-data-[theme-color=sky]:bg-sky-500/10 group-data-[theme-color=red]:bg-red-500/10 group-data-[theme-color=green]:bg-green-500/10 group-data-[theme-color=pink]:bg-pink-500/10 group-data-[theme-color=blue]:bg-blue-500/10 dark:bg-neutral-700">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                            <div className="flex flex-col bg-white rounded-lg dark:bg-neutral-800">
                                <div className="grid flex-col grid-cols-12 ">
                                    <div className="col-span-12 lg:col-span-6 ltr:rounded-l-lg rtl:rounded-r-lg">
                                        <div className="p-10">
                                            <a href="index.html">
                                                <img src="assets/images/logo-light.png" alt="" className="hidden mx-auto dark:block" />
                                                <img src="assets/images/logo-dark.png" alt="" className="block mx-auto dark:hidden" />
                                            </a>
                                            <div className="mt-5">
                                                <img src="assets/images/auth/sign-in.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 rounded-b-md lg:col-span-6 group-data-[theme-color=violet]:bg-violet-700 group-data-[theme-color=sky]:bg-sky-700 group-data-[theme-color=red]:bg-red-700 group-data-[theme-color=green]:bg-green-700 group-data-[theme-color=pink]:bg-pink-700 group-data-[theme-color=blue]:bg-blue-700 lg:rounded-b-none lg:ltr:rounded-r-lg rtl:rounded-l-lg">
                                        <div className="flex flex-col justify-center h-full p-12">
                                            <div className="text-center">
                                                <h5 className="text-[18.5px] text-white">Welcome Back !</h5>
                                                <p className="mt-3 text-white/80">Sign in to continue to Jobcy.</p>
                                            </div>
                                            <form className="mt-8" onSubmit={loginUser}>
                                                <div className="mb-5">
                                                    <label htmlFor="usernameInput" className="text-white">Email</label>
                                                    <input required type="text" name="email" className="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" placeholder="Enter your email" />
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="emailInput" className="text-white">Password</label>
                                                    <input required type="password" name="password" className="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" placeholder="Enter your password" />
                                                </div>
                                                <div ><input className="align-middle border-transparent rounded focus:ring-0 focus:ring-offset-0 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500" type="checkbox" id="flexCheckDefault" />
                                                    <a href="reset-password.html" className="text-white ltr:float-right rtl:float-left">Forgot Password?</a>
                                                    <label className="text-white align-middle" htmlFor="flexCheckDefault">Remember me</label>
                                                </div>
                                                <div className="my-8 text-center">
                                                    <button type="submit" className="btn w-full bg-white text-gray-900 font-medium border-transparent hover:-translate-y-1.5 duration-500 ease">Sign In
                                                    </button></div>
                                            </form>
                                            <div className="text-center">
                                                <p className="text-white">Already a member ? <a href="/register" className="text-white underline fw-medium"> Sign Up </a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Login
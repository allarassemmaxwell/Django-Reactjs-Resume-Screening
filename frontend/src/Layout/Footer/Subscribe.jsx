import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <section className="relative py-16 overflow-hidden bg-zinc-700 dark:bg-neutral-900">
                <div className="container mx-auto">
                    <div className="grid items-center grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="text-center lg:text-start">
                                <h4 className="text-white">Get New Jobs Notification!</h4>
                                <p className="mt-1 mb-0 text-white/50 dark:text-gray-300">Subscribe &amp; get all related jobs
                                    notification.</p>
                            </div>
                        </div>
                        <div className="z-40 col-span-12 lg:col-span-5">
                            <form className="flex" action="#">
                                <input type="text"
                                    className="w-full text-gray-100 bg-transparent rounded-md border-gray-50/30 ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none placeholder:text-13 placeholder:text-gray-100 dark:text-gray-100 dark:bg-white/5 dark:border-neutral-600 focus:ring-0 focus:ring-offset-0"
                                    id="subscribe" placeholder="Enter your email" />
                                <button
                                    className="text-white border-transparent btn ltr:rounded-l-none rtl:rounded-r-none group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 focus:ring focus:ring-custom-500/30"
                                    type="button" id="subscribebtn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 -top-10 -z-0 opacity-20">
                    <img src="assets/images/subscribe.png" alt="" className="img-fluid" />
                </div>
            </section>
        </div>
    )
}

export default Subscribe
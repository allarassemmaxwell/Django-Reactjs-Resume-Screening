import React from 'react'

const index = () => {
    return (
        <div>
            <section className="py-20 dark:bg-neutral-800">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-5">
                        <div className="mb-5 text-center">
                            <h3 className="mb-3 text-3xl text-gray-900 dark:text-gray-50">Happy Candidates</h3>
                            <p className="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">Post a job to tell us
                                about your project. We'll quickly match you with the right <br /> freelancers.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-8">
                        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                            <div className="pb-5 swiper testimonialSlider">
                                <div className="mb-12 swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-4">
                                                <img src="assets/images/logo/mailchimp.svg" className="h-12 mx-auto"
                                                    alt="" />
                                            </div>
                                            <p className="mb-4 text-lg font-thin text-gray-500 dark:text-gray-200">" Very
                                                well thought out and articulate communication.
                                                Clear milestones, deadlines and fast work. Patience. Infinite patience.
                                                No
                                                shortcuts. Even if the client is being careless. "</p>
                                            <h5 className="mb-0 dark:text-gray-50">Jeffrey Montgomery</h5>
                                            <p className="mb-0 text-gray-500 dark:text-gray-300">Product Manager</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-4">
                                                <img src="assets/images/logo/wordpress.svg" className="h-12 mx-auto"
                                                    alt="" />
                                            </div>
                                            <p className="mb-4 text-lg font-thin text-gray-500 dark:text-gray-200">" Very
                                                well thought out and articulate communication.
                                                Clear milestones, deadlines and fast work. Patience. Infinite patience.
                                                No
                                                shortcuts. Even if the client is being careless. "</p>
                                            <h5 className="mb-0 dark:text-gray-50">Rebecca Swartz</h5>
                                            <p className="mb-0 text-gray-500 dark:text-gray-300">Creative Designer</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-4">
                                                <img src="assets/images/logo/instagram.html" className="h-12 mx-auto"
                                                    alt="" />
                                            </div>
                                            <p className="mb-4 text-lg font-thin text-gray-500 dark:text-gray-200">" Very
                                                well thought out and articulate communication.
                                                Clear milestones, deadlines and fast work. Patience. Infinite patience.
                                                No
                                                shortcuts. Even if the client is being careless. "</p>
                                            <h5 className="mb-0 dark:text-gray-50">Charles Dickens</h5>
                                            <p className="mb-0 text-gray-500 dark:text-gray-300">Store Assistant</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index
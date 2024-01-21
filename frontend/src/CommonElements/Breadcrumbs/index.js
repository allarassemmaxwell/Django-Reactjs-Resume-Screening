import React from 'react'

const index = (props) => {
    const { title = '' } = props;
    return (
        <div>
            <section class="pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900 bg-[url('https://themesdesign.in/jobcy-tailwind/images/home/page-title.png')] bg-center bg-cover relative" >
                <div class="container mx-auto">
                    <div class="grid">
                        <div class="col-span-12">
                            <div class="text-center text-white">
                                <h3 class="mb-4 text-[26px]">{title}</h3>
                                <div class="page-next">
                                    <nav class="inline-block" aria-label="breadcrumb text-center">
                                        <ol class="flex justify-center text-sm font-medium uppercase">
                                            <li><a href="index.html">Home</a></li>
                                            {/* <li><i class="bx bxs-chevron-right align-middle px-2.5"></i><a href="javascript:void(0)">Blog</a></li> */}
                                            <li class="active" aria-current="page"><i class="bx bxs-chevron-right align-middle px-2.5"></i>{title}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/images/about/shape.png" alt="" class="absolute block bg-cover -bottom-0 dark:hidden" />
                <img src="assets/images/about/shape-dark.png" alt="" class="absolute hidden bg-cover -bottom-0 dark:block" />
            </section>
        </div>
    )
}

export default index
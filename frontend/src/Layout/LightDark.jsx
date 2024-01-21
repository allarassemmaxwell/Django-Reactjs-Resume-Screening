import React from 'react'

const LightDark = () => {
  return (
    <div>
        <div className="fixed transition-all duration-300 ease-linear top-[27.5rem] switcher" id="style-switcher">
        <div className="w-48 p-4 bg-white shadow-md">
            <div>
                <h3 className="mb-2 font-semibold text-gray-900 text-16">Select your color</h3>
                <ul className="flex gap-3 ">
                    <li>
                        <a className="h-10 w-10 bg-[#815DF2] block rounded-full" data-color="violet"
                            href="javascript: void(0);"></a>
                    </li>
                    <li>
                        <a className="h-10 w-10 bg-[#69cdf1] block rounded-full" data-color="sky"
                            href="javascript: void(0);"></a>
                    </li>
                    <li>
                        <a className="h-10 w-10 bg-[#dd4948] block rounded-full" data-color="red"
                            href="javascript: void(0);"></a>
                    </li>
                </ul>
                <ul className="flex gap-3 mt-4">
                    <li>
                        <a className="h-10 w-10 bg-[#38c284] block rounded-full" data-color="green"
                            href="javascript: void(0);"></a>
                    </li>
                    <li>
                        <a className="h-10 w-10 bg-[#e35490] block rounded-full" data-color="pink"
                            href="javascript: void(0);"></a>
                    </li>
                    <li>
                        <a className="h-10 w-10 bg-[#5276f4] block rounded-full" data-color="blue"
                            href="javascript: void(0);"></a>
                    </li>
                </ul>
            </div>

            <div className="mt-5">
                <h3 className="mb-2 font-semibold text-gray-900 text-16">Light/dark Layout</h3>
                <div className="flex justify-center mt-2">
                    <a href="javascript: void(0);" id="mode"
                        className="z-40 px-6 py-2 font-normal text-white transition-all duration-300 ease-linear rounded text-14 bg-zinc-800"
                        onclick="changeMode(event)">
                        <i className="hidden text-xl uil uil-brightness dark:text-white dark:inline-block"></i>
                        <i className="inline-block text-xl uil uil-moon dark:text-zinc-800 dark:hidden"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <a href="javascript: void(0);" onclick="toggleSwitcher()"
        className="fixed z-40 flex flex-col gap-3 px-4 py-3 font-normal text-white group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 top-96 text-14 ltr:rounded-r rtl:rounded-l">
        <i className="text-xl mdi mdi-cog mdi-spin"></i>
    </a>
    </div>
  )
}

export default LightDark
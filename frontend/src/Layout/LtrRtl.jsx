import React from 'react'

const LtrRtl = () => {
    return (
        <div>
            <div className="fixed z-40 flex flex-col gap-3 ltr:left-0 rtl:right-0 top-[330px]">
                <a href="javascript: void(0);" id="ltr-rtl"
                    className="z-40 px-3 py-3 font-medium text-white transition-all duration-300 ease-linear group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 text-14 hover:bg-violet-700 ltr:rounded-r rtl:rounded-l"
                    onclick="changeMode(event)">
                    <span className="ltr:hidden">LTR</span>
                    <span className="rtl:hidden">RTL</span>
                </a>
            </div>
        </div>
    )
}

export default LtrRtl
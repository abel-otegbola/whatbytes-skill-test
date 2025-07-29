'use client'

import LogoIcon from "@/assets/icons/logo"
import Image from "next/image"

function Topbar() {

    return (
        <div className="sticky top-0 left-0 w-full flex justify-between bg-[#000]/[0.5] backdrop-blur-sm shadow-sm py-2 p-4 border-b border-gray-500/[0.1] z-[52]">
            <div className="flex items-center gap-2">
                {/* <LogoIcon className="md:w-[30px] w-[20px]" /> */}
                <h1 className="text-lg font-bold">Ace tests</h1>
            </div>

            <button className="flex items-center gap-2 border border-gray-500/[0.1] rounded-lg p-2 md:mr-0 mr-12">
                <Image src="/profile-pic.jpeg" alt="profile pic" width={24} height={24} className="rounded-full" />
                <p className="font-bold">Rahil Siddique</p>
            </button>
        </div>
    )
}

export default Topbar;
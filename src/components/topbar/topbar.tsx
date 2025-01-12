'use client'

import LogoIcon from "@/assets/icons/logo"
import Image from "next/image"

function Topbar() {

    return (
        <div className="flex justify-between md:py-6 py-3 p-6 border-b border-gray-500/[0.1]">
            <div className="flex items-center gap-2">
                <LogoIcon className="md:w-[30px] w-[20px]" />
                <h1 className="text-lg font-bold">WhatBytes</h1>
            </div>

            <button className="flex items-center gap-2 border border-gray-500/[0.1] rounded-lg p-2 md:mr-0 mr-12">
                <Image src="/profile-pic.jpeg" alt="profile pic" width={24} height={24} className="rounded-full" />
                <p className="font-bold">Rahil Siddique</p>
            </button>
        </div>
    )
}

export default Topbar;
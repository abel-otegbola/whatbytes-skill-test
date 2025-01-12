'use client'
import BadgeIcon from "@/assets/icons/badge";
import DashboardIcon from "@/assets/icons/dashboard";
import FileIcon from "@/assets/icons/file";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { usePathname } from "next/navigation";

type link = {
  id: string,
  icon: ReactElement,
  title: string,
  href: string
}

export default function Sidebar() {
    const pathname = usePathname()
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const links: link[] = [
        { id: "0", title: "Dashboard", href: "/dashboard", icon: <DashboardIcon width={24} /> },
        { id: "1", title: "Skill Test", href: "/", icon: <BadgeIcon width={24} height={24}/> },
        { id: "2", title: "Internship", href: "/Internship", icon: <FileIcon width={24}/> }
    ]

    return (
        <>
        
        <button className="md:hidden bg-white flex flex-col gap-1 absolute top-5 right-5 p-2 bg-gray/[0.3] dark:bg-gray/[0.08] z-[100]" onClick={() => setToggleSidebar(!toggleSidebar)}>
            <span className={`p-[0.8px] w-[20px] bg-black duration-500 ${toggleSidebar ? "rotate-[40deg] translate-y-[3px]" : "rotate(0)"}`}></span>
            <span className={`p-[0.8px] w-[20px] bg-black duration-500 ${toggleSidebar ? "hidden" : "rotate(0)"}`}></span>
            <span className={`p-[0.8px] w-[20px] bg-black duration-500 ${toggleSidebar ? "rotate-[-40deg] translate-y-[-3px]" : "rotate(0)"}`}></span>
        </button>

        <div className={`flex flex-col py-[4%] md:w-[300px] h-screen md:static fixed top-0 left-0 w-full bg-white gap-1 md:pr-4 border-r border-gray-500/[0.1] z-[50] ${ toggleSidebar ? "translate-x-0" : "md:translate-x-0 translate-x-[100%]" } duration-700`}>
            {
            links.map((link: link) => (
                <Link 
                    href={link.href} 
                    key={link.id} 
                    className={`flex gap-4 items-center font-semibold md:rounded-e-full p-5 px-6 w-full hover:bg-gray-500/[0.07] opacity-[0.9] hover:text-[#5D28BE] ${pathname === link.href && "bg-gray-500/[0.07] text-[#5D28BE]" }`}
                >
                    {link.icon}
                    {link.title}
                </Link>
            ))
            }
        </div>
        </>
    );
}

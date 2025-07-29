'use client'
import Link from "next/link";
import { ReactElement, useState } from "react";
import { usePathname } from "next/navigation";
import { BoundingBoxIcon, BrainIcon, FileHtmlIcon, FilesIcon, IdentificationBadgeIcon, MathOperationsIcon } from "@phosphor-icons/react";

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
        { id: "0", title: "Dashboard", href: "/dashboard", icon: <BoundingBoxIcon width={24} /> },
        { id: "1", title: "Skill Test", href: "/", icon: <IdentificationBadgeIcon width={24}/> },
        { id: "2", title: "Internship", href: "/Internship", icon: <FilesIcon width={24}/> }
    ]

    const subjects: link[] = [
        { id: "0", title: "HTML", href: "/?subject=html", icon: <FileHtmlIcon width={24} /> },
        { id: "1", title: "Basic Math", href: "/?subject=basic-math", icon: <MathOperationsIcon width={24}/> },
        { id: "2", title: "Logical Reasoning", href: "/?subject=logical-reasoning", icon: <BrainIcon width={24}/> }
    ]

    return (
        <>
        
        <button className="md:hidden flex flex-col gap-1 fixed top-4 right-4 p-2 bg-transparent z-[100]" onClick={() => setToggleSidebar(!toggleSidebar)}>
            <span className={`p-[0.8px] w-[20px] bg-white/[0.8] duration-500 ${toggleSidebar ? "rotate-[40deg] translate-y-[3px]" : "rotate(0)"}`}></span>
            <span className={`p-[0.8px] w-[20px] bg-white/[0.8] duration-500 ${toggleSidebar ? "hidden" : "rotate(0)"}`}></span>
            <span className={`p-[0.8px] w-[20px] bg-white/[0.8] duration-500 ${toggleSidebar ? "rotate-[-40deg] translate-y-[-3px]" : "rotate(0)"}`}></span>
        </button>

        <div className={`flex flex-col gap-6 pb-[4%] md:pt-4 pt-[70px] md:w-[300px] md:sticky fixed md:top-[60px] top-0 left-0 w-full md:h-screen h-full md:bg-[#000]/[0.8] bg-[#000] gap-1 md:pr-4 border-r border-gray-500/[0.1] z-[50] ${ toggleSidebar ? "translate-x-0" : "md:translate-x-0 translate-x-[100%]" } duration-700`}>
            <div className={`flex flex-col gap-1 md:pr-4`}>
            <p className="opacity-[0.7] px-4 pb-4">GENERAL</p>
                {
                links.map((link: link) => (
                    <Link 
                        href={link.href} 
                        key={link.id} 
                        className={`flex gap-4 items-center font-semibold md:rounded-e-full p-2 w-full hover:bg-gray-500/[0.07] opacity-[0.9] hover:text-[#5D28BE] ${pathname === link.href && "bg-gray-500/[0.07] text-[#5D28BE]" }`}
                    >
                        {link.icon}
                        {link.title}
                    </Link>
                ))
                }
            </div>

            <div className={`flex flex-col gap-1 md:pr-4 border-t border-gray-500/[0.1] py-4`}>
            <p className="opacity-[0.7] p-4">ACTIVE TESTS</p>
            {
            subjects.map((link: link) => (
                <Link 
                    href={link.href} 
                    key={link.id} 
                    className={`flex gap-4 items-center md:rounded-e-full p-2 w-full hover:bg-gray-500/[0.07] opacity-[0.9] hover:text-[#5D28BE] ${pathname === link.href && "bg-gray-500/[0.07] text-[#5D28BE]" }`}
                >
                    {link.icon}
                    {link.title}
                </Link>
            ))
            }
        </div>

        </div>
        </>
    );
}

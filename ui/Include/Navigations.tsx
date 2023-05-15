'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavigation } from "./Navigator";
import { useEffect, useState } from "react";
import useWindowSize from "@/hook/useResize";

function NavigationList({navigations,opacity}:{navigations:INavigation[],opacity:number}){
    const pathname = usePathname();
    return(
        <>
        {navigations.map((navigation) => {
                const isActive = pathname?.startsWith('/categories/' + navigation.slug);
                return (
                    <div className="relative group" key={navigation.id}>
                        <div className={`flex items-center justify-between hover:bg-slate-900 md:hover:bg-white md:p-2${isActive ? 'bg-slate-900 ' : ''} rounded-md md:bg-white p-2 md:p-0 md:mx-0`}>
                            <Link className={`hover:text-rose-600 text-lg ${isActive ? 'text-rose-600 ' : 'text-gray-100 md:text-gray-900'}`}
                                href={`/categories/${navigation.slug}`}>{navigation.name}</Link>
                            {navigation.children.length != 0 && <FontAwesomeIcon icon={'angle-right'} className='mr-2 w-5 h-5 text-gray-100 md:text-gray-900' />}
                        </div>
                        {navigation.children.length != 0 &&
                            <div className="hidden mt-2 md:mt-0 md:absolute md:top-0 md:right-0 md:translate-x-full md:shadow md:bg-white group-hover:flex flex-col gap-y-2 min-w-[200px] w-full z-[2] md:border">
                                <NavigationList navigations={navigation.children} opacity={opacity-100}/>
                            </div>
                        }
                    </div>
                )
            })}
            </>
    )
}

export default function Navigations({navigations}:{navigations:INavigation[]}) {
    const [toggle,setToggle] = useState<boolean>(true)
    const size = useWindowSize();
    useEffect(()=>{
        size.width >= 768 ? setToggle(true) : setToggle(false)
    },[size.width])
    return(
        <>
            <nav className={`flex flex-col gap-y-2 ${!toggle ? 'hidden' : 'fixed z-50 inset-0 bg-black md:bg-white md:relative '}`}>
                <button onClick={()=>{setToggle(!toggle)}} className="text-white flex items-center gap-x-2 pt-2 ml-4 md:hidden">
                    <FontAwesomeIcon icon={'chevron-left'} className="w-5 h-5"/> <span>Trở về</span>
                </button>
                <NavigationList navigations={navigations} opacity={900}/>
            </nav>
            <button onClick={()=>{setToggle(!toggle)}} className="md:hidden">
                <FontAwesomeIcon icon={'list'} className="w-5 h-5"/>
            </button>
        </>
        
    )
};

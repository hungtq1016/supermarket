'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigations(props:any) {
    const navigations = props.navigations;
    const pathname = usePathname();
    return(
        <nav className="space-y-4">
            {navigations.map((navigation:any) => {
                    const isActive = pathname?.startsWith('/categories/'+navigation.slug);                    
                    return (
                        <div className="relative group" key={navigation.id}>
                            <div className="flex items-center justify-between bg-white">
                                <Link className={`hover:text-rose-600 text-lg ${isActive ? 'text-rose-600' : 'text-gray-900'}`}
                                    href={`/categories/${navigation.slug}`}>{navigation.name}</Link>
                                {navigation.children.length != 0 && <FontAwesomeIcon icon={'angle-right'} className='mr-2 w-5 h-5' />}
                            </div>
                            {navigation.children.length != 0 &&
                                <div className="hidden absolute top-0 right-0 translate-x-full shadow px-4 py-2 group-hover:flex flex-col gap-y-2 min-w-[200px] w-full bg-white z-[2] border">
                                    {
                                        navigation.children.map((child: any) => {
                                            return (
                                                <Link className='hover:text-rose-600'
                                                    href={`/categories/${child.slug}`} key={child.id}>{child.name}</Link>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    )
                })}
        </nav>
    )
};

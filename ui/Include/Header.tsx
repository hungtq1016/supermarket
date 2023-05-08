import { ReactElement } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import AccountDropdown from '../Auth/AccountDropdown';
import { useSession } from "next-auth/react";
import slugify from 'slugify';
library.add(fas)

interface navEntity{
    title:string,
    link:string
}

const navigations : Array<navEntity>=[
    {title:'Trang Chủ',link:'/'},
    {title:'Liên Hệ',link:'/contact'},
    {title:'Thông tin',link:'/about'},
    {title:'Sản Phẩm',link:'/products'},
    {title:'Tài Liệu',link:'/document'},
]

const navList = navigations.map((navigation,index)=>(
    <Link href={navigation.link} key={index}>{navigation.title}</Link>
))
function Header():ReactElement {
    const { data: session, status } = useSession()
    return ( 
        <>
            <section className="bg-black">
                <div className="max-w-7xl mx-4 md:mx-auto">
                    <div className="flex justify-between items-center py-3">
                        <div className="text-sm space-x-2">
                            <span className="text-gray-200">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                            <a href="#" className="font-bold text-gray-50">ShopNow</a>
                        </div>
    
                        <div className="relative">
                            <button className="flex items-center gap-x-1 text-gray-50">
                                <span>English</span>
                                <FontAwesomeIcon icon='angle-down' className="w-4 h-4 text-gray-50"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <header className="shadow sticky top-0 bg-white z-10">
                <div className="max-w-7xl mx-4 md:mx-auto py-2">
                    <div className="flex justify-between items-center">
                        <Link href={'/'} className='text-2xl font-bold text-gray-900'>
                            <span className="uppercase text-rose-600">s</span>
                            <span>-</span>
                            <span>m</span>
                            <span>a</span>
                            <span>r</span>
                            <span>k</span>
                            <span>e</span>
                            <span>t</span>
                        </Link>
                        <nav className="flex gap-x-12">
                            {navList}
                        </nav>
                        <div className="flex gap-x-6">
                            <div className="relative">
                                <input type="text" className="w-48 bg-gray-200 rounded-md py-2 focus:bg-none focus:ring-0 focus:outline-none pl-5"/>
                                <div className="absolute inset-y-0 right-3">
                                    <button className="flex items-center h-full">
                                        <FontAwesomeIcon icon='search' className="w-5 h-5 text-gray-900"/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-x-4 items-center">
                                <Link href={'/member/wishlist'}>
                                    <FontAwesomeIcon icon='heart' className="w-5 h-5 text-gray-900"/>
                                </Link>
                                <Link href={'/cart'}>
                                    <FontAwesomeIcon icon='shopping-cart' className="w-5 h-5 text-gray-900"/>
                                </Link>
                                {   status == "authenticated" ? 
                                    <AccountDropdown/>
                                    :
                                    <Link href={'/auth'}>
                                        <FontAwesomeIcon icon='user' className="w-5 h-5 text-gray-900"/>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
     );
}

export default Header;

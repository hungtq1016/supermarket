'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from '@/lib/interface';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

library.add(fas)


const navigations:Array<Nav> = [
    {
        title:'Tài Khoản',
        slug:'/member/account',
        icon:'user'
    },
    {
        title:'Đơn Hàng',
        slug:'/member/order',
        icon:'bag-shopping'
    },
    {
        title:'Yêu Thích',
        slug:'/member/wishlist',
        icon:'heart'
    },
]

const navList = navigations.map((nav,index)=>(
    <Menu.Item key={index}>
        {({ active }) => (
            <Link href={nav.slug}
                className={`${active ? 'bg-rose-500 text-white' : 'text-gray-900' } flex group rounded-md p-2`} >
                <div className='flex items-center gap-x-3'>
                    <FontAwesomeIcon icon={nav.icon ? nav.icon : 'atom-simple'} className='w-4 h-4'/>
                    <span>{nav.title}</span>
                </div>
            </Link>
        )}
    </Menu.Item>
))

function AccountDropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex justify-center items-center rounded-full bg-rose-600 w-8 h-8  text-gray-50 hover:bg-rose-700">
                    <FontAwesomeIcon icon={'user'} className='w-4 h-4'/>
                </Menu.Button>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
                    <Menu.Items className="absolute right-0 mt-3 w-56 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {navList}
                        <Menu.Item >
                        {({ active }) => (
                            <button onClick={async() =>  await signOut()}
                                className={`${active ? 'bg-rose-500 text-white' : 'text-gray-900' } flex w-full group rounded-md p-2 border-t`} >
                                <div className='flex items-center gap-x-3'>
                                    <FontAwesomeIcon icon={'right-from-bracket'} className='w-4 h-4'/>
                                    <span>Đăng Xuất</span>
                                </div>
                            </button>
                        )}
                    </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
    )
}
export default AccountDropdown;
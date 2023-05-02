'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

library.add(fas)
const wishlist = [
    {
        name: 'Dao cạo râu đa năng',
        image: '/images/dao-cao-rau.jpg',
        slug: '/dao-cao-rau',
        price: 500000,
        discount: 279000,
        inStock: 10
    },
    {
        name: 'Đồng hồ thông minh apple watch 7',
        image: '/images/apple-watch.jpg',
        slug: 'a/pple-watch',
        price: 710000,
        discount: 500000,
        inStock: 5
    },
    {
        name: 'Đồng hồ thông minh fake',
        image: '/images/apple-watch.jpg',
        slug: '/apple-watch',
        price: 710000,
        discount: 500000,
        inStock: 0
    }
]

function CartList(item:any){

    return (
        <div className="grid grid-cols-4 px-10 items-center py-7 border border-gray-100 rounded-md relative group" >
            <div className="flex gap-x-5 items-center">
                <Image src={item.image} alt={item.name} className='w-full h-full object-cover max-w-[80px]' width={80} height={80}/>
            </div>
            <div className="text-gray-900">
                {item.name}
            </div>
            <div className="text-center">
                <div>{item.discount ? item.discount.toLocaleString() : item.price.toLocaleString()} VNĐ </div>
                {item.inStock > 0 ? <div className='text-lime-600'>Còn Hàng</div>: <div className='text-red-600'>Hết Hàng</div>}
            </div>
            
            <Link href={`/products${item.slug}`} className="text-right text-gray-600 hover:text-gray-900">Xem sản phẩm</Link>
            <button className='absolute top-2 right-3 hidden group-hover:inline'><FontAwesomeIcon icon={'x'} className='w-4 h-4 text-red-600'/></button>
        </div>
    )
        
  
}

function Page() {
    return ( 
        <>
            <section>
                <div className="">
                    <div className='space-y-3'>
                        <div className="grid grid-cols-4 px-10 py-6">
                            <div className="text-left font-medium">Sản Phẩm</div>
                            <div className="font-medium">Tên </div>
                            <div className="text-center font-medium">Trạng Thái</div>
                            <div className="text-right font-medium"></div>
                        </div>
                        {wishlist.map((item,index)=>(<CartList key={index} {...item}/>))}
                    </div>
                </div>
            </section>
        </>
        
     );
}

export default Page;
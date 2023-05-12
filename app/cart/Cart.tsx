'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector } from '../store/store';

library.add(fas)

function CartList(item:any){
    const price = item.product.discount ? item.product.discount : item.product.price
    const [count,setCount] = useState<number>(item.inCart)
    const [total,setTotal] = useState<number>(item.inCart*price)
        function increase() {
            (count < item.product.inCart) && (setCount(count + 1) ,setTotal((count+1)*item.product.discount))
        }
    
        function decrease() {
            (count > 0) ? (setCount(count - 1) ,setTotal((count-1)*item.product.discount))
            : alert('xoa hang');
        }
    return (
        <div className="grid grid-cols-4 px-10 items-center py-7 border border-gray-100 rounded-md relative group" >
            <div className="flex gap-x-5 items-center">
                <Image src={item.product.image} alt={item.product.name} className='w-20 h-20 object-cover'  width={80} height={80}/>
                <span>{item.product.name} </span>
            </div>
            <div className="text-center">{item.product.discount ? item.product.discount.toLocaleString() : item.product.price.toLocaleString()} VNĐ </div>
            <div className="flex items-center justify-center">
                <button onClick={decrease} className='w-10 h-10 flex items-center justify-center border rounded-l-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50'><FontAwesomeIcon icon={'minus'} className='w-4 h-4'/></button>
                <input type="number" value={count} disabled className='w-10 border-y h-10 text-center'/>
                <button onClick={increase} className='w-10 h-10 flex items-center justify-center border rounded-r-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50'><FontAwesomeIcon icon={'plus'} className='w-4 h-4'/></button>

            </div>
            <div className="text-right">{total.toLocaleString()} VNĐ</div>
            <button className='absolute top-2 right-3 hidden group-hover:inline'><FontAwesomeIcon icon={'x'} className='w-4 h-4 text-red-600'/></button>
        </div>
    )
        
  
}

export default function Cart() {
    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    )
    
    return ( 
        <>
            <Link href='/' className="inline-block">
                <div className="border border-gray-400 rounded-md py-2 px-4 flex gap-x-2 items-center hover:bg-gray-100">
                    <FontAwesomeIcon icon={'arrow-left-long'} className='w-4 h-4' />
                    <span>Trở Về</span>
                </div>
            </Link>
            <section>
                <div className="max-w-7xl mx-4 md:mx-auto pt-10 pb-20">
                    {cartItems.length == 0 ?
                        <div>Giỏ Hàng Trống</div> :
                        <div className='space-y-3'>
                            <div className="grid grid-cols-4 px-10 py-6">
                                <div className="text-left font-medium">Sản Phẩm</div>
                                <div className="text-center font-medium">Đơn Giá</div>
                                <div className="text-center font-medium">Số Lượng</div>
                                <div className="text-right font-medium">Thành Tiền</div>
                            </div>
                            {cartItems.map((item, index) => (<CartList key={index} {...item} />))}
                        </div>
                    }
                    
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-4 md:mx-auto py-10">
                    <div className="grid grid-cols-3">
                        <form action="">
                            <div className="flex flex-col items-end gap-y-3">
                                <input type="text" placeholder='Gán Mã Giảm Giá Tại Đây' className='w-full border rounded-md py-2 px-4'/>
                                <button type='submit' className='inline py-3 px-6 rounded-md bg-rose-600 text-gray-50 before:border-rose-600'>Sử Dụng</button>
                            </div>
                        </form>
                        <div/>
                        <div className='border border-gray-900 rounded-md p-5'>
                            <div className='text-xl font-medium'>Tổng Quan</div>
                            <div className='divide-y'>
                                <div className='flex justify-between py-4'><span className='font-medium'>Tạm Tính:</span><span className='text-sm'>1,000,000 VNĐ</span></div>
                                <div className='flex justify-between py-4'><span className='font-medium'>Vận Chuyển:</span><span className='text-sm'>100,000 VNĐ</span></div>
                                <div className='flex justify-between py-4'><span className='font-medium'>Giảm Giá:</span><span className='text-sm'>- 80,000 VNĐ</span></div>
                                <div className='flex justify-between py-4'><span className='font-medium'>Tổng:</span><span className='font-medium'>1,020,000 VNĐ</span></div>
                            </div>
                            <div className='flex justify-center mt-3'>
                                <Link href={'/cart/payment'} className='w-full mx-6 py-2 text-center bg-rose-600 text-gray-50 rounded-md font-medium'>Thanh Toán</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
     );
}


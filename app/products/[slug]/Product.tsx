'use client'
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Rating } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import { increment } from '@/app/store/cartSlice'

import Slider from "./Slider";
import { ICartItem, IImage } from "@/lib/interface";
import Comment from "./Comment";
import { useAppDispatch } from "@/app/store";

export default function Product(props:any) {
    const product = props.product
    const children = props.child
    
    const [variantId,setVariantId] = useState(0);
    
    const [count, setCount] = useState<number>(1);
    
    useEffect(()=>{
        setCount(count > product.variants[variantId].quantity ? product.variants[variantId].quantity:count)
    },[variantId])

    function increase() {
        (count < product.variants[variantId].quantity) && setCount(count + 1)
    }

    function decrease() {
        setCount(prevCount => Math.max(prevCount - 1, 1));
    }
    function Variants() {
        return (
            <section className="py-10">
                <div className="flex gap-x-6 items-center">
                    <span className="capitalize text-xl">
                        Màu:
                    </span>
                    <div className="flex gap-x-2">
                        {product.variants.map((variant: any, index: number) => (
                            <div className={`flex items-center gap-x-2`} key={variant.id}>
                                <input id={variant.id} type="radio" value={variant.name} name="colored-radio" className="w-4 h-4 checked:accent-rose-600"
                                    checked={variantId == index}
                                    onChange={() => { setVariantId(index) }}
                                />
                                <label htmlFor={variant.id} className={`font-medium capitalize `}>{variant.color.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    const images : Array<IImage> =  product.variants[variantId].images;
    const stateProduct : ICartItem = {
        product:{
            id: product.variants[variantId].id,
            name: product.name,
            price: product.variants[variantId].price,
            discount: product.variants[variantId].discount,
            image: product.variants[variantId].images[0].url,
            color: product.variants[variantId].color.name,
            quantity: product.variants[variantId].quantity
        },
        inCart:count,
    }
    const dispatch = useAppDispatch()
    return ( 
        <>
            <section className="pb-5">
                <div className="grid grid-cols-12 gap-x-8">
                    <div className="col-span-7">
                        <Slider key={variantId} images={images} />
                    </div>
                    <div className="col-span-5">
                        <div className="flex flex-col justify-between h-full">
                            <div className="text-2xl font-semibold capitalize">{product.name}</div>
                            <div className="flex gap-x-3 text-sm">
                                <div className="flex items-center gap-x-2"><Rating value={5} /> <span>({product.variants[variantId].quantity})</span></div>
                                <span>|</span>
                                {product.variants[variantId].quantity > 0 ? <div className="text-lime-600">Còn Hàng</div> : <div className="text-red-600">Hết Hàng</div>}
                            </div>
                            <div className="text-2xl">{
                                product.variants[variantId].discount ?
                                    <div className="flex gap-x-2 items-center">
                                        {product.variants[variantId].discount.toLocaleString()} VNĐ
                                        <span className="line-through text-sm text-gray-600">{product.variants[variantId].price.toLocaleString()} VNĐ</span>
                                    </div>
                                    :
                                    product.variants[variantId].price.toLocaleString() + ' VNĐ'
                            }
                            </div>
                            <div className="text-sm text-gray-900 text-justify pb-8 border-b-2 border-gray-400">{product.detail}</div>
                            <section className="py-2">
                                <div className="text-xl font-medium">Phiên bản khác</div>
                                <div className="grid grid-cols-2 gap-x-1 mt-1">
                                    {children.map((child: any) => (
                                        <Link href={`/products/${child.slug}`} key={child.id}>
                                            <div className={`p-1 flex gap-x-1 border rounded-lg items-center hover:border-rose-600 duration-200 ${child.id == product.id && `border-rose-600`}`} >
                                                <Image src={child.image.url} alt={child.image.alt} width={40} height={40} />
                                                <div className="text-sm text-gray-600">{child.name}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                            <Variants />
                            <div className="flex gap-x-4">
                                <div className="flex">
                                    <button onClick={decrease} className='w-10 flex items-center justify-center border border-gray-600 rounded-l-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50' disabled={!(product.variants[variantId].quantity > 0)}><FontAwesomeIcon icon={'minus'} /></button>
                                    <input type="number" value={count}
                                        className='w-20 border-x-0 border-gray-600 text-center text-xl font-medium focus:ring-0 focus:outline-none' />
                                    <button onClick={increase} className='w-10 flex items-center justify-center border border-gray-600 rounded-r-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50' disabled={!(product.variants[variantId].quantity > 0)}><FontAwesomeIcon icon={'plus'} /></button>
                                </div>
                                <button onClick={() => dispatch(increment(stateProduct))}
                                className="px-6 py-2 bg-rose-600 rounded-md capitalize text-gray-50 font-medium hover:bg-rose-700 disabled:bg-gray-400" 
                                disabled={!(product.variants[variantId].quantity > 0)}>mua hàng</button>
                                <button className='px-4 flex items-center justify-center border rounded-md duration-500 bg-red-600 text-gray-50 hover:bg-red-700'><FontAwesomeIcon icon={'heart'} width={16} height={16} /></button>
                            </div>
                            <div className="border-2 border-gray-400 rounded-md divide-y-2 divide-gray-400">
                                <div className="flex items-center gap-x-4 p-3">
                                    <div>
                                        <FontAwesomeIcon icon={'shipping-fast'} className='w-10 h-10' />
                                    </div>
                                    <div>
                                        <div className="font-medium">Miễn Phí vận chuyển</div>
                                        <div className="text-xs font-medium">Cho đơn hàng trên 1,000,000 VNĐ</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4 p-3">
                                    <div >
                                        <FontAwesomeIcon icon={'check'} className='w-10 h-10' />
                                    </div>
                                    <div> 
                                        <div className="font-medium">Miễn Phí trả đổi</div>
                                        <div className="text-xs font-medium">Hoàn tiền sau 30 ngày <Link href={'/about'} className='font-normal underline'>Thông Tin</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Comment variantId={product.variants[variantId].id}/>
        </>
     );
}
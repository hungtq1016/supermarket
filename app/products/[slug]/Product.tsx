'use client'
import { useEffect, useState } from "react";

import ProductSection from "@/ui/ProductSection";

import Link from "next/link";

import { Rating } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import Slider from "./Slider";
import { IImage } from "@/lib/interface";
import Children from "./Children";
import LoadingProduct from "@/ui/LoadingUI/LoadingProduct";
import LoadingSlider from "@/ui/LoadingUI/LoadingSlider";


export default function Product({product}:any) {
        
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
            <section className="py-2">
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
                                <label htmlFor={variant.id} className={`font-medium capitalize `}>{variant.color}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    const images : Array<IImage> =  product.variants[variantId].images;
    return ( 
        <>
            <section>
                <div className="max-w-7xl mx-4 md:mx-auto pt-10 pb-20">
                    <div className="grid grid-cols-12 gap-x-8">
                        <div className="col-span-7">
                            {
                                images?
                                <Slider key={variantId} images={images}/>
                                :
                                <LoadingSlider/>
                            }
                        </div>
                        <div className="col-span-5">
                        {
                            product ?
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
                                    <Children parentId={product.parentId} id={product.id} />
                                    <Variants />
                                    <div className="flex gap-x-4">
                                        <div className="flex">
                                            <button onClick={decrease} className='w-10 h-10 flex items-center justify-center border rounded-l-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50' disabled={!(product.variants[variantId].quantity > 0)}><FontAwesomeIcon icon={'minus'} /></button>
                                            <input type="number" value={count} 
                                            className='w-20 border-y text-center text-xl font-medium focus:ring-0 focus:outline-none' />
                                            <button onClick={increase} className='w-10 h-10 flex items-center justify-center border rounded-r-md duration-500 text-gray-900 hover:text-gray-50 hover:bg-rose-600 disabled:bg-gray-400 disabled:text-gray-50' disabled={!(product.variants[variantId].quantity > 0)}><FontAwesomeIcon icon={'plus'} /></button>
                                        </div>
                                        <button className="px-6 py-2 bg-rose-600 rounded-md capitalize text-gray-50 font-medium hover:bg-rose-700 disabled:bg-gray-400" disabled={!(product.variants[variantId].quantity  > 0)}>mua hàng</button>
                                        <button className='w-10 h-10 flex items-center justify-center border rounded-md duration-500 bg-red-600 text-gray-50 hover:bg-red-700'><FontAwesomeIcon icon={'heart'} width={16} height={16} /></button>
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
                            :
                            <LoadingProduct/>
                        }
                        </div>    
                    </div>
                </div>
            </section>
            <ProductSection title="Tương Tự" about="Các sản phẩm tương tự" isSlider={false} show={4}/>
        </>
     );
}
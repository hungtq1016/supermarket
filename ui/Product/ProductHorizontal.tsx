'use client'
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { useAppDispatch } from '@/app/store';
import { increment} from '@/app/store/cartSlice'
import { ICartItem } from "@/lib/interface";

library.add(fas)
const calculateDiscount = (price:number,discount:number):number=>{
    return 100-Math.round((discount/price) * 100) ;
}

function ProductHorizontal(props:any) {

    const data = props.product
    const product = {
        id:data.product.id,
        name:data.product.name,
        slug:data.product.slug,
        detail:data.product.detail,
        price: data.price,
        discount: data.discount,
        quantity:data.quantity,
        count:data.count,
        color:data.color.name,
        image:data.images[0]
    }

    const dispatch = useAppDispatch()
    const stateProduct : ICartItem = {
        product:{
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            discount: product.discount,
            image: product.image.url,
            color: product.color,
            quantity: product.quantity
        },
        inCart:1,
    }

    return ( 
        <div className="flex p-4 bg-gray-50 mb-2 gap-x-2 justify-between items-center">      
            <div className="flex gap-x-3">
                <Image src={product.image.url} alt={product.name} width={100} height={100} className="border"/>
                <div className="flex-col flex max-w-sm justify-between">
                    <div>
                        <div className="font-medium capitalize">{product.name} - {product.color}</div>
                        <div className="flex items-center gap-x-2">
                            <Rating value={5} readOnly size='small' />
                            <span>({product.quantity})</span>
                        </div>
                    </div> 
                    <div className="truncate text-sm text-gray-600">{product.detail}</div>
                </div>
                <div className="flex flex-col gap-y-2">
                    {
                        product.discount ?
                        <>
                            <span className="text-rose-600 text-xl ">{product.discount.toLocaleString()} VNĐ</span> 
                            <span className="text-gray-600 line-through text-sm">{product.price.toLocaleString()} VNĐ</span>
                        </>:
                        <span className="text-rose-600 text-xl">{product.price.toLocaleString()} VNĐ</span> 
                    }
                    {product.discount &&
                        <div className="">
                            <span className="bg-rose-600 py-1 px-3 rounded-md text-gray-50 text-xs">
                                -{calculateDiscount(product.price, product.discount)}%
                            </span>
                        </div>
                    }
                </div>
            </div>
            <div className="space-y-3">
                <div className="flex gap-x-2">
                    <button className="flex-1 bg-red-100 p-1 rounded-sm">
                            <FontAwesomeIcon icon={'heart'} className='w-4 h-4 text-red-600' />
                    </button>
                    <button onClick={() => dispatch(increment(stateProduct))}
                    className="flex-1 bg-gray-200 p-1 rounded-sm">
                            <FontAwesomeIcon icon={'shopping-cart'} className='w-4 h-4 text-gray-600' />
                    </button>
                </div>
                <div className=" ">
                    <Link href={`products/${product.slug}`} className="px-6 py-1 border-gray-600 border rounded-md hover:border-rose-600 hover:text-rose-600 duration-300">
                        Chi tiết
                    </Link>
                </div>
            </div>  
        </div>
    );
}

export default ProductHorizontal;
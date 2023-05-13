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

function ProductVertical(props:any) {
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
        product:product,
        inCart:1,
    }

    return ( 
        <div className="relative space-y-1 group mb-4">
            <div className="relative border">
                <Image src={product.image.url} alt={product.name} width={400} height={400} className='mx-auto'/>
                <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 duration-700">
                    <button onClick={() => dispatch(increment(stateProduct))}
                    className="w-full py-2 bg-black text-gray-50">
                        Thêm vào giỏ
                    </button>
                </div>
                <div className="absolute top-2 right-2 space-y-2 hidden group-hover:inline">
                    <div className="bg-gray-50 rounded-full">
                        <button className="w-6 h-6 flex items-center  justify-center ">
                            <FontAwesomeIcon icon={'heart'} className='w-4 h-4 text-red-600'/>
                        </button>
                    </div>
                    <div className="bg-gray-50 rounded-full">
                        <Link href={`/products/${product.slug}`} className="w-6 h-6 flex items-center  justify-center ">
                            <FontAwesomeIcon icon={'eye'} className='w-4 h-4 text-gray-700'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="font-medium capitalize">{product.name +' - '+product.color}</div>
            <div className="font-medium space-x-3">
                {
                    product.discount ?
                    <>
                        <span className="text-rose-600">{product.discount.toLocaleString()} VNĐ</span> 
                        <span className="text-gray-600 line-through">{product.price.toLocaleString()} VNĐ</span>
                    </>:
                    <span className="text-rose-600">{product.price.toLocaleString()} VNĐ</span> 
                }
            </div>
            <div className="flex items-center gap-x-2">
                <Rating value={5} readOnly size='small'/>
                <span>({product.quantity})</span>
            </div>
            {   product.discount && 
                <div className="absolute top-2 left-2">
                    <div className="bg-rose-600 py-1 px-3 rounded-md text-gray-50 text-xs">
                        -{calculateDiscount(product.price,product.discount)}%
                    </div>
                </div>
            }
           
        </div>
    );
}

export default ProductVertical;
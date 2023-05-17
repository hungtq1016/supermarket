'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link';
import Image from 'next/image';
import useWishlist from '@/hook/useWishlist';
import Loading from '@/app/loading';
import axios from 'axios';

async function removeWishlist(payload:any){
   await axios.delete('/api/wishlist',payload.id)
    .catch((e) => console.log(e));

}

function CartList({ item }: { item: any }) {
    const product = item?.variant
    const image = (item?.variant?.images || [])[0]
    return (
        <div className="grid grid-cols-4 px-10 items-center py-7 border border-gray-100 rounded-md relative group" >
            <div className="flex gap-x-5 items-center">
                <Image src={image?.url} alt={product?.product?.name} className='w-full h-full object-cover max-w-[80px]' width={80} height={80} />
            </div>
            <div className="text-gray-900">
                {product?.product?.name}
            </div>
            <div className="text-center">
                <div>{product?.discount ? product?.discount.toLocaleString() : product?.price.toLocaleString()} VNĐ </div>
                {product?.quantity > 0 ? <div className='text-lime-600'>Còn Hàng</div> : <div className='text-red-600'>Hết Hàng</div>}
            </div>

            <Link href={`/products/${product?.product?.slug}`} className="text-right text-gray-600 hover:text-gray-900">Xem sản phẩm</Link>
            <form >
                <button onClick={() =>removeWishlist(product.id)}
                className='absolute top-2 right-3 hidden group-hover:inline'><FontAwesomeIcon icon={'x'} className='w-4 h-4 text-red-600' /></button>
            </form>
        </div>
    )


}

export default function Wishlist() {
    const { data, error, isLoading } = useWishlist()
    if(isLoading) {return <Loading/>}
    if(error) {return <div>Lỗi Khổng Thể Tải Trang</div>}
    return (
        <section>
            <div className="">
                <div className='space-y-3'>
                    <div className="grid grid-cols-4 px-10 py-6">
                        <div className="text-left font-medium">Sản Phẩm</div>
                        <div className="font-medium">Tên </div>
                        <div className="text-center font-medium">Trạng Thái</div>
                        <div className="text-right font-medium"></div>
                    </div>
                    {data?.map((item: any, index: number) => (<CartList key={index} item={item} />))}
                </div>
            </div>
        </section>
    );
}
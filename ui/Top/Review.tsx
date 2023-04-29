import { Product } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";

type  product = Omit<Product,"price"|"rating"|"totalRating">;

const products : Array<product> = [
    {
        name:'Apple watch 6',
        slug:'san-pham',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi exercitationem modi beatae nemo suscipit optio fugit alias fugiat, fuga, reprehenderit, unde blanditiis quas esse nihil et? Facere velit tempora praesentium!',
        image:'/images/apple-watch.jpg'
    },
    {
        name:'Vỏ đựng Airpod',
        slug:'san-pham',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi exercitationem modi beatae nemo suscipit optio fugit alias fugiat, fuga, reprehenderit, unde blanditiis quas esse nihil et? Facere velit tempora praesentium!',
        image:'/images/case-airpod.jpg'
    },
    {
        name:'Dao cạo râu',
        slug:'san-pham',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi exercitationem modi beatae nemo suscipit optio fugit alias fugiat, fuga, reprehenderit, unde blanditiis quas esse nihil et? Facere velit tempora praesentium!',
        image:'/images/dao-cao-rau.jpg'
    },
    {
        name:'Loa Bluetooth',
        slug:'san-pham',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi exercitationem modi beatae nemo suscipit optio fugit alias fugiat, fuga, reprehenderit, unde blanditiis quas esse nihil et? Facere velit tempora praesentium!',
        image:'/images/loa-bluetooth.jpg'
    },
]

function Review() {
    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-20">
                <div className="section-title">
                    Xem Thêm
                </div>
                <div className="flex items-end gap-x-20 mt-3">
                    <span className="text-4xl font-semibold capitalize">Hàng mới</span>
                </div>
                <div className="grid grid-cols-4 grid-rows-2 span-pos gap-8 max-h-[640px] mt-10">
                    {products.map((product,index)=>(
                        <div className={`pos-${index} relative`} key={index}>
                            <img src={product.image} alt={product.name} className='w-full !h-full object-cover' width={500} height={500}/>
                                <div className="absolute inset-x-0 bottom-6 px-4 text-gray-50 z-[2] space-y-2">
                                    <div className="text-2xl font-semibold">{product.name}</div>
                                    <div className="truncate text-sm text-gray-200">{product.desc}</div>
                                    <Link href={`/product/${product.slug}`} className='font-medium inline-block underline'>
                                        Xem Thêm
                                    </Link>
                                </div>
                            <div className="bg-black absolute inset-0 bg-opacity-50 z-[1]"/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}

export default Review;
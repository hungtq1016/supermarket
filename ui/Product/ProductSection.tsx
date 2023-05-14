import Link from 'next/link';
import Timer from '../Include/Timer';
import getProductsByFilter from '@/lib/fetchData/getProductsByFilter';
import ProductSwiper from './ProductSwiper';
import ProductVertical from './ProductVertical';
import { IVariant } from '@/lib/interface';

export default async function ProductSection(props:any) {
    
  const productsData: Promise<Array<IVariant>> = getProductsByFilter(props.query)
  const products = await productsData

    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto border-b-2 border-gray-100 py-20">
                <div className="section-title">
                    {props.title}
                </div>
                <div className={`flex items-end gap-x-20 mt-3 ${props.timer ? 'justify-start' :'justify-between'}`}>
                    <span className="text-4xl font-semibold capitalize">{props.about}</span>
                    {props.timer && <Timer duration={props.countTime ? props.countTime : 0} />}
                    {props.btnTop &&<button className="btn bg-rose-600 text-gray-50 before:border-rose-600"> Xem thêm
                    </button>}
                </div>
                <div className="mt-10">
                    {   
                        props.isSlider ?
                        <ProductSwiper products={products} /> :
                        <div className="grid grid-cols-4 gap-x-2">
                            {products.map((product:any,index:number)=>{
                                return(
                                    <ProductVertical key={index} product={product}/>
                                )
                            })}
                        </div>
                    }
                </div>
                {
                    props.btnBottom && <div className="mt-14 flex justify-center">
                    <Link href={'/products'} className="btn bg-rose-600 text-gray-50 before:border-rose-600">
                        Xem thêm
                    </Link>
                </div>
                }
            </div>
        </section>
     );
}
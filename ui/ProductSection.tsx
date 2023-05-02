"use client";

import {Product, SectionProps} from '@/lib/interface'
import ProductCard from "@/ui/Product";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core";
import Link from 'next/link';
import Timer from './Timer';

library.add(fas)

const products: Array<Product> = [
    {
        name: 'Dao cạo râu đa năng',
        image: '/images/dao-cao-rau.jpg',
        slug: 'dao-cao-rau',
        price: 500000,
        discount: 279000,
        rating: 4.8,
        totalRating: 664
    },
    {
        name: 'đồng hồ thông minh apple watch 7',
        image: '/images/apple-watch.jpg',
        slug: 'apple-watch',
        price: 710000,
        discount: 500000,
        rating: 4.3,
        totalRating: 143
    },
    {
        name: 'Tai nghe không dây Airpod',
        image: '/images/air-pod.jpg',
        slug: 'air-pod',
        price: 100000,
        discount: 53000,
        rating: 4.3,
        totalRating: 33
    },
    {
        name: 'Vỏ đựng tai nghe không dây',
        image: '/images/case-airpod.jpg',
        slug: 'case-airpod',
        price: 36000,
        discount: 22000,
        rating: 4.0,
        totalRating: 123
    },
    {
        name: 'loa bluetooth',
        image: '/images/loa-bluetooth.jpg',
        slug: 'loa-bluetooth',
        price: 165000,
        discount: 113000,
        rating: 4.8,
        totalRating: 82
    },
    {
        name: 'Dao cạo râu đa năng',
        image: '/images/dao-cao-rau.jpg',
        slug: 'dao-cao-rau',
        price: 500000,
        // discount: 279000,
        rating: 4.8,
        totalRating: 664
    },
    {
        name: 'đồng hồ thông minh apple watch 7',
        image: '/images/apple-watch.jpg',
        slug: 'apple-watch',
        price: 710000,
        discount: 500000,
        rating: 4.3,
        totalRating: 143
    },
    {
        name: 'Tai nghe không dây Airpod',
        image: '/images/air-pod.jpg',
        slug: 'air-pod',
        price: 100000,
        discount: 53000,
        rating: 4.3,
        totalRating: 33
    },
    {
        name: 'Vỏ đựng tai nghe không dây',
        image: '/images/case-airpod.jpg',
        slug: 'case-airpod',
        price: 36000,
        // discount: 22000,
        rating: 4.0,
        totalRating: 123
    },
    {
        name: 'loa bluetooth',
        image: '/images/loa-bluetooth.jpg',
        slug: 'loa-bluetooth',
        price: 165000,
        discount: 113000,
        rating: 4.8,
        totalRating: 82
    },
]


function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute -top-10 bg-rose-600 before:content-[''] hover:bg-rose-700 rounded-full w-8 h-8 flex items-center justify-center z-[1] right-0 -translate-y-full" onClick={onClick} >
            <FontAwesomeIcon icon="angle-right" className="w-5 h-5 text-gray-100" />
        </div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute -top-10 bg-rose-600 before:content-[''] hover:bg-rose-700 rounded-full w-8 h-8 flex items-center justify-center z-[1] right-10 -translate-y-full" onClick={onClick} >
            <FontAwesomeIcon icon="angle-left" className="w-5 h-5 text-gray-100" />
        </div>
    );
}


function ProductSection(props:SectionProps) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        rows:props.rows ? props.rows : 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
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
                        <Slider {...settings}>
                            {products.map((product,index)=>(
                                <ProductCard key={index} product={product}/>
                            ))}
                        </Slider>
                        :
                        <div className="grid grid-cols-4 gap-x-4">
                            {products.slice(0,props.show).map((product,index)=>(
                                <ProductCard key={index} product={product}/>
                            ))}
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

export default ProductSection;
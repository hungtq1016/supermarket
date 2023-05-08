"use client";

import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library } from "@fortawesome/fontawesome-svg-core";
import {Category} from '@/lib/interface'
import CategoryCard from "./Category";

library.add(fas)


const categories : Array<Category> = [
    {
        name:'Điện Thoại',
        icon: 'mobile',
        slug:'/mobile'
    },
    {
        name:'Camera',
        icon:'camera',
        slug:'/camera',
    },
    {
        name:'Máy Tính',
        icon:'computer',
        slug:'/computer',
    },
    {
        name:'Tay Cầm',
        icon:'gamepad',
        slug:'/gamepad',
    },
    {
        name:'Tai Nghe',
        icon:'headphones',
        slug:'/head-phones',
    },
    {
        name:'Đồng Hồ Thông Minh',
        icon:'clock',
        slug:'/clock',
    },
    {
        name:'Laptop',
        icon:'laptop',
        slug:'/laptop',
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

function Categories() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto border-b-2 border-gray-100 py-20">
                <div className="section-title">
                    Danh mục
                </div>
                <div className="flex items-end gap-x-20 mt-3">
                    <span className="text-4xl font-semibold capitalize">Tìm theo mục</span>
                </div>
                <div className="mt-10">
                    <Slider {...settings}>
                            {categories.map((category,index)=>(
                                <CategoryCard key={index} category={category}/>
                            ))}
                    </Slider>
                </div>
            </div>
        </section>
     );
}

export default Categories;
'use client'

import { Nav } from "@/lib/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Suspense } from "react";
import Slider from "react-slick";

const navigations : Array<Nav>  = [
    {
        title:'Thời Trang Nam',
        slug:'/category/men-fashion',
        subNav:[
            {
                title:"Quần",
                slug:'/category/pant'
            },
            {
                title:"Áo",
                slug:'/category/shirt'
            },
        ]
    },
    {
        title:"Điện Thoại",
        slug:'/category/cell-phone'
    },
    {
        title:"Máy Tính",
        slug:'/category/computer'
    },
    {
        title:"Laptop",
        slug:'/category/laptop'
    },
    {
        title:"Màn Hình",
        slug:'/category/monitor'
    }
]

const banners = [
    {
        img:'/images/slide1.jpg',
    },
    {
        img:'/images/slide2.jpg',
    },
    {
        img:'/images/slide3.jpg',
    },
]

const navList = navigations.map((nav:Nav,index)=>(
    <div className="relative group" key={index}>
        <div className="flex items-center justify-between bg-white">
            <Link href={nav.slug} className='hover:text-rose-600'>{nav.title}</Link>
            {nav.subNav && <FontAwesomeIcon icon={'angle-right'} className='mr-2 w-5 h-5'/>}
        </div>
        {nav.subNav && 
        <div className="hidden absolute top-0 right-0 translate-x-full shadow px-4 py-2 group-hover:flex flex-col gap-y-2 min-w-[200px] w-full bg-white z-[2] border">
            {nav.subNav.map((subNav,index)=>(
                <Link href={subNav.slug} key={index} className='hover:text-rose-600'>{subNav.title}</Link>
            ))}
        </div>
        }
    </div>
))

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return ( 
        <section>
            <div className="max-w-7xl mx-4 md:mx-auto py-10">
                <div className="grid grid-cols-5 gap-x-10">
                    {/* <nav className="pr-8 space-y-4">
                        {navList}
                    </nav> */}
                    <Suspense fallback={<p>Loading...</p>}>
                        <nav className="pr-8 space-y-4">
                            {navList}
                        </nav>
                    </Suspense>
                    <div className="col-span-4">
                        <Slider {...settings} className='relative'>
                                {banners.map((banner,index)=>(
                                    <img src={banner.img} alt={`banner-${index}`} key={index}/>
                                ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Banner;
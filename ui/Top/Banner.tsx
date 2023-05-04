'use client'

import Slider from "react-slick";
import CategoriesList from "../CategoriesList";
import Image from "next/image";

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
                    <CategoriesList/>
                    <div className="col-span-4">
                        <Slider {...settings} className='relative'>
                                {banners.map((banner,index)=>(
                                    <Image src={banner.img} alt={`banner-${index}`} key={index} width={1080} height={600}/>
                                ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Banner;